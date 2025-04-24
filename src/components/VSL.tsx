import React from 'react';

const VSL: React.FC = () => {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
            {/* Video Placeholder - Replace with actual video embed */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://player.vimeo.com/video/YOUR_VIDEO_ID?autoplay=1&color=ff9933&title=0&byline=0&portrait=0"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
            
            {/* Overlay that appears before video plays */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full flex items-center gap-2 transform hover:scale-105 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                WATCH NOW
              </button>
            </div>
          </div>
          
          {/* VSL Headline */}
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mt-8 mb-4">
            Discover The One-Book System That Will Transform Your Knowledge Into Steady Income
          </h2>
          
          {/* Sound Control Notice */}
          <p className="text-yellow-500 text-center flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
            </svg>
            Please make sure your sound is turned on
          </p>
        </div>
      </div>
    </section>
  );
};

export default VSL;