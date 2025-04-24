import React from 'react';
// Asegúrate que este componente exista y funcione, o reemplázalo por un <button> normal
import { Button } from './Button'; 
import { ArrowRight, Target, Volume2 } from 'lucide-react'; 
import VideoPlayer from './VideoPlayer'; // Asegúrate que use el iframe básico estable

const Hero: React.FC = () => {
  const vimeoVideoId = "1078146633"; 
  const vimeoVideoHash = "1a73fb42a0"; 

  return (
    <section className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0a0a0a] z-10"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          
          {/* Banner superior */}
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold px-6 py-3 rounded-full mb-8">
            <Target className="h-4 w-4 mr-2" />
            <span>For Coaches, Consultants & Service Providers Looking To Scale To 7 Figures In 2025</span>
          </div>
          
          {/* Titular */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 text-transparent bg-clip-text">
            The System For Coaches: Write Your Book & Scale To 6-7 Figures
          </h1>
          
          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover This Counterintuitive New Marketing System That Coaches And Experts Are Using To Scale Their Business
            <span className="block mt-4 text-orange-500">...Without Wasting Thousands On Ads, Posting Content Every Day, Or Sending Cold DMs - Or Your Money Back!</span>
          </p>

          {/* Banner encima del video */}
          <div className="max-w-4xl mx-auto mb-4"> 
            <div className="inline-flex items-center justify-center bg-gray-800/80 backdrop-blur-sm text-white text-base font-semibold px-5 py-3 rounded-lg border border-white/20 shadow-lg">
              <Volume2 className="h-5 w-5 mr-3 text-green-400" /> 
              <span>CLICK THE VIDEO BELOW TO PLAY (SOUND ON!)</span>
            </div>
          </div>

          {/* Video Player */}
          <div className="max-w-4xl mx-auto mb-12">
            <VideoPlayer videoId={vimeoVideoId} videoHash={vimeoVideoHash} />
          </div>

          {/* ===== SECCIÓN CTA REDISEÑADA ===== */}
          <div className="bg-gray-900/70 rounded-2xl p-8 md:p-10 lg:p-12 mb-12 backdrop-blur-md border border-gray-700/50 shadow-xl max-w-3xl mx-auto">
            {/* Precio Principal - Más grande y llamativo */}
            <div className="text-4xl md:text-5xl font-bold mb-3 text-white">
              Special Launch Price: <span className="text-orange-400">$11.11</span>
            </div>
            {/* Texto de Ahorro - Más sutil */}
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Save $85.89 Today - Regular Price $97
            </p>
            {/* Botón Rediseñado - Gradiente, más grande, con sombra y hover */}
            <Button 
              primary 
              className="group text-xl font-semibold px-10 py-5 
                         bg-gradient-to-r from-orange-500 to-red-600 
                         hover:from-orange-600 hover:to-red-700 
                         text-white rounded-lg shadow-lg 
                         transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-orange-500"
            >
              Get Instant Access Now
              <ArrowRight className="ml-3 h-6 w-6 transform transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          {/* ================================= */}

        </div>
      </div>
      
      {/* Efecto de gradiente inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
    </section>
  );
};

export default Hero;
