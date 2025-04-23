import React from 'react';
import { Button } from './Button';
import { ArrowRight, Target } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0a0a0a] z-10"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold px-6 py-3 rounded-full mb-8">
            <Target className="h-4 w-4 mr-2" />
            <span>For Coaches, Consultants & Service Providers Looking To Scale To 7 Figures In 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 text-transparent bg-clip-text">
            Write A Short Book, Sell 50-100 Copies Per Day & Scale To 7 Figures
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Install This Counterintuitive New Marketing System That Coaches And Experts Are Using To Scale Their Business
            <span className="block mt-4 text-orange-500">...Without Wasting Thousands On Ads, Posting Content Every Day, Or Sending Cold DMs - Or Your Money Back!</span>
          </p>

          {/* VSL Video */}
          <div className="max-w-4xl mx-auto mb-12">
            <VideoPlayer videoId="JwQNWQNtsj8" />
          </div>

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 mb-12 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold mb-4">Special Launch Price: Only $11.11</div>
            <p className="text-xl text-gray-300 mb-6">Save $85.89 Today - Regular Price $97</p>
            <Button primary className="group text-lg px-8 py-4">
              Get Instant Access Now
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
    </section>
  );
};

export default Hero;