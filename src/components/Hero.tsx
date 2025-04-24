import React from 'react';
import { CheckCircle, Clock, Gift, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const bonuses = [
    {
      title: "Your Wish Is Your Command Audios",
      value: "$500",
      description: "Legendary mindset and manifestation audios.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "TFT Course",
      value: "$300",
      description: "Release subconscious blocks and emotions.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            How to make more money from every page you write without losing your passion or resorting to jobs you hate just to pay the bills.
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            It's a strategy I developed that helps you captivate even the most skeptical readers...
          </p>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            ...and guide them to whatever offer you have.
          </p>
          
          {/* Key Message */}
          <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-8 mb-12 max-w-3xl mx-auto border border-yellow-500/30">
            <p className="text-xl md:text-2xl mb-4 font-semibold text-yellow-400">
              And the best part?
            </p>
            <p className="text-xl md:text-2xl mb-4 text-white">
              You only need one BOOK to transform your knowledge into a steady income...just one.
            </p>
            <p className="text-lg text-gray-300">
              I'll explain how it works in a moment...so keep reading...
            </p>
          </div>

          {/* CTA Button */}
          <a 
            href="#offer" 
            className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 px-8 rounded-full text-xl hover:from-yellow-400 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
          >
            Start Your Journey Now <ArrowRight className="ml-2" size={24} />
          </a>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700">
              <CheckCircle className="text-green-400 mr-2" size={20} />
              <span>Instant Download</span>
            </div>
            <div className="flex items-center bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700">
              <Clock className="text-blue-400 mr-2" size={20} />
              <span>7-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700">
              <Gift className="text-purple-400 mr-2" size={20} />
              <span>Special Bonuses Included</span>
            </div>
          </div>

          {/* Bonuses Preview */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8 text-yellow-400">Today's Special Bonuses</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {bonuses.map((bonus, index) => (
                <div key={index} className="bg-black/40 backdrop-blur-sm rounded-xl p-6 hover:bg-black/60 transition-all duration-300 border border-gray-700">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img src={bonus.image} alt={bonus.title} className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{bonus.title}</h4>
                  <p className="text-yellow-400 font-bold mb-2">Value: {bonus.value}</p>
                  <p className="text-gray-300">{bonus.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;