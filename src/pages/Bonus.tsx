import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Apple, Heart, ChevronRight, X, Activity, ChevronDown } from 'lucide-react';
import { appData } from '../data/appData';

export function Bonus() {
  const [activeTab, setActiveTab] = useState<'diet' | 'sweet' | 'pilates'>('diet');
  const [selectedSweet, setSelectedSweet] = useState<any | null>(null);

  return (
    <div>
      {/* Premium Header */}
      <div className="bg-slate-900 dark:bg-slate-950 text-white pt-12 pb-8 px-6 rounded-b-[3rem] shadow-xl relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 dark:bg-brand-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative z-10 max-w-md mx-auto">
          <h2 className="text-4xl font-serif font-bold tracking-tight mb-2">Bônus</h2>
          <p className="text-brand-200 dark:text-brand-400 text-sm">Acelere seus resultados com materiais exclusivos.</p>
          
          <div className="pt-8 pb-2">
            <div className="relative">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value as 'diet' | 'sweet' | 'pilates')}
                className="w-full appearance-none bg-white/10 dark:bg-slate-800/50 border border-white/20 dark:border-slate-700/50 text-white rounded-2xl px-5 py-4 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 backdrop-blur-md shadow-lg"
              >
                <option value="diet" className="text-slate-900 dark:text-white bg-white dark:bg-slate-800">Dietas do Cefit</option>
                <option value="sweet" className="text-slate-900 dark:text-white bg-white dark:bg-slate-800">Doces Fit</option>
                <option value="pilates" className="text-slate-900 dark:text-white bg-white dark:bg-slate-800">Pilates na Parede</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-white/70">
                <ChevronDown size={20} strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8 max-w-md mx-auto mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
          {activeTab === 'diet' && (
            <div className="space-y-6">
              {appData.bonus.diet_plans.map((plan) => (
                <div key={plan.id} className="bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-700 p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center shrink-0">
                      <Apple className="text-brand-600 dark:text-brand-400" size={28} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white leading-tight">{plan.name}</h3>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-brand-500 dark:text-brand-400 mt-1.5">{plan.level}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{plan.description}</p>
                  <div className="space-y-1 bg-slate-50 dark:bg-slate-700/50 p-2 rounded-3xl border border-slate-100/50 dark:border-slate-700/50">
                    <MealRow label="Café" desc={plan.meals.breakfast} />
                    <MealRow label="Almoço" desc={plan.meals.lunch} />
                    <MealRow label="Lanche" desc={plan.meals.snack} />
                    <MealRow label="Jantar" desc={plan.meals.dinner} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'sweet' && (
            <div className="space-y-4">
              {appData.bonus.sweet_recipes.map((recipe) => (
                <button 
                  key={recipe.id}
                  onClick={() => setSelectedSweet(recipe)}
                  className="w-full text-left bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-700 p-6 shadow-sm flex items-center justify-between group hover:border-pink-200 dark:hover:border-pink-800 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-pink-50 dark:bg-pink-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-pink-100 dark:group-hover:bg-pink-500/20 transition-all duration-300">
                      <Heart className="text-pink-500 dark:text-pink-400" size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white font-serif text-lg">{recipe.name}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed line-clamp-1">{recipe.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="text-slate-300 dark:text-slate-600 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors shrink-0" />
                </button>
              ))}
            </div>
          )}

          {activeTab === 'pilates' && (
            <div className="space-y-4">
              {appData.bonus.pilates.map((exercise, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-5 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center font-bold text-indigo-600 dark:text-indigo-400 text-xl font-serif shrink-0">
                      {exercise.day}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white font-serif text-lg leading-tight">{exercise.name}</h4>
                      <p className="text-[9px] text-indigo-500 dark:text-indigo-400 font-bold uppercase tracking-widest mt-1.5">{exercise.description}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-700/50 p-5 rounded-2xl border border-slate-100/50 dark:border-slate-700/50 leading-relaxed">
                    {exercise.instruction}
                  </p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      </div>

      {/* Modal for Sweet Recipes */}
      {createPortal(
        <AnimatePresence>
          {selectedSweet && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 sm:p-6"
              onClick={() => setSelectedSweet(null)}
            >
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="bg-white dark:bg-slate-800 w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-gradient-to-r from-pink-50 dark:from-pink-900/20 to-white dark:to-slate-800">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-pink-100 dark:bg-pink-500/20 flex items-center justify-center">
                      <Heart className="text-pink-500 dark:text-pink-400" size={24} />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white leading-tight">{selectedSweet.name}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedSweet(null)}
                    className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-300 hover:text-slate-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors shadow-sm border border-slate-100 dark:border-slate-600"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-6 overflow-y-auto space-y-8">
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{selectedSweet.description}</p>
                  
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center text-[10px]">1</span>
                      Ingredientes
                    </h4>
                    <ul className="space-y-3">
                      {selectedSweet.ingredients.map((ing: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-2xl border border-slate-100/50 dark:border-slate-700/50">
                          <div className="w-2 h-2 rounded-full bg-pink-400 dark:bg-pink-500 mt-1.5 shrink-0"></div>
                          <span className="leading-relaxed">{ing}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center text-[10px]">2</span>
                      Modo de Preparo
                    </h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-pink-50/50 dark:bg-pink-500/10 p-5 rounded-2xl border border-pink-100/50 dark:border-pink-500/20">
                      {selectedSweet.preparation}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

function MealRow({ label, desc }: { label: string, desc: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 items-start p-4 border-b border-slate-100 dark:border-slate-700/50 last:border-0 hover:bg-white dark:hover:bg-slate-700 transition-colors rounded-2xl">
      <span className="text-[9px] font-bold uppercase tracking-widest text-brand-500 dark:text-brand-400 w-16 shrink-0 sm:mt-0.5">{label}</span>
      <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{desc}</span>
    </div>
  );
}
