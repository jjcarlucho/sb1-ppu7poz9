import React from 'react';
import { Star, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-neutral-900 to-neutral-800 py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Pre-headline */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <p className="text-amber-400 font-semibold uppercase tracking-wider">
              The #1 Knowledge-to-Income System
            </p>
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Turn Your Knowledge Into
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              $5,000+ Monthly Income
            </span>
            With Just ONE Book
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The proven step-by-step system that's helped 1,847+ authors monetize their expertise—without being a marketing expert or spending thousands on advertising
          </p>

          {/* Value Stack */}
          <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            <div className="bg-neutral-800/50 p-4 rounded-lg backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">No Writing Experience Needed</p>
            </div>
            <div className="bg-neutral-800/50 p-4 rounded-lg backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Works For Any Industry</p>
            </div>
            <div className="bg-neutral-800/50 p-4 rounded-lg backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Results In 30 Days Or Less</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-12">
            <a 
              href="#offer" 
              className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-400 text-white font-bold py-5 px-10 rounded-full text-xl hover:from-amber-400 hover:to-amber-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/25 group"
            >
              YES! I Want The GameChanger System
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
            </a>
            <p className="text-sm text-gray-400 mt-4">
              <Shield className="w-4 h-4 inline-block mr-1" />
              30-Day Money-Back Guarantee • Instant Access • Lifetime Updates
            </p>
          </div>

          {/* Social Proof */}
          <div className="border-t border-neutral-700 pt-12">
            <p className="text-sm text-gray-400 mb-4">TRUSTED BY ENTREPRENEURS IN 47+ COUNTRIES</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Company logos placeholder */}
              <div className="w-32 h-12 bg-gray-300/10 rounded"></div>
              <div className="w-28 h-12 bg-gray-300/10 rounded"></div>
              <div className="w-36 h-12 bg-gray-300/10 rounded"></div>
              <div className="w-32 h-12 bg-gray-300/10 rounded"></div>
              <div className="w-30 h-12 bg-gray-300/10 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Hero;