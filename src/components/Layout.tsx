import { Outlet, NavLink, Link } from 'react-router-dom';
import { Home, Calendar, Utensils, Gift, User } from 'lucide-react';
import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { Logo } from './Logo';

export function Layout() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-slate-900 text-slate-900 dark:text-white font-sans selection:bg-brand-200 selection:text-brand-900 pb-32 transition-colors duration-300">
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl sticky top-0 px-6 py-3 flex justify-between items-center z-30 border-b border-slate-100/50 dark:border-slate-800/50 transition-colors duration-300">
        <Link to="/" className="flex items-center">
          <Logo className="w-40 h-auto" />
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/profile" className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-100 to-brand-50 dark:from-brand-900 dark:to-brand-800 border border-brand-200 dark:border-brand-700 flex items-center justify-center text-brand-700 dark:text-brand-300 font-bold text-sm shadow-sm transition-colors duration-300 hover:scale-105 active:scale-95">
            <User size={18} />
          </Link>
        </div>
      </header>
      
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Outlet />
        </motion.div>
      </main>

      <div className="fixed bottom-6 left-4 right-4 z-40 pointer-events-none">
        <motion.nav 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 24, delay: 0.2 }}
          className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.3)] rounded-3xl px-6 py-4 flex justify-between items-center pointer-events-auto max-w-md mx-auto transition-colors duration-300"
        >
          <NavItem to="/" icon={<Home size={22} strokeWidth={2.5} />} label="Início" />
          <NavItem to="/protocol" icon={<Calendar size={22} strokeWidth={2.5} />} label="Protocolo" />
          <NavItem to="/recipe" icon={<Utensils size={22} strokeWidth={2.5} />} label="Receitas" />
          <NavItem to="/bonus" icon={<Gift size={22} strokeWidth={2.5} />} label="Bônus" />
        </motion.nav>
      </div>
    </div>
  );
}

function NavItem({ to, icon, label }: { to: string; icon: ReactNode; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative flex flex-col items-center gap-1.5 transition-all duration-300 ${
          isActive ? 'text-brand-600 dark:text-brand-400 scale-110' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
        }`
      }
    >
      {({ isActive }) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex flex-col items-center gap-1.5"
        >
          {icon}
          <span className="text-[9px] font-bold uppercase tracking-widest">{label}</span>
          {isActive && (
            <motion.div
              layoutId="nav-indicator"
              className="absolute -bottom-2 w-1 h-1 rounded-full bg-brand-500 dark:bg-brand-400"
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            />
          )}
        </motion.div>
      )}
    </NavLink>
  );
}
