import React from 'react';
import { Button } from './Button';
import { CheckCircle, Clock, Gift } from 'lucide-react';

const bonuses = [
  {
    title: 'AI Tools Checklist',
    value: '$50',
    description: 'A comprehensive guide to the best AI tools for content creation and marketing.',
    image: 'https://images.pexels.com/photos/4238488/pexels-photo-4238488.jpeg'
  },
  {
    title: 'Your Wish Is Your Command Audios',
    value: '$500',
    description: 'Legendary mindset and manifestation audios for business success.',
    image: 'https://images.pexels.com/photos/4064840/pexels-photo-4064840.jpeg'
  },
  {
    title: 'TFT Course',
    value: '$300',
    description: 'Release subconscious blocks and emotions that sabotage your progress.',
    image: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg'
  }
];

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-red-500/10 text-red-500 px-4 py-2 rounded-full mb-6">
            <Clock className="h-4 w-4 mr-2 animate-pulse" />
            <span className="text-sm font-semibold">Special Offer Ends Soon</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Special Limited-Time Offer</h2>
          <p className="text-lg text-gray-300">
            Get instant access to The Game Changer book and exclusive bonuses today
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-2xl overflow-hidden border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <div className="relative mb-8">
                  <img 
                    src="path-to-your-book-cover.jpg"
                    alt="The Game Changer Book"
                    className="rounded-lg shadow-2xl transform transition-transform hover:scale-105"
                  />
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-2 px-4 rounded-full transform rotate-12">
                    Save 88%
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-6 mb-8">
                  <img 
                    src="path-to-old-vs-new-way.jpg"
                    alt="The Old Way vs The New Way"
                    className="rounded-lg mb-4"
                  />
                </div>
              </div>
              
              <div className="text-white">
                <div className="mb-8">
                  <div className="text-4xl font-bold mb-4">
                    <span className="line-through text-gray-500 text-2xl mr-2">$97</span>
                    <span className="text-orange-500">$11.11</span>
                  </div>
                  <p className="text-gray-300">One-time payment - Lifetime access</p>
                </div>

                <div className="space-y-6 mb-8">
                  <h3 className="text-xl font-bold flex items-center">
                    <Gift className="h-5 w-5 mr-2 text-orange-500" />
                    Exclusive Bonuses ($850 Value)
                  </h3>
                  {bonuses.map((bonus, index) => (
                    <div key={index} className="bg-white/5 rounded-lg overflow-hidden">
                      <img 
                        src={bonus.image}
                        alt={bonus.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{bonus.title}</h4>
                          <span className="text-orange-500 font-bold">{bonus.value}</span>
                        </div>
                        <p className="text-sm text-gray-400">{bonus.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button primary fullWidth className="text-lg py-4 mb-4">
                  Get Instant Access Now
                </Button>

                <div className="flex items-center justify-center text-sm text-gray-400 space-x-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    <span>14-Day Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;