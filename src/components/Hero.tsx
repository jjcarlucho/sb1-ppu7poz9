import React from 'react';
// Asegúrate que este componente exista y funcione, o reemplázalo por un <button> normal
import { Button } from './Button'; 
import { ArrowRight, Target, Volume2 } from 'lucide-react'; 
// Asegúrate que VideoPlayer.tsx tenga el código del iframe básico estable
import VideoPlayer from './VideoPlayer'; 

const Hero: React.FC = () => {
  const vimeoVideoId = "1078146633"; 
  const vimeoVideoHash = "1a73fb42a0"; 

  return (
    <section className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0a0a0a] z-10"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          
          {/* ... (Banner superior, Titular, Subtítulo, Banner encima video, Video Player - SIN CAMBIOS) ... */}
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
           <div className="max-w-4xl mx-auto mb-4 flex justify-center"> 
             <div className="inline-flex items-center justify-center bg-gray-800/80 backdrop-blur-sm text-white text-sm sm:text-base font-semibold px-4 sm:px-5 py-2 sm:py-3 rounded-lg border border-white/20 shadow-lg">
               <Volume2 className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-green-400" /> 
               <span>CLICK THE VIDEO BELOW TO PLAY (SOUND ON!)</span>
             </div>
           </div>

           {/* Video Player */}
           <div className="max-w-4xl mx-auto mb-12">
             <VideoPlayer videoId={vimeoVideoId} videoHash={vimeoVideoHash} />
           </div>
          {/* =============================================================================== */}


          {/* ===== SECCIÓN CTA MEJORADA v2 ===== */}
          {/* Fondo más oscuro y limpio, borde sutil, más padding */}
          <div className="bg-gray-950 rounded-2xl p-10 md:p-12 lg:p-16 mb-12 border border-gray-800 shadow-2xl max-w-3xl mx-auto">
            {/* Texto "Special Launch Price" más pequeño */}
            <p className="text-lg font-medium text-gray-400 mb-2">
              Special Launch Price:
            </p>
            {/* Precio Principal - Más grande, color más vibrante */}
            <div className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              $11.11
            </div>
            {/* Texto de Ahorro - Legible pero secundario */}
            <p className="text-lg md:text-xl text-gray-400 mb-10">
              Save $85.89 Today - Regular Price <span className="line-through">$97</span>
            </p>
            {/* Botón Premium - Gradiente, sombra más fuerte, hover mejorado */}
            <Button 
              primary 
              className="group text-xl font-bold px-12 py-5 
                         bg-gradient-to-r from-orange-500 to-red-600 
                         hover:from-orange-600 hover:to-red-700 
                         text-white rounded-xl shadow-[0_10px_20px_rgba(245,_158,_11,_0.4)] 
                         hover:shadow-[0_15px_30px_rgba(245,_158,_11,_0.5)]
                         transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-orange-300/50"
            >
              Get Instant Access Now
              <ArrowRight className="ml-3 h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-2" />
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
