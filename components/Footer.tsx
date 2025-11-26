import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-zinc-500 py-12 border-t border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <span className="font-serif font-bold text-zinc-900 text-lg block">KHALID.</span>
          <p className="text-xs mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="text-xs font-medium tracking-wide">
          DESIGNED FOR FOCUS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;