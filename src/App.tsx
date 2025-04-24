import React from 'react';
import VSL from './components/VSL';
import Hero from './components/Hero';
import Story from './components/Story';
import Benefits from './components/Benefits';
import Decision from './components/Decision';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full">
      <VSL />
      <Hero />
      <Story />
      <Benefits />
      <Decision />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;