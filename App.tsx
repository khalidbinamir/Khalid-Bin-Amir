import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import ContentHub from './components/ContentHub';
import Mentorship from './components/Mentorship';
import AIMentor from './components/AIMentor';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [contactSubject, setContactSubject] = useState('');

  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Mentorship onPlanSelect={setContactSubject} />
      <AIMentor />
      <ContentHub />
      <Contact initialSubject={contactSubject} />
      <Footer />
    </div>
  );
};

export default App;