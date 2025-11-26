import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">Career</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 mt-2">Professional Timeline</h2>
          </div>
          <p className="text-zinc-500 mt-4 md:mt-0 max-w-sm text-sm">
            A chronological view of my contributions to medicine, research, and education.
          </p>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="group flex flex-col md:flex-row gap-6 md:gap-12 border-l-2 border-zinc-100 pl-8 md:pl-0 md:border-none relative">
              {/* Mobile Timeline Line visual fix handled by container border */}
              
              <div className="md:w-1/4 md:text-right pt-1">
                <span className="inline-block px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-wide rounded-md">
                  {exp.period}
                </span>
              </div>
              
              <div className="md:w-3/4 relative">
                {/* Desktop Dot */}
                <div className="hidden md:block absolute -left-[3.25rem] top-2 w-3 h-3 bg-zinc-300 rounded-full group-hover:bg-black transition-colors ring-4 ring-white"></div>
                
                <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-1">{exp.role}</h3>
                <div className="text-zinc-500 font-medium mb-4">{exp.organization}</div>
                <p className="text-zinc-600 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;