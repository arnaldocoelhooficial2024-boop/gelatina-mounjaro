import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, CheckCircle, Clock, Droplet, Brain, Sparkles, Info, Check } from 'lucide-react';
import { appData } from '../data/appData';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function Protocol() {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    const saved = localStorage.getItem('completedDays');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleDayCompletion = (day: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompletedDays(prev => {
      const newCompleted = prev.includes(day) 
        ? prev.filter(d => d !== day)
        : [...prev, day];
      localStorage.setItem('completedDays', JSON.stringify(newCompleted));
      return newCompleted;
    });
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="p-6 space-y-8 max-w-md mx-auto pb-24"
    >
      <motion.header variants={itemVariants} className="space-y-2 mt-2">
        <h2 className="text-4xl font-serif font-bold tracking-tight text-slate-900 dark:text-white">Protocolo</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Seu mapa diário para o emagrecimento.</p>
      </motion.header>

      {/* Protocol Explanation Card */}
      <motion.section 
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
        className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-[2.5rem] p-8 shadow-xl shadow-brand-900/20 relative overflow-hidden text-white"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              whileHover={{ rotate: 15 }}
              className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20 shadow-inner"
            >
              <Sparkles className="text-brand-200" size={24} />
            </motion.div>
            <h3 className="font-bold font-serif text-2xl leading-tight">{appData.protocol_explanation.title}</h3>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20">
              <h4 className="text-brand-200 text-xs font-bold uppercase tracking-widest mb-3">Como Consumir</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <p className="text-sm font-medium leading-relaxed">
                    Prepare a <strong className="text-white">Gelatina Mounjaro</strong> usando uma das receitas disponíveis.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <p className="text-sm font-medium leading-relaxed">
                    Coma <strong className="text-white">1 taça 30 minutos antes do almoço</strong>.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <p className="text-sm font-medium leading-relaxed">
                    Coma <strong className="text-white">1 taça 30 minutos antes do jantar</strong>.
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-white/10 shadow-inner">
              <div className="flex items-center gap-2 mb-2">
                <Info size={16} className="text-brand-300" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-300">Por que funciona?</span>
              </div>
              <p className="text-sm text-white/90 leading-relaxed">
                {appData.protocol_explanation.mechanism}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.div variants={containerVariants} className="space-y-4">
        <motion.h3 variants={itemVariants} className="font-serif font-bold text-xl text-slate-800 dark:text-slate-200 px-2 mt-8 mb-4">Sua Jornada de 30 Dias</motion.h3>
        {appData.protocol.map((day) => (
          <motion.div variants={itemVariants} key={day.day}>
            <DayCard 
              data={day} 
              isExpanded={expandedDay === day.day}
              isCompleted={completedDays.includes(day.day)}
              onToggle={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
              onToggleCompletion={(e) => toggleDayCompletion(day.day, e)}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

const DayCard: React.FC<{ 
  data: any, 
  isExpanded: boolean, 
  isCompleted: boolean,
  onToggle: () => void,
  onToggleCompletion: (e: React.MouseEvent) => void
}> = ({ data, isExpanded, isCompleted, onToggle, onToggleCompletion }) => {
  return (
    <motion.div 
      layout
      className={`bg-white dark:bg-slate-800 rounded-[2rem] border transition-colors duration-300 overflow-hidden ${isExpanded ? 'border-brand-300 dark:border-brand-600 shadow-lg shadow-brand-500/10 dark:shadow-brand-900/20' : isCompleted ? 'border-emerald-200 dark:border-emerald-800/50 shadow-sm' : 'border-slate-100 dark:border-slate-700 shadow-sm hover:border-brand-200 dark:hover:border-brand-700'}`}
    >
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <div className="flex items-center gap-5">
          <motion.div 
            layout
            className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl font-serif transition-colors relative ${isCompleted ? 'bg-emerald-500 text-white shadow-inner' : isExpanded ? 'bg-brand-600 dark:bg-brand-500 text-white shadow-inner' : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-600'}`}
          >
            <AnimatePresence mode="wait">
              {isCompleted ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                >
                  <Check size={28} strokeWidth={3} />
                </motion.div>
              ) : (
                <motion.span
                  key="number"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  {data.day}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
          <div>
            <h3 className={`font-bold text-lg font-serif transition-colors ${isCompleted ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-900 dark:text-white'}`}>{data.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1 mt-1 font-medium">{data.description}</p>
          </div>
        </div>
        <motion.div 
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 shrink-0 ${isExpanded ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400' : 'bg-slate-50 dark:bg-slate-700 text-slate-400 dark:text-slate-500'}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 space-y-6">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent mb-6"></div>
              
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex gap-4 items-start bg-slate-50 dark:bg-slate-700/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700"
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shrink-0 shadow-sm border border-slate-100 dark:border-slate-700">
                  <Clock className="text-brand-600 dark:text-brand-400" size={20} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-[10px] uppercase tracking-widest mb-1.5">Consumo da Gelatina</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium">{data.gelatina}</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-500/20">
                  <Droplet className="text-blue-500 dark:text-blue-400" size={20} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-[10px] uppercase tracking-widest mb-1.5">Dica de Dieta</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{data.diet_tip}</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-100 dark:border-purple-500/20">
                  <Brain className="text-purple-500 dark:text-purple-400" size={20} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-[10px] uppercase tracking-widest mb-1.5">Comportamento</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{data.behavior_tip}</p>
                </div>
              </motion.div>

              <motion.button 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onToggleCompletion}
                className={`w-full mt-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${isCompleted ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 shadow-emerald-500/10 hover:bg-emerald-200 dark:hover:bg-emerald-900/50' : 'bg-slate-900 dark:bg-brand-600 text-white hover:bg-brand-600 dark:hover:bg-brand-500 shadow-slate-900/20 dark:shadow-brand-900/20'}`}
              >
                <CheckCircle size={20} strokeWidth={2} className={isCompleted ? "text-emerald-600 dark:text-emerald-400" : ""} />
                {isCompleted ? 'Concluído' : 'Marcar como Concluído'}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
