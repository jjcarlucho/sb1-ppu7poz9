import React, { useState, useRef } from 'react';

const VSL: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlayClick = () => {
    if (iframeRef.current) {
      // Remove muted parameter and restart the video with sound
      iframeRef.current.src = "https://player.vimeo.com/video/1078146633?autoplay=1&color=ff9933&title=0&byline=0&portrait=0";
      setIsPlaying(true);
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Finally! A Proven System To Turn Your Knowledge Into Income
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Without being salesy or spending thousands on marketing
            </p>
            
            {/* Sound Control Notice */}
            <div className="inline-flex items-center justify-center gap-2 bg-yellow-500/10 text-yellow-500 px-6 py-3 rounded-full border border-yellow-500/30 mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Click play to enable sound and watch the full presentation</span>
            </div>
          </div>

          {/* Video Container */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-orange-500/10 rounded-full blur-xl"></div>
            
            <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
              {/* Vimeo Video Embed */}
              <iframe
                ref={iframeRef}
                className="absolute top-0 left-0 w-full h-full"
                src="https://player.vimeo.com/video/1078146633?autoplay=1&muted=1&background=1&color=ff9933&title=0&byline=0&portrait=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* Play Button Overlay */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 cursor-pointer transition-all hover:bg-opacity-40"
                  onClick={handlePlayClick}
                >
                  <button 
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-bold py-6 px-10 rounded-full flex items-center gap-4 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-yellow-500/25"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    <span className="text-2xl">PLAY NOW</span>
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Video Description */}
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Discover The One-Book System That Will Transform Your Knowledge Into Steady Income
            </h2>
            <p className="text-gray-400">
              Watch this short presentation to learn how you can finally monetize your expertise
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>1,000+ Success Stories</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Watch in 15 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSL;