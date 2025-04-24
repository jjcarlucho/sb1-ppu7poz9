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
  const playerContainerRef = useRef<HTMLDivElement>(null); 
  const playerTargetRef = useRef<HTMLDivElement>(null); 
  const playerInstanceRef = useRef<VimeoPlayer | null>(null); 

  // Inicializar
  useEffect(() => {
    // Solo ejecutar si playerTargetRef existe y no tenemos ya una instancia
    if (playerTargetRef.current && !playerInstanceRef.current) {
      const options = {
        id: parseInt(videoId, 10), 
        hash: videoHash,          
        autoplay: true, 
        muted: true,    
        loop: true,     
        controls: false,
        dnt: true,                
      };
      
      console.log("Attempting to initialize Vimeo Player with API...");
      try {
        const vimeoPlayer = new VimeoPlayer(playerTargetRef.current, options);
        playerInstanceRef.current = vimeoPlayer; 
        setPlayer(vimeoPlayer); 

        vimeoPlayer.ready().then(() => {
          console.log("Vimeo Player (API) ready!");
          const iframe = playerInstanceRef.current?.element;
          if (iframe) {
            iframe.style.width = '100%'; iframe.style.height = '100%';
          }
          playerInstanceRef.current?.setVolume(0); 
          // No llamamos a play() aquí porque autoplay=true debería funcionar
        }).catch(error => {
          console.error("Vimeo Player (API) ready error:", error);
        });

        vimeoPlayer.on('error', (error) => {
           console.error('Vimeo Player (API) Error:', error);
        });

      } catch (error) {
         console.error("Error creating Vimeo player (API) instance:", error);
         playerInstanceRef.current?.destroy().catch(e => console.error("Error destroying on creation fail:", e));
         playerInstanceRef.current = null;
         setPlayer(null);
      }
    }
    
    // Limpieza
    return () => {
      if (playerInstanceRef.current) {
        console.log("Destroying Vimeo Player (API) instance on unmount");
        playerInstanceRef.current.destroy().catch(error => console.error("Error destroying Vimeo player (API):", error));
        playerInstanceRef.current = null;
        setPlayer(null); 
      }
    };
  // Dependencias mínimas para ejecutar solo una vez al montar
  }, [videoId, videoHash]); 

  // --- Lógica de Clicks ---
  const handlePlayClick = useCallback(() => {
    console.log("handlePlayClick CALLED!"); 
    const currentPlayer = playerInstanceRef.current; 
    if (currentPlayer) {
      console.log("Player instance FOUND. Hiding overlay and setting options..."); 
      setShowOverlay(false); 
      
      console.log("Setting loop to false..."); 
      currentPlayer.setLoop(false).catch(e => console.warn("Error setting loop false", e));
      
      console.log("Setting volume to 1..."); 
      currentPlayer.setVolume(1).catch(e => console.warn("Error setting volume", e));     
      
      console.log("Setting current time to 0..."); 
      currentPlayer.setCurrentTime(0).then(() => {
        console.log("Current time set to 0, attempting play..."); 
        // Es posible que necesitemos llamar a play aquí incluso después de seekTo
        currentPlayer.play().catch(e => console.error("Error playing after seek:", e));
      }).catch(error => {
        console.error("Error setting current time:", error);
      });
    } else { 
      console.error("Player instance ref NOT available on overlay click!"); 
    }
  }, []); // Sin dependencias porque usa ref

  const handleVideoTogglePlay = useCallback(() => {
    const currentPlayer = playerInstanceRef.current;
    if (currentPlayer && !showOverlay) { 
      currentPlayer.getPaused().then((paused) => {
        if (paused) {
          console.log("Video clicked: Playing");
          currentPlayer.play().catch(error => console.error("Error playing video on click:", error));
        } else {
          console.log("Video clicked: Pausing");
          currentPlayer.pause().catch(error => console.error("Error pausing video on click:", error));
        }
      }).catch(error => console.error("Error getting paused state on click:", error));
    }
  }, [showOverlay]); // Solo depende de showOverlay

  return (
    <div 
      ref={containerRef} // Necesitamos esta ref si la usamos en algún sitio? La quito por ahora.
      style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}
      className="rounded-xl overflow-hidden bg-black cursor-pointer"
      onClick={handleVideoTogglePlay}
    >
      {/* Target Div para el Player */}
      <div 
        ref={playerTargetRef} 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      ></div> 

      {/* Overlay inicial */}
      {showOverlay && ( /* ... Overlay JSX sin cambios ... */
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