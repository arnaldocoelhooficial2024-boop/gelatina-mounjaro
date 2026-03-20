import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, CheckCircle, Clock, Droplet, Brain } from 'lucide-react';
import { appData } from '../data/appData';

export function Protocol() {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  return (
    <div className="p-6 space-y-6">
      <header className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Protocolo 30 Dias</h2>
        <p className="text-slate-500">Siga o plano diariamente para resultados máximos.</p>
      </header>

      <div className="space-y-4">
        {appData.protocol.map((day) => (
          <DayCard 
            key={day.day} 
            data={day} 
            isExpanded={expandedDay === day.day}
            onToggle={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
          />
        ))}
      </div>
    </div>
  );
}

function DayCard({ data, isExpanded, onToggle }: { data: any, isExpanded: boolean, onToggle: () => void }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:border-emerald-300 shadow-sm">
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-lg">
            {data.day}
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-lg">{data.title}</h3>
            <p className="text-sm text-slate-500 line-clamp-1">{data.description}</p>
          </div>
        </div>
        <div className="text-slate-400">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
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
            <div className="p-5 pt-0 border-t border-slate-100 bg-slate-50/50 space-y-4">
              <div className="flex gap-3 items-start mt-4">
                <Clock className="text-emerald-500 mt-0.5 shrink-0" size={18} />
                <div>
                  <h4 className="font-semibold text-slate-700 text-sm uppercase tracking-wider">Consumo</h4>
                  <p className="text-slate-600 mt-1">{data.gelatina}</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <Droplet className="text-blue-500 mt-0.5 shrink-0" size={18} />
                <div>
                  <h4 className="font-semibold text-slate-700 text-sm uppercase tracking-wider">Dica de Dieta</h4>
                  <p className="text-slate-600 mt-1">{data.diet_tip}</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Brain className="text-purple-500 mt-0.5 shrink-0" size={18} />
                <div>
                  <h4 className="font-semibold text-slate-700 text-sm uppercase tracking-wider">Comportamento</h4>
                  <p className="text-slate-600 mt-1">{data.behavior_tip}</p>
                </div>
              </div>

              <button className="w-full mt-4 bg-emerald-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors">
                <CheckCircle size={20} />
                Marcar como Concluído
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
