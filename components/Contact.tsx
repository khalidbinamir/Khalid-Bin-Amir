import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Instagram, Mail, Phone, ArrowRight } from 'lucide-react';

interface ContactProps {
  initialSubject: string;
}

const Contact: React.FC<ContactProps> = ({ initialSubject }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (initialSubject) {
      setSubject(initialSubject);
    }
  }, [initialSubject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

    const mailtoLink = `mailto:${SOCIAL_LINKS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 mb-4">Start The Conversation</h2>
          <p className="text-zinc-600">Serious inquiries only.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4 font-serif">Reach Out</h3>
              <p className="text-zinc-600 leading-relaxed">
                Whether you need mentorship to crack NEET, want to collaborate on research, or just have a burning question about medical school.
              </p>
            </div>
            
            <div className="space-y-0 divide-y divide-zinc-200 border-t border-b border-zinc-200">
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center py-6 group">
                <Mail className="h-5 w-5 text-zinc-400 group-hover:text-black transition" />
                <span className="ml-4 text-zinc-900 font-medium group-hover:ml-6 transition-all">{SOCIAL_LINKS.email}</span>
              </a>

              <a href={`tel:${SOCIAL_LINKS.phone}`} className="flex items-center py-6 group">
                <Phone className="h-5 w-5 text-zinc-400 group-hover:text-black transition" />
                <span className="ml-4 text-zinc-900 font-medium group-hover:ml-6 transition-all">{SOCIAL_LINKS.phone}</span>
              </a>

              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="flex items-center py-6 group">
                <Instagram className="h-5 w-5 text-zinc-400 group-hover:text-black transition" />
                <span className="ml-4 text-zinc-900 font-medium group-hover:ml-6 transition-all">@khalidbinamir</span>
              </a>
            </div>
          </div>

          {/* Simple Form */}
          <form className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-zinc-200" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-zinc-200 focus:border-black outline-none transition text-zinc-900 font-medium placeholder-zinc-300" 
                  placeholder="Enter your name" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-zinc-200 focus:border-black outline-none transition text-zinc-900 font-medium placeholder-zinc-300" 
                  placeholder="Enter your email" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-zinc-200 focus:border-black outline-none transition text-zinc-900 font-medium placeholder-zinc-300" 
                  placeholder="What is this about?" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-3 bg-zinc-50 border-2 border-transparent focus:border-zinc-200 rounded-md outline-none transition text-zinc-900 resize-none" 
                  placeholder="Tell me more..." 
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-black text-white font-bold py-4 rounded-md hover:bg-zinc-800 transition uppercase tracking-widest text-sm flex items-center justify-center">
                Send Message <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;