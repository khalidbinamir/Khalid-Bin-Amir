import React from 'react';
import { MENTORSHIP_SERVICES } from '../constants';
import { Check } from 'lucide-react';

interface MentorshipProps {
  onPlanSelect: (subject: string) => void;
}

const Mentorship: React.FC<MentorshipProps> = ({ onPlanSelect }) => {
  const handleBooking = (title: string) => {
    onPlanSelect(`Inquiry: ${title}`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="mentorship" className="py-24 bg-white border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">Guidance</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 mt-2 mb-6">Invest in Your Medical Journey</h2>
          <p className="text-zinc-600 text-lg font-light">
            Strategic advice for those who want to stop guessing and start achieving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MENTORSHIP_SERVICES.map((service) => (
            <div 
              key={service.id} 
              className={`relative p-8 flex flex-col ${
                service.recommended 
                  ? 'bg-zinc-900 text-white rounded-xl shadow-2xl ring-1 ring-zinc-900' 
                  : 'bg-white text-zinc-900 rounded-lg border border-zinc-200 hover:border-zinc-400'
              } transition-all duration-300`}
            >
              <div className="mb-6">
                <h3 className={`text-xl font-bold font-serif mb-2 ${service.recommended ? 'text-white' : 'text-zinc-900'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed ${service.recommended ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {service.description}
                </p>
              </div>
              
              <div className="mb-8 pt-4 border-t border-dashed border-current opacity-20"></div>

              <ul className="space-y-4 mb-8 flex-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <Check className={`h-4 w-4 mr-3 mt-0.5 flex-shrink-0 ${service.recommended ? 'text-zinc-400' : 'text-zinc-900'}`} />
                    <span className={service.recommended ? 'text-zinc-300' : 'text-zinc-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                 <p className={`text-2xl font-bold mb-6 ${service.recommended ? 'text-white' : 'text-zinc-900'}`}>{service.price}</p>
                <button
                  onClick={() => handleBooking(service.title)}
                  className={`w-full py-4 text-sm font-bold uppercase tracking-wider rounded-md transition ${
                    service.recommended 
                      ? 'bg-white text-black hover:bg-zinc-200' 
                      : 'bg-black text-white hover:bg-zinc-800'
                  }`}
                >
                  Book a Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentorship;