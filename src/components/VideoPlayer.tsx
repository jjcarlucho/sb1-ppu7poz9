import React, { useState, useEffect, useRef, useCallback } from 'react';
import VimeoPlayer from '@vimeo/player'; 
import { Play } from 'lucide-react'; 

interface VideoPlayerProps {
  videoId: string; 
  videoHash?: string; 
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, videoHash }) => {
  const [player, setPlayer] = useState<VimeoPlayer | null>(null);
  const [showOverlay, setShowOverlay] = useState(true); 
  // Renombramos la ref para claridad
  const playerContainerRef = useRef<HTMLDivElement>(null); 

  // Inicializar
  useEffect(() => {
    // Solo intentar inicializar si el div contenedor existe
    if (playerContainerRef.current) {
      // Opciones MÍNIMAS para probar autoplay mudo sin controles
      const options = {
        id: parseInt(videoId, 10), 
        hash: videoHash,          
        autoplay: true, // Autoplay
        muted: true,    // Sin sonido inicial
        controls: false,// Sin controles de Vimeo
        dnt: true,      // No rastrear         
        // responsive: true // A veces Vimeo tiene esta opción, aunque no está siempre documentada
      };

      let vimeoPlayer: VimeoPlayer | null = null;
      try {
        // Importante: Pasamos el div contenedor directamente a la API
        vimeoPlayer = new VimeoPlayer(playerContainerRef.current, options);
        setPlayer(vimeoPlayer); 

        vimeoPlayer.ready().then(() => {
          console.log("Vimeo Player (API) ready!");
          // Ya no intentamos forzar estilos aquí, confiamos en el contenedor
        }).catch(error => {
          console.error("Vimeo Player (API) ready error:", error);
        });
        vimeoPlayer.on('error', (error) => {
           console.error('Vimeo Player (API) Error:', error);
        });

      } catch (error) {
         console.error("Error creating Vimeo player (API) instance:", error);
         if (vimeoPlayer) { vimeoPlayer.destroy(); } 
         setPlayer(null);
      }
      
      // Limpieza
      return () => {
        const playerInstance = player; 
        if (playerInstance) { 
          playerInstance.destroy().catch(error => console.error("Error destroying Vimeo player (API):", error));
        }
         setPlayer(null);
      };
    }
  }, [videoId, videoHash, player]); // Dependencias

 // --- Lógica de Clicks (sin cambios) ---
 const handlePlayClick = useCallback(() => { /*...*/ }, [player]);
 const handleVideoTogglePlay = useCallback(() => { /*...*/ }, [player, showOverlay]);
 // --- Fin Lógica de Clicks ---

  return (
    // Contenedor Principal con aspect ratio y relative para el overlay
    <div 
      className="relative w-full aspect-video rounded-xl overflow-hidden bg-black"
      // Quitamos el onClick de aquí por ahora para simplificar
      // onClick={handleVideoTogglePlay} 
    >
      {/* Div contenedor donde se renderizará el iframe de Vimeo */}
      {/* Lo dejamos SIN 'absolute', que ocupe el flujo normal dentro del padre con aspect-video */}
      <div ref={playerContainerRef} className="w-full h-full"></div> 

      {/* Overlay inicial */}
      {showOverlay && (
        <div
          className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-10 cursor-pointer" // Añadido cursor-pointer
          onClick={(e) => { e.stopPropagation(); handlePlayClick(); }} 
        >
          <div className="flex flex-col items-center justify-center animate-pulse"> 
            <div className="bg-white/90 rounded-full p-6 mb-4 transform transition-all hover:scale-110">
              <Play className="h-12 w-12 text-blue-600 fill-current" />
            </div>
            <p className="text-white text-xl font-semibold">Click to Watch The Video</p>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Pegar aquí de nuevo las funciones handlePlayClick y handleVideoTogglePlay ---
// (Las omití arriba por brevedad, pero asegúrate de tenerlas completas en tu código final
// tal como estaban en la versión anterior que sí funcionaba con la API)

// Ejemplo (asegúrate de que estas funciones estén DENTRO del componente VideoPlayer):
/*
  const handlePlayClick = useCallback(() => {
    if (player) {
      console.log("Overlay clicked, restarting with sound");
      setShowOverlay(false); 
      player.setLoop(false).catch(e => console.warn("Error setting loop false", e));
      player.setVolume(1).catch(e => console.warn("Error setting volume", e));     
      player.setCurrentTime(0).then(() => {
         player.play().catch(e => console.error("Error playing after seek:", e));
      }).catch(error => console.error("Error setting current time:", error));
    } else { console.error("Player not available on overlay click"); }
  }, [player]);

  const handleVideoTogglePlay = useCallback(() => {
    if (player && !showOverlay) { 
      player.getPaused().then((paused) => {
        if (paused) {
          player.play().catch(error => console.error("Error playing video on click:", error));
        } else {
          player.pause().catch(error => console.error("Error pausing video on click:", error));
        }
      }).catch(error => console.error("Error getting paused state on click:", error));
    }
  }, [player, showOverlay]);
*/
// ------------------------------------------------------------------------------------


export default VideoPlayer;