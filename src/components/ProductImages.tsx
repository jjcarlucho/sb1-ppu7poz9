import React from 'react';

const ProductImages: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#3a4440] via-[#2c3330] to-[#1c2320]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Main Book Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-lg blur-xl opacity-75"></div>
              <div className="relative bg-gradient-to-br from-[#4a5550] to-[#2c3330] p-8 rounded-lg shadow-2xl">
                <img 
                  src="/api/placeholder/600/900"
                  alt="The GameChanger Book Cover" 
                  className="w-full rounded-lg shadow-xl"
                />
                <div className="absolute -top-6 -right-6 bg-yellow-500 text-black font-bold px-6 py-3 rounded-full transform rotate-12 shadow-lg">
                  VALUE $11.11
                </div>
              </div>
            </div>
            
            {/* Bonuses Section */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-[#ecc94b] mb-6">Unlock These Exclusive Bonuses</h2>
              
              {/* Bonus 1 */}
              <div className="flex items-center space-x-6 bg-[#2c3330]/50 p-4 rounded-lg">
                <div className="w-24 h-24 bg-gradient-to-br from-[#4a5550] to-[#2c3330] rounded-lg p-2 flex-shrink-0">
                  <img 
                    src="/api/placeholder/100/100"
                    alt="AI Tools Checklist" 
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">AI Tools Checklist</h3>
                  <p className="text-gray-300">The ultimate resource library</p>
                  <p className="text-[#ecc94b] font-bold">Value: $97</p>
                </div>
              </div>
              
              {/* Bonus 2 */}
              <div className="flex items-center space-x-6 bg-[#2c3330]/50 p-4 rounded-lg">
                <div className="w-24 h-24 bg-gradient-to-br from-[#4a5550] to-[#2c3330] rounded-lg p-2 flex-shrink-0">
                  <img 
                    src="/api/placeholder/100/100"
                    alt="Your Wish Is Your Command" 
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Your Wish Is Your Command</h3>
                  <p className="text-gray-300">Legendary manifestation audios</p>
                  <p className="text-[#ecc94b] font-bold">Value: $10,000</p>
                </div>
              </div>
              
              {/* Bonus 3 */}
              <div className="flex items-center space-x-6 bg-[#2c3330]/50 p-4 rounded-lg">
                <div className="w-24 h-24 bg-gradient-to-br from-[#4a5550] to-[#2c3330] rounded-lg p-2 flex-shrink-0">
                  <img 
                    src="/api/placeholder/100/100"
                    alt="TFT Course" 
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">TFT Course</h3>
                  <p className="text-gray-300">Release subconscious blocks</p>
                  <p className="text-[#ecc94b] font-bold">Value: $997</p>
                </div>
              </div>
              
              <div className="bg-[#ecc94b] text-black p-4 rounded-lg text-center">
                <p className="text-2xl font-bold">Total Value: $11,094</p>
                <p className="text-xl">Get Everything Today For Only $11.11</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductImages;