import React, { useState } from 'react';
import { MOCK_ARTICLES, SOCIAL_LINKS } from '../constants';
import { ExternalLink } from 'lucide-react';

const ContentHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'Quora' | 'Medium'>('all');

  const filteredArticles = activeTab === 'all' 
    ? MOCK_ARTICLES 
    : MOCK_ARTICLES.filter(art => art.platform === activeTab);

  return (
    <section id="content" className="py-24 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
           <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">Writing</span>
           <div className="flex flex-col md:flex-row justify-between items-end mt-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900">Articles & Essays</h2>
            <div className="flex space-x-1 mt-6 md:mt-0 bg-white p-1 rounded-lg border border-zinc-200">
              {['all', 'Quora', 'Medium'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === tab 
                      ? 'bg-black text-white shadow-sm' 
                      : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
           </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredArticles.map((article) => (
            <a 
              key={article.id} 
              href={article.link} 
              target="_blank" 
              rel="noreferrer"
              className="group block bg-white p-8 rounded-lg border border-zinc-200 hover:border-zinc-900 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      {article.platform}
                    </span>
                    <span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
                    <span className="text-xs text-zinc-400">{article.date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-zinc-900 mb-3 group-hover:underline decoration-1 underline-offset-4">
                    {article.title}
                  </h3>
                  <p className="text-zinc-600 max-w-3xl leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                <div className="flex-shrink-0 self-start md:self-center mt-4 md:mt-0">
                   <ExternalLink className="w-5 h-5 text-zinc-300 group-hover:text-black transition-colors" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-6">
           <a href={SOCIAL_LINKS.quora} className="text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-black transition border-b border-transparent hover:border-black pb-1">Read on Quora</a>
           <a href={SOCIAL_LINKS.medium} className="text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-black transition border-b border-transparent hover:border-black pb-1">Read on Medium</a>
        </div>
      </div>
    </section>
  );
};

export default ContentHub;