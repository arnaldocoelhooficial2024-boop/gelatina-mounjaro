import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Logo } from '../components/Logo';
import { supabase } from '../lib/supabase';

export function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se o usuário chegou aqui através de um link de recuperação válido
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      // Se não houver sessão e não houver hash na URL (o Supabase usa hash para o token de recuperação)
      if (!session && !window.location.hash) {
        setError('Sessão de recuperação inválida ou expirada. Por favor, solicite um novo link.');
      }
    };

    checkSession();
  }, []);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      });

      if (error) throw error;

      setSuccess(true);
      
      // Redireciona para o login após 3 segundos
      setTimeout(() => {
        navigate('/login');
      }, 3000);

    } catch (err: any) {
      console.error('Update password error:', err);
      setError(err.message || 'Erro ao atualizar a senha. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col justify-center p-6 text-slate-900 dark:text-white transition-colors duration-300">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full mx-auto bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700 text-center space-y-6"
        >
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
              <CheckCircle2 size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-serif font-bold">Senha criada com sucesso!</h2>
          <p className="text-slate-500 dark:text-slate-400">
            Sua senha foi atualizada. Você será redirecionado para o login em instantes...
          </p>
          <button
            onClick={() => navigate('/login')}
            className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-2xl font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all"
          >
            Fazer Login Agora
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col justify-center p-6 text-slate-900 dark:text-white transition-colors duration-300">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md w-full mx-auto space-y-8"
      >
        <div className="text-center space-y-2">
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <Logo className="w-64 h-auto" />
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-3xl font-serif font-bold tracking-tight">Criar Nova Senha</motion.h1>
          <motion.p variants={itemVariants} className="text-slate-500 dark:text-slate-400 text-sm">
            Digite sua nova senha de acesso ao protocolo
          </motion.p>
        </div>

        <motion.form variants={itemVariants} onSubmit={handleResetPassword} className="space-y-5 bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700">
          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-xl text-sm text-red-600 dark:text-red-400 text-center"
            >
              {error}
            </motion.div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Nova Senha</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock size={18} className="text-slate-400" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all dark:text-white"
                placeholder="Mínimo de 6 caracteres"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Confirmar Nova Senha</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock size={18} className="text-slate-400" />
              </div>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all dark:text-white"
                placeholder="Repita a senha"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading || !!error?.includes('inválida')}
            className="w-full bg-gradient-to-r from-brand-600 to-pink-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:from-brand-700 hover:to-pink-700 transition-all shadow-lg shadow-brand-600/20 dark:shadow-brand-900/20 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Salvando...' : (
              <>Salvar Senha <ArrowRight size={18} /></>
            )}
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
