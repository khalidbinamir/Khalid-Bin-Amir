import React from 'react';
import { Award, Book, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">Overview</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 mt-2">The Intersection of Research <br/>and Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-lg border border-zinc-200 hover:border-black transition-colors duration-300">
            <Award className="h-8 w-8 text-zinc-900 mb-6 stroke-[1.5]" />
            <h3 className="text-xl font-bold text-zinc-900 mb-3 font-serif">Researcher</h3>
            <p className="text-zinc-600 leading-relaxed text-sm">
              Associated with <strong>IJMS</strong>. Prioritizing evidence-based medicine and critical scientific inquiry in a world of information overload.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-zinc-200 hover:border-black transition-colors duration-300">
            <Users className="h-8 w-8 text-zinc-900 mb-6 stroke-[1.5]" />
            <h3 className="text-xl font-bold text-zinc-900 mb-3 font-serif">Mentor</h3>
            <p className="text-zinc-600 leading-relaxed text-sm">
              Guided 500+ NEET aspirants. Focusing on mental models, NCERT mastery, and the psychology of high-stakes exams.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-zinc-200 hover:border-black transition-colors duration-300">
            <Book className="h-8 w-8 text-zinc-900 mb-6 stroke-[1.5]" />
            <h3 className="text-xl font-bold text-zinc-900 mb-3 font-serif">Creator</h3>
            <p className="text-zinc-600 leading-relaxed text-sm">
              Founder of <strong>The Fun MEDIC</strong>. Decoding complex medical concepts into clear, engaging, and memorable narratives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;