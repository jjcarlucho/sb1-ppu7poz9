import React from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Benefits from './components/Benefits';
import Decision from './components/Decision';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA.tsx';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full">
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