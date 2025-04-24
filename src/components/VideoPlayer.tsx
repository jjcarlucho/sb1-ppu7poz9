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
  // Ref para el div que tendrá el padding y contendrá el target del player
  const containerRef = useRef<HTMLDivElement>(null); 
  // Ref para el div *interno* donde se montará el player
  const playerTargetRef = useRef<HTMLDivElement>(null); 

  // Inicializar
  useEffect(() => {
    // Necesitamos el div interno (target) para inicializar el player
    if (playerTargetRef.current) {
      const options = {
        id: parseInt(videoId, 10), 
        hash: videoHash,          
        autoplay: true, 
        muted: true,    
        loop: true,     
        controls: false,
        dnt: true,                
      };
      let vimeoPlayer: VimeoPlayer | null = null;
      try {
        // Inicializamos el player en el div interno
        vimeoPlayer = new VimeoPlayer(playerTargetRef.current, options);
        setPlayer(vimeoPlayer); 

        vimeoPlayer.ready().then(() => {
          console.log("Vimeo Player (API) ready!");
          // Intentar forzar tamaño del iframe inyectado para que llene el target div
          const iframe = vimeoPlayer?.element;
          if (iframe) {
             // El iframe debe llenar el playerTargetRef que ahora es absoluto
            iframe.style.width = '100%';
            iframe.style.height = '100%';
          }
          vimeoPlayer?.setVolume(0); 
          vimeoPlayer?.play().catch(e => console.warn("Autoplay blocked?", e));
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
      return () => { /* ... limpieza ... */ }; // Asegúrate que la limpieza esté bien
    }
  }, [videoId, videoHash]); 

  // --- Lógica de Clicks (necesitan estar definidas aquí dentro) ---
   const handlePlayClick = useCallback(() => { /* ... código ... */ }, [player]);
   const handleVideoTogglePlay = useCallback(() => { /* ... código ... */ }, [player, showOverlay]);
  // --- Asegúrate de incluir el código completo de estas funciones ---

  return (
    // Contenedor Principal: Usa padding-top para el aspect ratio 16:9
    <div 
      ref={containerRef}
      style={{ position: 'relative', width: '100%', paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}
      className="rounded-xl overflow-hidden bg-black cursor-pointer"
      onClick={handleVideoTogglePlay}
    >
      {/* Target Div para el Player: Absoluto para llenar el contenedor con padding */}
      <div 
        ref={playerTargetRef} 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      ></div> 

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


// --- Pegar aquí de nuevo las funciones handlePlayClick y handleVideoTogglePlay ---
// Ejemplo:
/*
  const handlePlayClick = useCallback(() => { ... }, [player]);
  const handleVideoTogglePlay = useCallback(() => { ... }, [player, showOverlay]);
*/
// ------------------------------------------------------------------------------------

export default VideoPlayer;