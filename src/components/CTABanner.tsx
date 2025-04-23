import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

const CTABanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready To Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who have already changed their lives with The Game Changer methodology.
          </p>
          
          <Button primary className="group text-lg">
            Get Your Copy Now
            <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
          </Button>
          
          <div className="mt-8 text-sm text-blue-200">
            *Limited-time offer. 14-day money-back guarantee.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;