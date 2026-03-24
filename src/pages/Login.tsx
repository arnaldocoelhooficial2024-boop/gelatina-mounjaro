import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, KeyRound } from 'lucide-react';
import { Logo } from '../components/Logo';
import { supabase } from '../lib/supabase';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      navigate('/');
    } catch (err: any) {
      console.error('Login error:', err);
      setError('E-mail ou senha incorretos. Se for seu primeiro acesso, clique em "Primeiro acesso / Criar senha".');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      setError('Por favor, digite seu e-mail da compra no campo acima primeiro.');
      return;
    }

    setIsResetting(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'https://appgelatinamounjarooficial.online/reset-password',
      });

      if (error) throw error;

      setSuccessMessage('Enviamos um link para seu e-mail. Acesse sua caixa de entrada para criar sua senha.');
    } catch (err: any) {
      console.error('Reset password error:', err);
      setError(err.message || 'Erro ao enviar e-mail de recuperação. Verifique se o e-mail está correto.');
    } finally {
      setIsResetting(false);
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
          <motion.h1 variants={itemVariants} className="text-3xl font-serif font-bold tracking-tight">Bem-vinda de volta</motion.h1>
          <motion.p variants={itemVariants} className="text-slate-500 dark:text-slate-400 text-sm">Acesse seu protocolo Gelatina Mounjaro</motion.p>
        </div>

        <motion.div variants={itemVariants} className="space-y-5 bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700">
          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-xl text-sm text-red-600 dark:text-red-400 text-center"
            >
              {error}
            </motion.div>
          )}

          {successMessage && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl text-sm text-green-600 dark:text-green-400 text-center"
            >
              {successMessage}
            </motion.div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">E-mail da Compra</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-slate-400" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all dark:text-white"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Senha</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-slate-400" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all dark:text-white"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button 
                type="button" 
                onClick={handleResetPassword}
                disabled={isResetting}
                className="text-xs font-bold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 transition-colors"
              >
                Esqueci minha senha
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Entrando...' : (
                <>Entrar <ArrowRight size={18} /></>
              )}
            </motion.button>
          </form>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-slate-800 text-slate-500">ou</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={handleResetPassword}
            disabled={isResetting}
            className="w-full bg-gradient-to-r from-brand-600 to-pink-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:from-brand-700 hover:to-pink-700 transition-all shadow-lg shadow-brand-600/20 dark:shadow-brand-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isResetting ? 'Enviando link...' : (
              <>Primeiro acesso / Criar senha <KeyRound size={18} /></>
            )}
          </motion.button>
        </motion.div>

        <motion.p variants={itemVariants} className="text-center text-sm text-slate-500 dark:text-slate-400">
          Ainda não comprou?{' '}
          <Link to="/register" className="font-bold text-brand-600 dark:text-brand-400 hover:underline">
            Garantir acesso
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
