import React, { useEffect } from 'react';

const Pricing: React.FC = () => {
  const bonuses = [
    {
      title: "Your Wish Is Your Command Audios",
      value: "$500",
      description: "Legendary mindset and manifestation audios.",
      image: "https://images.pexels.com/photos/4064840/pexels-photo-4064840.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "TFT Course",
      value: "$300",
      description: "Release subconscious blocks and emotions.",
      image: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const totalBonusValue = bonuses.reduce((sum, bonus) => {
    return sum + parseInt(bonus.value.replace('$', ''), 10);
  }, 0);

  React.useEffect(() => {
    const regularPrice = (11.11 * 2).toFixed(2);
    const originalPrice = (11.11 + 200).toFixed(2);
    
    const regularPriceElement = document.getElementById('regularPrice');
    const regularPrice2Element = document.getElementById('regularPrice2');
    const originalPriceElement = document.getElementById('originalPrice');
    
    if (regularPriceElement) {
      regularPriceElement.textContent = `$${regularPrice}`;
    }
    if (regularPrice2Element) {
      regularPrice2Element.textContent = `$${regularPrice}`;
    }
    if (originalPriceElement) {
      originalPriceElement.textContent = `$${originalPrice}`;
    }
  }, []);

  return (
    <section id="offer" className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Pricing Introduction */}
          <div className="text-center space-y-6 mb-12">
            <p className="text-xl">
              Initially, I felt I should charge at least enough to cover the effort that went in.
            </p>
            
            <p className="text-xl">
              At even just <span id="regularPrice" className="font-bold">[[calculate 11.11 multiplied by 2. Show the result]]</span>, I believe you'll find it more than fair.
            </p>
            
            <p className="text-xl">
              Especially since this is a resource you'll keep and refer back to whenever you need.
            </p>
            
            <p className="text-xl font-semibold">
              But now, as we've been through this together…
            </p>
            
            <p className="text-xl">
              It feels like we have a connection.
            </p>
            
            <p className="text-xl">
              Because I've helped many in your shoes…
            </p>
            
            <p className="text-xl">
              People who are happier and more secure financially.
            </p>
            
            <p className="text-xl">
              And I've also seen others think that even <span id="regularPrice2" className="font-bold">[[calculate 11.11 multiplied by 2. Show the result]]</span> is too steep to pay for such clarity and peace.
            </p>
            
            <p className="text-xl">
              And they miss out on exactly the kind of financial freedom they're seeking
            </p>
            
            <p className="text-xl font-bold">
              I don't want that for you.
            </p>
            
            <p className="text-xl">
              That's why today, I am offering it for even less at just <span id="originalPrice" className="font-bold">[[calculate 11.11 plus $200]]</span>.
            </p>
            
            <p className="text-xl font-semibold">
              But to thank you for your time today…
            </p>
            
            <p className="text-xl font-semibold">
              And because it's clear you're ready for this transformation…
            </p>
            
            <p className="text-xl font-bold">
              If you act now during this special offer…
            </p>
          </div>

          {/* Price Box */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-12 text-center">
            <h3 className="text-4xl font-bold mb-6">You can get everything for 11.11.</h3>
            
            <p className="text-xl mb-6">
              That means you're saving $11.11 now... before $29.99 off the usual price…
            </p>
            
            <p className="text-xl mb-8">
              Just to help you get started right now...plus:
            </p>

            {/* Bonuses */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {bonuses.map((bonus, index) => (
                <div key={index} className="bg-black/30 rounded-lg p-6">
                  <img src={bonus.image} alt={bonus.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h4 className="text-xl font-bold mb-2">{bonus.title}</h4>
                  <p className="text-yellow-400 font-bold mb-2">Value: {bonus.value}</p>
                  <p className="text-gray-300">{bonus.description}</p>
                </div>
              ))}
            </div>

            {/* Guarantee */}
            <div className="bg-green-600/20 border-2 border-green-400 rounded-lg p-6 mb-8">
              <h4 className="text-2xl font-bold mb-4">7-Day Money Back Guarantee</h4>
              <p className="text-lg">
                And remember, if you're not happy with the outcome, we've got your back with our 7-day money-back guarantee.
              </p>
              <p className="text-lg mt-4">
                This way, you'll have the chance to see firsthand how impactful this can be.
              </p>
            </div>

            {/* Additional Content */}
            <div className="space-y-4 text-lg mb-8">
              <p>
                Soon enough, you'll notice progress and start moving towards your goals.
              </p>
              <p>
                Your worries will start to ease as you see results, and you'll feel empowered to take charge of your life.
              </p>
              <p>
                We've had a lot of happy customers already.
              </p>
              <p>
                If things don't work out or if you're not seeing results as quickly as you'd like, just drop me an email and I'll refund you.
              </p>
              <p className="font-bold">
                No hassle.
              </p>
            </div>

            {/* CTA Button */}
            <a 
              href="https://buy.stripe.com/test_8wM16KcnC7dh4vi144"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-4 px-8 rounded-full text-xl hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Instant Access for $11.11
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;