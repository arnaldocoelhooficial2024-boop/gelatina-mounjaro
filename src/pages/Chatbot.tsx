import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export function Chatbot() {
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Olá! Sou seu assistente virtual do Gelatina Monjaro. Como posso te ajudar hoje com sua dieta ou protocolo?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const chat = ai.chats.create({
        model: 'gemini-3.1-pro-preview',
        config: {
          systemInstruction: 'Você é um assistente virtual especialista no protocolo "Gelatina Monjaro", um método de emagrecimento baseado em uma receita de gelatina funcional (gelatina incolor, vinagre de maçã, psyllium). Seja motivador, educado e dê dicas curtas e práticas sobre dieta, exercícios e mentalidade para emagrecimento.'
        }
      });

      // Replay history
      for (let i = 1; i < messages.length; i++) {
        await chat.sendMessage({ message: messages[i].text });
      }

      const response = await chat.sendMessage({ message: userMessage });
      
      setMessages(prev => [...prev, { role: 'model', text: response.text || 'Desculpe, não consegui processar sua mensagem.' }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Desculpe, ocorreu um erro de conexão. Tente novamente em instantes.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <header className="bg-white shadow-sm px-6 py-4 flex items-center gap-4 z-10 shrink-0">
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
          <Bot className="text-emerald-600" size={24} />
        </div>
        <div>
          <h2 className="font-bold text-slate-900">Assistente Monjaro</h2>
          <p className="text-xs text-emerald-600 font-medium flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            Online
          </p>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-slate-200' : 'bg-emerald-100'}`}>
              {msg.role === 'user' ? <User size={16} className="text-slate-600" /> : <Bot size={16} className="text-emerald-600" />}
            </div>
            <div className={`max-w-[80%] p-4 rounded-2xl ${
              msg.role === 'user' 
                ? 'bg-emerald-600 text-white rounded-tr-sm' 
                : 'bg-white border border-slate-200 text-slate-700 rounded-tl-sm shadow-sm'
            }`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
            </div>
          </motion.div>
        ))}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
              <Bot size={16} className="text-emerald-600" />
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-2">
              <Loader2 size={16} className="text-emerald-600 animate-spin" />
              <span className="text-sm text-slate-500">Digitando...</span>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white border-t border-slate-200 shrink-0">
        <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-full border border-slate-200 focus-within:border-emerald-500 focus-within:bg-white transition-colors shadow-inner">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Pergunte sobre a dieta..."
            className="flex-1 bg-transparent border-none focus:ring-0 px-4 text-sm text-slate-700 placeholder-slate-400"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} className="ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
