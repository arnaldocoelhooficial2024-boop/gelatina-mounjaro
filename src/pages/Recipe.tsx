import { useState } from 'react';
import { Check, Flame, Droplets, Leaf, Moon, Zap, Clock, UtensilsCrossed } from 'lucide-react';
import { appData } from '../data/appData';
import { motion, AnimatePresence } from 'motion/react';

export function Recipe() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(appData.recipes[0].id);
  const [checkedIngredients, setCheckedIngredients] = useState<number[]>([]);

  const recipe = appData.recipes.find(r => r.id === selectedRecipeId) || appData.recipes[0];

  const toggleIngredient = (index: number) => {
    setCheckedIngredients(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleRecipeChange = (id: string) => {
    setSelectedRecipeId(id);
    setCheckedIngredients([]);
  };

  const getTagIcon = (tag: string) => {
    if (tag.includes('Termo')) return <Flame className="text-orange-500 mb-2" size={24} strokeWidth={2} />;
    if (tag.includes('Detox')) return <Droplets className="text-blue-500 mb-2" size={24} strokeWidth={2} />;
    if (tag.includes('Fibras')) return <Leaf className="text-emerald-500 mb-2" size={24} strokeWidth={2} />;
    if (tag.includes('Sono') || tag.includes('Relaxante')) return <Moon className="text-indigo-500 mb-2" size={24} strokeWidth={2} />;
    return <Zap className="text-amber-500 mb-2" size={24} strokeWidth={2} />;
  };

  return (
    <div>
      {/* Premium Header */}
      <div className="bg-slate-900 dark:bg-slate-950 text-white pt-12 pb-8 px-6 rounded-b-[3rem] shadow-xl relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 dark:bg-brand-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative z-10 max-w-md mx-auto">
          <h2 className="text-4xl font-serif font-bold tracking-tight mb-2">Receitas</h2>
          <p className="text-brand-200 dark:text-brand-400 text-sm">Variações exclusivas para o seu protocolo.</p>
          
          <div className="pt-8 pb-2">
            <div className="relative">
              <select
                value={selectedRecipeId}
                onChange={(e) => handleRecipeChange(e.target.value)}
                className="w-full appearance-none bg-white/10 dark:bg-slate-800/50 border border-white/20 dark:border-slate-700/50 text-white rounded-2xl px-5 py-4 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 backdrop-blur-md shadow-lg"
              >
                {appData.recipes.map((r) => (
                  <option key={r.id} value={r.id} className="text-slate-900 dark:text-white bg-white dark:bg-slate-800">
                    {r.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-white/70">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8 max-w-md mx-auto mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={recipe.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-4 text-center">
              <h3 className="text-3xl font-serif font-bold text-slate-900 dark:text-white leading-tight">{recipe.name}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed px-4">{recipe.description}</p>
              
              <div className="flex items-center justify-center gap-6 pt-2">
                <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest">
                  <Clock size={14} className="text-brand-500 dark:text-brand-400" /> 5 Min
                </div>
                <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest">
                  <UtensilsCrossed size={14} className="text-brand-500 dark:text-brand-400" /> 1 Porção
                </div>
              </div>
            </div>

            <div className="flex gap-4 overflow-x-auto snap-x hide-scrollbar pb-2">
              {recipe.tags.map((tag, idx) => (
                <div key={idx} className="snap-center shrink-0 flex flex-col items-center justify-center bg-white dark:bg-slate-800 w-24 h-24 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  {getTagIcon(tag)}
                  <span className="text-[9px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest text-center px-2">{tag}</span>
                </div>
              ))}
            </div>

            <section className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-700 shadow-sm transition-colors duration-300">
              <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center text-sm font-sans">1</span>
                Ingredientes
              </h3>
              <ul className="space-y-3">
                {recipe.ingredients.map((item, idx) => (
                  <li 
                    key={idx} 
                    className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-pointer shadow-sm ${
                      checkedIngredients.includes(idx) 
                        ? 'bg-brand-50 dark:bg-brand-900/20 border-brand-200 dark:border-brand-800 text-brand-800 dark:text-brand-300' 
                        : 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-brand-200 dark:hover:border-brand-700 hover:bg-white dark:hover:bg-slate-800'
                    }`}
                    onClick={() => toggleIngredient(idx)}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                      checkedIngredients.includes(idx) ? 'bg-brand-500 dark:bg-brand-600 border-brand-500 dark:border-brand-600' : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800'
                    }`}>
                      {checkedIngredients.includes(idx) && <Check size={14} className="text-white" strokeWidth={3} />}
                    </div>
                    <span className={`text-sm leading-relaxed transition-all ${checkedIngredients.includes(idx) ? 'line-through opacity-60' : ''}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-700 shadow-sm transition-colors duration-300">
              <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center text-sm font-sans">2</span>
                Modo de Preparo
              </h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[1.125rem] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-200 dark:before:from-brand-800 before:via-brand-100 dark:before:via-brand-900/50 before:to-transparent">
                {recipe.preparation.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-6 group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-400 shadow-sm shrink-0 z-10 font-bold text-sm group-hover:bg-brand-500 dark:group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <div className="pt-2 pb-6">
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-[2rem] p-8 border border-orange-100/50 dark:border-orange-900/30 shadow-sm relative overflow-hidden transition-colors duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/30 dark:bg-orange-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="relative z-10">
                <h3 className="font-bold text-orange-800 dark:text-orange-500 mb-3 uppercase tracking-widest text-[10px] flex items-center gap-2">
                  <Flame size={14} /> Dica de Ouro
                </h3>
                <p className="text-orange-900/80 dark:text-orange-200/80 text-sm leading-relaxed font-medium">{recipe.tips[0]}</p>
              </div>
            </section>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
