import React, { useState, useRef } from 'react';

const VSL: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlayClick = () => {
    if (iframeRef.current) {
      iframeRef.current.src = "https://player.vimeo.com/video/1078146633?autoplay=1&color=f59e0b&title=0&byline=0&portrait=0";
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-8 md:py-12">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1920&q=80')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Alert Bar */}
          <div className="bg-red-600 text-white px-4 py-2 rounded-lg mb-6 text-center animate-pulse">
            <p className="font-bold">⚡ SPECIAL OFFER: Only 47 Spots Available At This Price</p>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 leading-tight">
            Discover The <span className="text-amber-400 underline decoration-wavy">One-Book System</span> That Helped 1,847+ Authors 
            <span className="block mt-2">Turn Their Knowledge Into $5,000+ Monthly Income</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 text-center mb-8">
            Without spending thousands on marketing or being a bestselling author
          </p>

          {/* Video Container */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-neutral-900">
              <iframe
                ref={iframeRef}
                className="absolute top-0 left-0 w-full h-full"
                src="https://player.vimeo.com/video/1078146633?autoplay=1&muted=1&background=1&color=f59e0b&title=0&byline=0&portrait=0"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
              
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 cursor-pointer transition-all hover:bg-opacity-30"
                  onClick={handlePlayClick}
                >
                  <button 
                    className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-6 px-12 rounded-full flex items-center gap-4 transform hover:scale-105 transition-all duration-300 shadow-2xl"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    <span className="text-2xl">WATCH NOW</span>
                  </button>
                </div>
              )}
            </div>
            
            {/* Sound Notice */}
            <div className="flex items-center justify-center gap-2 mt-4 text-amber-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Click play to enable sound and discover your path to success</span>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-neutral-800/50 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-amber-400">1,847+</div>
              <div className="text-sm text-gray-400">Success Stories</div>
            </div>
            <div className="bg-neutral-800/50 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-amber-400">$27M+</div>
              <div className="text-sm text-gray-400">Revenue Generated</div>
            </div>
            <div className="bg-neutral-800/50 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-amber-400">4.9/5</div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
            <div className="bg-neutral-800/50 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-amber-400">15 min</div>
              <div className="text-sm text-gray-400">Quick Watch</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSL;