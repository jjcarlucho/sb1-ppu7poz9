import React from 'react';
import VSL from './components/VSL';
import Hero from './components/Hero';
import ProductImages from './components/ProductImages';
import Story from './components/Story';
import Benefits from './components/Benefits';
import Decision from './components/Decision';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <div className="w-full bg-[#2c3330]">
      <VSL />
      <Hero />
      <ProductImages />
      <Story />
      <Benefits />
      <Decision />
      <Pricing />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;