import React, { useState } from 'react';
import { getAIAdvice } from '../services/gemini';
import { Bot, Send, Loader2, Sparkles, Terminal } from 'lucide-react';

const AIMentor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse(null);
    
    const answer = await getAIAdvice(query);
    setResponse(answer);
    setIsLoading(false);
  };

  return (
    <section className="py-24 bg-zinc-900 text-zinc-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-zinc-800 rounded-full mb-6 border border-zinc-700">
            <Terminal className="text-zinc-400 w-5 h-5" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-white mb-4">The AI Archive</h2>
          <p className="text-zinc-400 text-lg max-w-lg mx-auto">
            Access a digital twin of my knowledge base. Ask about research methodology, study habits, or NEET strategy.
          </p>
        </div>

        <div className="bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden shadow-2xl">
          <div className="p-4 bg-zinc-900 border-b border-zinc-800 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-xs font-mono text-zinc-500">mentor_ai.exe</span>
          </div>

          <div className="p-6 md:p-8 min-h-[300px] flex flex-col justify-end">
             {response ? (
              <div className="mb-8 animate-in fade-in slide-in-from-bottom-2">
                <div className="flex items-start gap-4">
                   <div className="bg-zinc-800 p-2 rounded-md shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                   </div>
                   <div className="text-zinc-300 leading-relaxed font-mono text-sm whitespace-pre-wrap">
                    {response}
                   </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-40 text-zinc-700 font-mono text-sm">
                Waiting for input...
              </div>
            )}

            <form onSubmit={handleAsk} className="relative mt-4">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex: How do I manage time for research?"
                className="w-full bg-zinc-900 border border-zinc-700 text-zinc-100 placeholder-zinc-600 rounded-lg py-4 pl-4 pr-14 focus:outline-none focus:border-white focus:ring-0 transition font-mono text-sm"
              />
              <button
                type="submit"
                disabled={isLoading || !query.trim()}
                className="absolute right-2 top-2 bottom-2 bg-white text-black hover:bg-zinc-200 px-4 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMentor;