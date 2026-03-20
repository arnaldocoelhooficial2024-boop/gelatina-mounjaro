import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Flame, Droplets, Leaf } from 'lucide-react';
import { appData } from '../data/appData';

export function Recipe() {
  const recipe = appData.recipes[0];
  const [checkedIngredients, setCheckedIngredients] = useState<number[]>([]);

  const toggleIngredient = (index: number) => {
    setCheckedIngredients(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="p-6 space-y-8">
      <header className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">{recipe.name}</h2>
        <p className="text-slate-500">{recipe.description}</p>
      </header>

      <div className="bg-emerald-50 rounded-3xl p-6 border border-emerald-100 flex gap-4 overflow-x-auto snap-x">
        <div className="snap-center shrink-0 flex flex-col items-center justify-center bg-white w-24 h-24 rounded-2xl shadow-sm">
          <Flame className="text-orange-500 mb-2" size={24} />
          <span className="text-xs font-bold text-slate-700 uppercase">Termo</span>
        </div>
        <div className="snap-center shrink-0 flex flex-col items-center justify-center bg-white w-24 h-24 rounded-2xl shadow-sm">
          <Droplets className="text-blue-500 mb-2" size={24} />
          <span className="text-xs font-bold text-slate-700 uppercase">Detox</span>
        </div>
        <div className="snap-center shrink-0 flex flex-col items-center justify-center bg-white w-24 h-24 rounded-2xl shadow-sm">
          <Leaf className="text-emerald-500 mb-2" size={24} />
          <span className="text-xs font-bold text-slate-700 uppercase">Fibras</span>
        </div>
      </div>

      <section>
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">1</span>
          Ingredientes
        </h3>
        <ul className="space-y-3">
          {recipe.ingredients.map((item, idx) => (
            <li 
              key={idx} 
              className={`flex items-center gap-4 p-4 rounded-2xl border transition-all cursor-pointer ${
                checkedIngredients.includes(idx) 
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                  : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-300'
              }`}
              onClick={() => toggleIngredient(idx)}
            >
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                checkedIngredients.includes(idx) ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300'
              }`}>
                {checkedIngredients.includes(idx) && <Check size={14} className="text-white" />}
              </div>
              <span className={checkedIngredients.includes(idx) ? 'line-through opacity-70' : ''}>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">2</span>
          Modo de Preparo
        </h3>
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {recipe.preparation.map((step, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                {idx + 1}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <p className="text-slate-700">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-orange-50 rounded-3xl p-6 border border-orange-100">
        <h3 className="font-bold text-orange-800 mb-2">Dica de Ouro</h3>
        <p className="text-orange-700 text-sm">{recipe.tips[0]}</p>
      </section>
    </div>
  );
}
