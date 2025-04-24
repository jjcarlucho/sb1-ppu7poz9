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

  // Inicializar
  useEffect(() => {
    if (playerRef.current) {
      const options = {
        id: parseInt(videoId, 10), 
        hash: videoHash,          
        autoplay: true, 
        muted: true,    
        loop: true,     
        controls: false, // <= Esto debería ocultar controles de Vimeo
        dnt: true,                
      };
      let vimeoPlayer: VimeoPlayer | null = null;
      try {
        vimeoPlayer = new VimeoPlayer(playerRef.current, options);
        setPlayer(vimeoPlayer); 
        vimeoPlayer.ready().then(() => console.log("Vimeo Player (API) ready!"))
                   .catch(error => console.error("Vimeo Player (API) ready error:", error));
        vimeoPlayer.on('error', (error) => console.error('Vimeo Player (API) Error:', error));
      } catch (error) {
         console.error("Error creating Vimeo player (API) instance:", error);
         if (vimeoPlayer) { vimeoPlayer.destroy(); } 
         setPlayer(null);
      }
      // Limpieza
      return () => {
        const playerToDestroy = player || vimeoPlayer; // Intentar obtener la instancia correcta
         if (playerToDestroy) {
           playerToDestroy.destroy().catch(error => console.error("Error destroying Vimeo player (API):", error));
         }
         setPlayer(null);
      };
    }
  }, [videoId, videoHash]); 

  // Click en Overlay inicial
  const handlePlayClick = useCallback(() => {
    if (player) {
      setShowOverlay(false); 
      player.setLoop(false).catch(e => console.warn("Error setting loop false", e));
      player.setVolume(1).catch(e => console.warn("Error setting volume", e));     
      player.setCurrentTime(0).then(() => {
         player.play().catch(e => console.error("Error playing after seek:", e));
      }).catch(error => console.error("Error setting current time:", error));
    } 
  }, [player]);

  // Click en Video para pausar/reanudar
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
    // Contenedor Principal con aspect ratio
    <div 
      className="relative w-full aspect-video rounded-xl overflow-hidden bg-black cursor-pointer"
      onClick={handleVideoTogglePlay} 
    >
      {/* Div donde se monta el player - ASEGURAR TAMAÑO COMPLETO ABSOLUTO */}
      <div ref={playerRef} className="absolute inset-0 w-full h-full"></div> 

      {/* Overlay inicial */}
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