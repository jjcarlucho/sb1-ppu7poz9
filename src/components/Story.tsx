import React from 'react';

const Story: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Story Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            How I Discovered This One-Book-Only Secret
          </h2>

          {/* Story Content */}
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              A lot of folks think I was always this guy who mastered digital products...but the truth is:
            </p>
            
            <p className="font-bold text-xl">
              I started off totally clueless about digital entrepreneurship. I was trapped in a soul-sucking corporate job for years. It wasn't until I decided to write my first book that I got thrust into the world of online business.
            </p>
            
            <p>
              I was forced to get good at it fast because I left my corporate job the day after my book was published.
            </p>
            
            <p className="italic">
              Ever hear about Cortez burning the ships so his men couldn't retreat? Yeah...same principle!
            </p>
            
            <p className="font-bold text-xl">
              But it WORKED:
            </p>
            
            <p>
              I dedicated myself to helping other entrepreneurs, started one of the most successful platforms for digital product creation in the world.
            </p>
            
            <p>
              And it was just a few years ago...
            </p>
          </div>

          {/* Pattern Discovery Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
              After Years In The Business...I Spotted A Pattern
            </h3>
            
            <div className="space-y-6 text-lg text-gray-700">
              <p className="font-bold text-xl">
                Something virtually EVERY successful digital entrepreneur was doing...
              </p>
              
              <p>
                And something I'm sure they wanted to keep to themselves.
              </p>
              
              <p>
                Their strategy was really centered around one foundational product. Just repackaged and refined a bit.
              </p>
              
              <p className="font-bold text-xl">
                Only one. That's all they needed.
              </p>
              
              <p className="text-xl">
                And that's all YOU need to make a sweet living from your knowledge.
              </p>
            </div>
          </div>

          {/* Results Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
              I Started To Apply This "One Book" Approach And Doubled My Business In 7 Months
            </h3>
            
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                It was wild! The sales just started coming in...
              </p>
              
              <p>
                ...slow and steady at first.
              </p>
              
              <p>
                Then the pace really picked up.
              </p>
              
              <p className="font-bold text-xl">
                And I doubled my business in just under 7 months.
              </p>
              
              <p>
                I decided I had to let other entrepreneurs in on this...so:
              </p>
            </div>
          </div>

          {/* Blueprint Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
              I Created A Step-by-Step Blueprint For You
            </h3>
            
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                And now thousands of others have used it...enjoying the success I have...
              </p>
              
              <p>
                ...without the worry of building a huge mailing list...or scrambling for traffic.
              </p>
              
              <p className="font-bold text-xl">
                This one book does the hard work for you.
              </p>
              
              <p>
                I had to create it with everyday entrepreneurs in mind - not just marketing superstars.
              </p>
              
              <p>
                This had to work for almost ANYONE...otherwise I would just chalk this up to dumb luck or natural talent.
              </p>
              
              <p className="font-bold text-xl">
                But it DID. It worked for TONS of folks, like...
              </p>
              
              {/* Testimonials */}
              <div className="bg-gray-50 p-8 rounded-lg mt-8 space-y-4">
                <blockquote className="italic text-gray-600">
                  "This has to be the easiest way to make more from a book I've ever seen." - Emily Smith
                </blockquote>
                
                <blockquote className="italic text-gray-600">
                  "Jonathan's approach to digital products is the best thing to happen to entrepreneurship since the internet was invented." -- Carlos Hernandez
                </blockquote>
                
                <blockquote className="italic text-gray-600">
                  "The difference in my sales is over 60% greater...and my client base matches. So my income has increased by nearly that much as well!" -- Smith Hernandez
                </blockquote>
              </div>
            </div>
          </div>

          {/* Final Section */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-8 text-gray-800">
              More Money With Each Book You Write
            </h3>
            
            <p className="text-xl text-gray-700 mb-8">
              I call this THE BOOK...and here's why:
            </p>
            
            <a 
              href="#offer"
              className="inline-flex items-center bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;