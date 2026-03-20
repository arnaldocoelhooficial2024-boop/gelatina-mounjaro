import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Flame, Trophy, ChevronRight, Sparkles, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Dashboard() {
  const [progress, setProgress] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const savedCompleted = localStorage.getItem('completedDays');
    if (savedCompleted) {
      const completedArray = JSON.parse(savedCompleted);
      setProgress(completedArray.length);
      
      let currentStreak = 0;
      for (let i = 1; i <= 30; i++) {
        if (completedArray.includes(i)) {
          currentStreak++;
        } else {
          break;
        }
      }
      setStreak(currentStreak);
    }
  }, []);

  const handleCheckIn = () => {
    const savedCompleted = localStorage.getItem('completedDays');
    let completedArray: number[] = savedCompleted ? JSON.parse(savedCompleted) : [];
    
    // Find the first uncompleted day
    let nextDay = 1;
    while (completedArray.includes(nextDay) && nextDay <= 30) {
      nextDay++;
    }

    if (nextDay <= 30) {
      completedArray.push(nextDay);
      localStorage.setItem('completedDays', JSON.stringify(completedArray));
      setProgress(completedArray.length);
      
      let currentStreak = 0;
      for (let i = 1; i <= 30; i++) {
        if (completedArray.includes(i)) {
          currentStreak++;
        } else {
          break;
        }
      }
      setStreak(currentStreak);
    }
  };

  return (
    <div className="p-6 space-y-8 max-w-md mx-auto">
      <header className="space-y-1 mt-2">
        <h2 className="text-3xl font-serif font-bold tracking-tight text-slate-900 dark:text-white">Olá, Vencedora!</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Pronta para continuar sua transformação?</p>
      </header>

      {/* Premium Progress Widget */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-800 text-white rounded-[2rem] p-8 shadow-xl shadow-brand-900/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        
        <div className="relative z-10 flex justify-between items-start mb-8">
          <div className="space-y-1">
            <p className="text-brand-200 font-bold uppercase tracking-widest text-[10px] flex items-center gap-1.5">
              <Target size={12} /> Progresso do Protocolo
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-6xl font-bold tracking-tighter font-serif leading-none text-white">{progress}</span>
              <span className="text-brand-200 text-lg font-medium">/ 30 dias</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center bg-white/10 px-4 py-3 rounded-2xl backdrop-blur-md border border-white/20 shadow-inner">
            <Flame className="text-orange-300 mb-1 drop-shadow-md" size={24} />
            <span className="font-bold text-xl leading-none text-white">{streak}</span>
            <span className="text-[8px] font-bold uppercase tracking-widest text-brand-200 mt-1">Fogo</span>
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="flex justify-between text-xs font-medium text-brand-200 mb-2 px-1">
            <span>Início</span>
            <span>Meta (30d)</span>
          </div>
          <div className="h-3 bg-brand-900/50 rounded-full overflow-hidden shadow-inner border border-brand-800/50">
            <motion.div 
              className="h-full bg-white rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${(progress / 30) * 100}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gamification Explanation */}
      <section className="bg-white dark:bg-slate-800 rounded-[2rem] p-6 border border-slate-100 dark:border-slate-700 shadow-sm space-y-4 transition-colors duration-300">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-100 dark:border-orange-500/20">
            <Flame className="text-orange-500" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 dark:text-white font-serif text-lg">O que é o Fogo?</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              O <strong className="text-slate-800 dark:text-white">Fogo</strong> indica quantos dias seguidos você fez o protocolo sem falhar. 
              Faça seu check-in diário para manter sua chama acesa e acelerar seus resultados!
            </p>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="grid grid-cols-2 gap-4">
        <button 
          onClick={handleCheckIn}
          disabled={progress >= 30}
          className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-6 rounded-[2rem] flex flex-col items-center justify-center gap-4 shadow-sm hover:border-brand-200 dark:hover:border-brand-700 hover:shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 dark:from-brand-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="w-14 h-14 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10 border border-brand-100 dark:border-brand-800">
            <CheckCircle2 className="text-brand-600 dark:text-brand-400" size={28} strokeWidth={2} />
          </div>
          <span className="font-bold text-slate-700 dark:text-slate-200 text-sm relative z-10">Check-in Diário</span>
        </button>
        
        <Link to="/protocol" className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-6 rounded-[2rem] flex flex-col items-center justify-center gap-4 shadow-sm hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all duration-300 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 dark:from-slate-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="w-14 h-14 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10 border border-slate-100 dark:border-slate-600">
            <Trophy className="text-slate-600 dark:text-slate-400" size={28} strokeWidth={2} />
          </div>
          <span className="font-bold text-slate-700 dark:text-slate-200 text-sm relative z-10">Ver Protocolo</span>
        </Link>
      </section>

      {/* Accelerators Banner */}
      <section className="bg-slate-900 text-white rounded-[2rem] p-6 flex items-center justify-between shadow-lg shadow-slate-900/10 relative overflow-hidden group">
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl group-hover:bg-brand-500/30 transition-colors duration-500"></div>
        <div className="relative z-10">
          <h3 className="font-bold text-xl mb-1 font-serif flex items-center gap-2">
            <Sparkles size={20} className="text-brand-400" /> Aceleradores
          </h3>
          <p className="text-slate-400 text-sm">Potencialize seus resultados hoje.</p>
        </div>
        <Link to="/bonus" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors relative z-10 backdrop-blur-md border border-white/10">
          <ChevronRight size={20} />
        </Link>
      </section>

      {/* Weight Tracking Widget */}
      <section className="bg-white dark:bg-slate-800 rounded-[2rem] p-6 border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden group">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center border border-emerald-100 dark:border-emerald-500/20">
              <Target className="text-emerald-500" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-white font-serif">Seu Progresso</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Acompanhe seu peso</p>
            </div>
          </div>
          <Link to="/profile" className="text-brand-600 dark:text-brand-400 text-sm font-bold flex items-center gap-1 hover:underline">
            Atualizar <ChevronRight size={16} />
          </Link>
        </div>
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Peso Atual</p>
            <p className="font-serif text-2xl font-bold text-slate-800 dark:text-white">
              {localStorage.getItem('gm_weight_history') ? JSON.parse(localStorage.getItem('gm_weight_history') || '[]').slice(-1)[0]?.weight || '--' : '--'} <span className="text-sm text-slate-500">kg</span>
            </p>
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Meta</p>
            <p className="font-serif text-2xl font-bold text-slate-800 dark:text-white">
              {localStorage.getItem('gm_goal_weight') || '--'} <span className="text-sm text-slate-500">kg</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
