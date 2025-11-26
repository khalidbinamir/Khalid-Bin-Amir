import React from 'react';
import { ArrowRight, Instagram, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-white pt-24 pb-32 overflow-hidden border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        <div className="mb-10 relative">
          <div className="absolute inset-0 bg-black/5 rounded-full blur-2xl transform translate-x-2 translate-y-2"></div>
          <img 
            src="https://picsum.photos/600/600?grayscale" 
            alt="Khalid Bin Amir" 
            className="relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-full grayscale border border-zinc-200 shadow-sm"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-bold text-zinc-900 leading-[1.1] mb-8 tracking-tight">
          Master Medicine.<br />
          <span className="text-zinc-500 italic">Maximize Potential.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-600 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
          I help NEET aspirants and medical students bridge the gap between hard work and high performance through strategic mentorship and research.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="#mentorship" 
            className="px-8 py-4 bg-black text-white rounded-md hover:bg-zinc-800 transition shadow-lg flex items-center font-medium tracking-wide text-sm uppercase"
          >
            Start Mentorship <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <div className="flex space-x-4">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black transition">
              <Instagram className="h-6 w-6" />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black transition">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-zinc-400 hover:text-black transition">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;