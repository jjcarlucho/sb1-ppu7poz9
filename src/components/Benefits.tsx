import React from 'react';
import { BookOpenText, BrainCircuit, Target, User, BarChart4, Sparkles, DollarSign, Clock, Shield } from 'lucide-react';

const benefits = [
  {
    icon: <DollarSign className="h-10 w-10 text-blue-600" />,
    title: 'Generate Income Within 3 Months',
    description: 'Start seeing real results and income from your book using our proven marketing system.',
  },
  {
    icon: <Target className="h-10 w-10 text-blue-600" />,
    title: 'One Book Strategy',
    description: 'Learn how to leverage a single book to create multiple income streams and scale to 7 figures.',
  },
  {
    icon: <Clock className="h-10 w-10 text-blue-600" />,
    title: 'Save Time & Money',
    description: 'No more wasting thousands on ineffective marketing or spending hours on content creation.',
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-600" />,
    title: 'Money-Back Guarantee',
    description: 'If you don\'t see results within three months, get a full refund - no questions asked.',
  },
  {
    icon: <BookOpenText className="h-10 w-10 text-blue-600" />,
    title: 'Complete Marketing System',
    description: 'Get our counterintuitive marketing approach that works without constant content creation.',
  },
  {
    icon: <Sparkles className="h-10 w-10 text-blue-600" />,
    title: 'Exclusive Bonuses ($850 Value)',
    description: 'Access AI tools checklist, mindset audios, and transformational TFT course.',
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Transform Your Knowledge Into A 7-Figure Business</h2>
          <p className="text-lg text-gray-300">
            Our proven system helps coaches and consultants scale their business with just one book
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 transition-all duration-300 hover:border-blue-500/50"
            >
              <div className="rounded-full bg-blue-600/20 p-3 w-fit mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;