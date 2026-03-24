import { supabaseAdmin } from '../lib/supabaseAdmin.js';
import crypto from 'crypto';

export default async function handler(req, res) {
  // 1. Validação do método
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido. Use POST.' });
  }

  try {
    // 2. Extração dos dados do payload da Cakto
    const { status, customer, product, created_at } = req.body;

    // 3. Verificação do status do pagamento
    if (status !== 'paid' && status !== 'approved') {
      return res.status(200).json({ 
        success: true, 
        message: `Evento ignorado. Status atual: ${status}` 
      });
    }

    const email = customer?.email;
    const nome = customer?.name || 'Cliente';
    const produto = product?.name || 'Produto Principal';

    if (!email) {
      return res.status(400).json({ error: 'Email do cliente não encontrado no payload.' });
    }

    // 4. Verifica se o usuário já existe no Supabase Auth
    let userId;
    const { data: existingUsers, error: searchError } = await supabaseAdmin.auth.admin.listUsers();
    
    if (searchError) throw searchError;

    const existingUser = existingUsers.users.find(u => u.email === email);

    if (existingUser) {
      userId = existingUser.id;
    } else {
      // 5. Criação automática do usuário no Supabase Auth
      // Gera uma senha aleatória de 32 caracteres (o usuário acessará via Magic Link ou "Esqueci a senha")
      const randomPassword = crypto.randomBytes(16).toString('hex');

      const { data: newUser, error: createError } = await supabaseAdmin.auth.admin.createUser({
        email: email,
        password: randomPassword,
        email_confirm: true, // Pula a etapa de confirmação de email
        user_metadata: { name: nome }
      });

      if (createError) throw createError;
      userId = newUser.user.id;
    }

    // 6. Gravação/Atualização dos dados na tabela users_access
    const { error: dbError } = await supabaseAdmin
      .from('users_access')
      .upsert({
        id: userId,
        email: email,
        nome: nome,
        status_pagamento: status,
        produto: produto,
        data_pagamento: created_at ? new Date(created_at).toISOString() : new Date().toISOString(),
        liberado: true
      }, { 
        onConflict: 'id' // Se o ID já existir, atualiza os dados
      });

    if (dbError) throw dbError;

    // 7. Resposta de sucesso para a Cakto
    return res.status(200).json({ 
      success: true, 
      message: 'Usuário processado e acesso liberado com sucesso.' 
    });

  } catch (error) {
    console.error('[WEBHOOK ERROR]:', error);
    return res.status(500).json({ 
      error: 'Erro interno no processamento do webhook.',
      details: error.message 
    });
  }
}
