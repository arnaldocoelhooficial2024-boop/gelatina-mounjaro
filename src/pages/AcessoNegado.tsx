import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';

export function AcessoNegado() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 p-6 text-center">
      <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6">
        <ShieldAlert className="text-red-600 dark:text-red-500" size={40} />
      </div>
      <h1 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
        Acesso Pendente
      </h1>
      <p className="text-slate-600 dark:text-slate-400 max-w-md mb-8 leading-relaxed">
        Seu pagamento ainda está sendo processado ou não foi aprovado. 
        Assim que a Cacto confirmar o pagamento, seu acesso será liberado automaticamente.
      </p>
      <Link 
        to="/login" 
        className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-8 rounded-xl transition-colors"
      >
        Voltar para o Login
      </Link>
    </div>
  );
}
