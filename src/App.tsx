import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import CTABanner from './components/CTABanner';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <main>
        <Hero />
        <Story />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Guarantee />
        <CTABanner />
      </main>
    </div>
  );
}

export default App;