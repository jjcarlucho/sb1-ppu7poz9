import React from 'react';
import { BookOpen, DollarSign, CheckCircle, Sparkles, Rocket, Brain, Star } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Feature */}
          <div className="text-center mb-16">
            <div className="bg-blue-600 text-white p-8 rounded-lg shadow-xl mb-8">
              <p className="text-xl md:text-2xl font-semibold">
                The GameChanger es un ebook estratégico que te guía paso a paso para convertir tu experiencia en un libro que atrae clientes, paga tu publicidad y vende por vos, incluso mientras dormís. Ideal para coaches, mentores y creadores que quieren vivir de lo que saben sin sentirse esclavos del marketing.
              </p>
            </div>
            
            <p className="text-2xl font-bold text-gray-800 mb-4">
              Only one book - that's all I used to double my revenue in under 7 months.
            </p>
            
            <p className="text-xl text-gray-700">
              And that's all any entrepreneur needs.
            </p>
          </div>

          {/* You'll Discover Section */}
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            You'll discover...
          </h3>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold mb-3">Learn to create ebooks without any prior experience.</h4>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Sparkles className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold mb-3">Use AI tools to simplify content creation.</h4>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Rocket className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold mb-3">Discover marketing strategies to sell your ebook online.</h4>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold mb-3">Usá IA para acelerar lo que sabés, no para reemplazarlo.</h4>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Star className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold mb-3">Ideal para coaches, mentores, terapeutas, creadores o freelancers.</h4>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <DollarSign className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold mb-3">Aprende a vender sin sentirte "vendedor".</h4>
            </div>
          </div>

          {/* And More */}
          <div className="text-center mb-16">
            <p className="text-2xl font-bold text-gray-800">• And More!</p>
          </div>

          {/* What You'll Receive */}
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Here's what you'll receive today...
          </h3>

          {/* Features List */}
          <div className="space-y-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600 mb-3">
                Step-by-step guide - Easy to follow instructions for beginners.
              </h4>
              <p className="text-gray-700">
                No more guesswork! Follow a crystal-clear, step-by-step guide designed for total beginners. Just follow along and build your digital product business from scratch—no experience needed!
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600 mb-3">
                • AI tool recommendations - Discover the best AI tools to aid in content creation.
              </h4>
              <p className="text-gray-700">
                Save hours of work with our handpicked list of AI tools. These game-changers will help you write, design, and create your ebook like a pro in way less time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600 mb-3">
                • Marketing strategies - Effective strategies for selling your ebook online.
              </h4>
              <p className="text-gray-700">
                Learn the exact marketing moves that actually work. From email to social media, you'll know how to get your ebook into the hands of people who want to buy it—fast.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600 mb-3">
                • Real case examples and breakdowns - Real-world examples that you can model immediately.
              </h4>
              <p className="text-gray-700">
                Steal the secrets from real success stories! We break down real case studies so you can copy what works and skip what doesn't.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600 mb-3">
                • Funnel templates and pricing tips - No fluff — just what works, step by step.
              </h4>
              <p className="text-gray-700">
                Plug-and-play funnel templates and proven pricing hacks that turn browsers into buyers. Just fill in the blanks and watch your sales grow.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600 mb-3">
                • And much more!
              </h4>
              <p className="text-gray-700">
                There's even more inside waiting for you—tools, tips, and shortcuts that make selling your ebook online easier than ever.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a 
              href="#offer"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-4 px-8 rounded-full text-xl hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Instant Access Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;