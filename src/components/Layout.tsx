import { Outlet, NavLink } from 'react-router-dom';
import { Home, Calendar, Utensils, Gift, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Layout() {
  return (
    <div className="flex flex-col h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center z-10">
        <h1 className="text-xl font-bold text-emerald-600 tracking-tight">GELATINA MONJARO</h1>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
            GM
          </div>
        </div>
      </header>
      
      <main className="flex-1 overflow-y-auto pb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="h-full"
        >
          <Outlet />
        </motion.div>
      </main>

      <nav className="fixed bottom-0 w-full bg-white border-t border-slate-200 px-6 py-3 flex justify-between items-center z-20 pb-safe">
        <NavItem to="/" icon={<Home size={24} />} label="Início" />
        <NavItem to="/protocol" icon={<Calendar size={24} />} label="Protocolo" />
        <NavItem to="/recipe" icon={<Utensils size={24} />} label="Receita" />
        <NavItem to="/bonus" icon={<Gift size={24} />} label="Bônus" />
        <NavItem to="/chat" icon={<MessageCircle size={24} />} label="IA" />
      </nav>
    </div>
  );
}

function NavItem({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center gap-1 transition-colors ${
          isActive ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-600'
        }`
      }
    >
      {icon}
      <span className="text-[10px] font-medium uppercase tracking-wider">{label}</span>
    </NavLink>
  );
}
