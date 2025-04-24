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
  const playerRef = useRef<HTMLDivElement>(null); 

  // --- Inicializar el reproductor de Vimeo ---
  useEffect(() => {
    if (playerRef.current) {
      // Opciones explícitas en lugar de 'background: true'
      const options = {
        id: parseInt(videoId, 10), 
        hash: videoHash,          
        // width: 640, // No especificamos tamaño, debería adaptarse
        autoplay: true, // Autoplay explícito
        muted: true,    // Muted explícito
        loop: true,     // Loop explícito para el inicio
        controls: false,// Sin controles
        dnt: true,                
      };

      let vimeoPlayer: VimeoPlayer | null = null;
      try {
        vimeoPlayer = new VimeoPlayer(playerRef.current, options);
        setPlayer(vimeoPlayer); // Guardar instancia temprano

        vimeoPlayer.ready().then(() => {
          console.log("Vimeo Player (API) ready!");
          // Opcional: Forzar play/mute si autoplay/muted no funcionaron
          // vimeoPlayer?.play().catch(e => console.warn("Autoplay blocked?", e));
          // vimeoPlayer?.setVolume(0); 
        }).catch(error => {
          console.error("Vimeo Player (API) ready error:", error);
        });

        vimeoPlayer.on('error', (error) => {
           console.error('Vimeo Player (API) Error:', error);
        });

      } catch (error) {
         console.error("Error creating Vimeo player (API) instance:", error);
         if (vimeoPlayer) { vimeoPlayer.destroy(); } // Limpiar si falla creación
         setPlayer(null);
      }

      // Limpieza al desmontar
      return () => {
        // Necesitamos obtener el player del estado aquí si la instancia local no está disponible
        // O asegurarnos de que la referencia `vimeoPlayer` capturada sea la correcta.
        // Para simplificar, intentemos destruir usando la referencia del estado al desmontar
        // Esto requiere cuidado si el estado se actualiza asíncronamente.
        // Mejorar: Usar una ref para la instancia si la limpieza es problemática.
        
        // Intento simple de limpieza usando la instancia capturada:
        const playerToDestroy = vimeoPlayer; 
         if (playerToDestroy) {
           console.log("Destroying Vimeo Player (API) instance");
           playerToDestroy.destroy().catch(error => console.error("Error destroying Vimeo player (API):", error));
         }
      };
    }
  }, [videoId, videoHash]); 

  // --- Manejar el clic en el overlay ---
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

  // --- Manejar clic en el video para pausar/reanudar ---
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

  return (
    <div 
      className="relative w-full aspect-video rounded-xl overflow-hidden bg-black cursor-pointer"
      onClick={handleVideoTogglePlay} 
    >
      {/* Div donde se montará el player de Vimeo - Aseguramos tamaño */}
      <div ref={playerRef} className="absolute inset-0 w-full h-full"></div> 

      {/* Overlay personalizado */}
      {showOverlay && (
        <div
          className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-10"
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

export default VideoPlayer;