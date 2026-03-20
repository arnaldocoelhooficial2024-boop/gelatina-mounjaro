import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, ChevronRight, Apple, Heart, Activity } from 'lucide-react';
import { appData } from '../data/appData';

export function Bonus() {
  const [activeTab, setActiveTab] = useState<'diet' | 'sweet' | 'pilates'>('diet');

  return (
    <div className="p-6 space-y-8">
      <header className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Bônus Exclusivos</h2>
        <p className="text-slate-500">Acelere seus resultados com estes materiais complementares.</p>
      </header>

      <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 snap-x">
        <button 
          onClick={() => setActiveTab('diet')}
          className={`snap-center shrink-0 px-6 py-3 rounded-full font-semibold transition-colors ${activeTab === 'diet' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          Dietas
        </button>
        <button 
          onClick={() => setActiveTab('sweet')}
          className={`snap-center shrink-0 px-6 py-3 rounded-full font-semibold transition-colors ${activeTab === 'sweet' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          Doces Fit
        </button>
        <button 
          onClick={() => setActiveTab('pilates')}
          className={`snap-center shrink-0 px-6 py-3 rounded-full font-semibold transition-colors ${activeTab === 'pilates' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          Pilates Parede
        </button>
      </div>

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
              {appData.bonus.diet_plans.map((plan, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Apple className="text-emerald-600" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">Plano {plan.level}</h3>
                  </div>
                  <div className="space-y-3">
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
              {appData.bonus.sweet_recipes.map((recipe, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex items-center justify-between group hover:border-pink-300 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center">
                      <Heart className="text-pink-500" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{recipe.name}</h4>
                      <p className="text-sm text-slate-500">{recipe.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="text-slate-300 group-hover:text-pink-500 transition-colors" />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'pilates' && (
            <div className="space-y-4">
              {appData.bonus.pilates.map((exercise, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center font-bold text-indigo-600">
                      {exercise.day}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{exercise.name}</h4>
                      <p className="text-xs text-indigo-500 font-medium uppercase tracking-wider">{exercise.description}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    {exercise.instruction}
                  </p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function MealRow({ label, desc }: { label: string, desc: string }) {
  return (
    <div className="flex gap-4 items-start py-2 border-b border-slate-100 last:border-0">
      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 w-16 shrink-0 mt-0.5">{label}</span>
      <span className="text-sm text-slate-700">{desc}</span>
    </div>
  );
}
