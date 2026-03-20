import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Flame, Trophy, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Dashboard() {
  const [progress, setProgress] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    // Simulate loading progress from DB
    const savedProgress = localStorage.getItem('gm_progress') || '0';
    const savedStreak = localStorage.getItem('gm_streak') || '0';
    setProgress(parseInt(savedProgress, 10));
    setStreak(parseInt(savedStreak, 10));
  }, []);

  const handleCheckIn = () => {
    if (progress < 30) {
      const newProgress = progress + 1;
      const newStreak = streak + 1;
      setProgress(newProgress);
      setStreak(newStreak);
      localStorage.setItem('gm_progress', newProgress.toString());
      localStorage.setItem('gm_streak', newStreak.toString());
    }
  };

  return (
    <div className="p-6 space-y-8">
      <section className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Olá, Vencedora!</h2>
        <p className="text-slate-500">Pronta para mais um dia de transformação?</p>
      </section>

      <section className="bg-emerald-600 text-white rounded-3xl p-6 shadow-lg shadow-emerald-600/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
        <div className="relative z-10 flex justify-between items-end">
          <div className="space-y-4">
            <p className="text-emerald-100 font-medium uppercase tracking-wider text-xs">Progresso do Protocolo</p>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-bold tracking-tighter">{progress}</span>
              <span className="text-emerald-200 text-lg">/ 30 dias</span>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white/20 px-4 py-3 rounded-2xl backdrop-blur-sm">
            <Flame className="text-orange-300 mb-1" size={24} />
            <span className="font-bold text-xl">{streak}</span>
            <span className="text-[10px] uppercase tracking-wider text-emerald-100">Streak</span>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="h-2 bg-emerald-800/50 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(progress / 30) * 100}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <button 
          onClick={handleCheckIn}
          disabled={progress >= 30}
          className="bg-white border border-slate-200 p-5 rounded-3xl flex flex-col items-center justify-center gap-3 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
            <CheckCircle2 className="text-emerald-600" size={24} />
          </div>
          <span className="font-semibold text-slate-700">Check-in Diário</span>
        </button>
        
        <Link to="/protocol" className="bg-white border border-slate-200 p-5 rounded-3xl flex flex-col items-center justify-center gap-3 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group">
          <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
            <Trophy className="text-indigo-600" size={24} />
          </div>
          <span className="font-semibold text-slate-700">Ver Protocolo</span>
        </Link>
      </section>

      <section className="bg-slate-900 text-white rounded-3xl p-6 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-lg mb-1">Aceleradores</h3>
          <p className="text-slate-400 text-sm">Descubra como potencializar.</p>
        </div>
        <Link to="/recipe" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
          <ChevronRight size={20} />
        </Link>
      </section>
    </div>
  );
}
