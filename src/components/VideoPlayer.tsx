import React, { useState, useEffect, useRef, useCallback } from 'react';
import VimeoPlayer from '@vimeo/player'; // Importar el reproductor de Vimeo
import { Play } from 'lucide-react'; // Asumo que sigues queriendo tu icono de Play personalizado

interface VideoPlayerProps {
  videoId: string; // El ID numérico de Vimeo: 1078146633
  videoHash?: string; // El hash opcional para videos privados: 1a73fb42a0
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, videoHash }) => {
  const [player, setPlayer] = useState<VimeoPlayer | null>(null);
  const [showOverlay, setShowOverlay] = useState(true); // Mostrar overlay al inicio
  const playerRef = useRef<HTMLDivElement>(null); // Ref para el div QUE SERÁ el player

  // --- Inicializar el reproductor de Vimeo ---
  useEffect(() => {
    if (playerRef.current) {
      const options = {
        id: parseInt(videoId, 10), 
        hash: videoHash,          
        background: true, // Modo background (autoplay, muted, loop, no controls) - INTENTA OCULTAR BOTON NEGRO
        muted: true,               
        controls: false,           
        dnt: true,                 
      };

      let vimeoPlayer: VimeoPlayer | null = null; // Variable local para la limpieza
      try {
        vimeoPlayer = new VimeoPlayer(playerRef.current, options);

        vimeoPlayer.ready().then(() => {
          console.log("Vimeo Player (API) ready!");
          // Asegurarse de que esté muteado y reproduciendo si background=true no fue suficiente
          vimeoPlayer?.setVolume(0); 
          vimeoPlayer?.play().catch(e => console.warn("Autoplay blocked?", e));
        }).catch(error => {
          console.error("Vimeo Player (API) ready error:", error);
        });

        vimeoPlayer.on('error', (error) => {
           console.error('Vimeo Player (API) Error:', error);
        });

        setPlayer(vimeoPlayer); // Guardar instancia en el estado

      } catch (error) {
         console.error("Error creating Vimeo player (API) instance:", error);
         // Limpiar si la creación falló
         if (vimeoPlayer) {
            vimeoPlayer.destroy().catch(e => console.error("Error destroying on creation fail:", e));
         }
         setPlayer(null);
      }

      // Limpieza al desmontar el componente
      return () => {
        // Usar la instancia capturada en el closure
        const playerToDestroy = vimeoPlayer; 
        if (playerToDestroy) {
          console.log("Destroying Vimeo Player (API) instance");
          playerToDestroy.destroy().catch(error => console.error("Error destroying Vimeo player (API):", error));
          setPlayer(null); 
        }
      };
    }
  }, [videoId, videoHash]); // Dependencias: reinicializar si cambian

  // --- Manejar el clic en el overlay ---
  const handlePlayClick = useCallback(() => {
    if (player) {
      console.log("Overlay clicked, restarting with sound");
      setShowOverlay(false); // Ocultar overlay
      player.setLoop(false).catch(e => console.warn("Error setting loop false", e));
      player.setVolume(1).catch(e => console.warn("Error setting volume", e));     
      player.setCurrentTime(0).then(() => {
         player.play().catch(e => console.error("Error playing after seek:", e));
      }).catch(error => console.error("Error setting current time:", error));
    } else {
        console.error("Player not available on overlay click");
    }
  }, [player]);

  // --- Manejar clic en el video para pausar/reanudar ---
  const handleVideoTogglePlay = useCallback(() => {
    if (player && !showOverlay) { // Solo funciona si el overlay no está visible
      player.getPaused().then((paused) => {
        if (paused) {
          console.log("Video clicked: Playing");
          player.play().catch(error => console.error("Error playing video on click:", error));
        } else {
          console.log("Video clicked: Pausing");
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
      {/* Div donde se montará el player de Vimeo */}
      <div ref={playerRef} className="w-full h-full"></div>

      {/* Overlay personalizado */}
      {showOverlay && (
        <div
          className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-10"
          onClick={(e) => { 
            e.stopPropagation(); 
            handlePlayClick(); 
          }} 
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