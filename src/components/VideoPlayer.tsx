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
  const containerRef = useRef<HTMLDivElement>(null); // Ref para el div donde irá el player
  const playerRef = useRef<HTMLDivElement>(null); // Ref para el div QUE SERÁ el player

  // --- Inicializar el reproductor de Vimeo ---
  useEffect(() => {
    if (playerRef.current) {
      // Opciones para el reproductor
      // background=true a menudo implica muted, loop, no controls, ideal para inicio
      // Si background=true no funciona como esperamos, ajustaremos manualmente
      const options = {
        id: parseInt(videoId, 10), // Asegurarse que el ID es número
        hash: videoHash,           // Añadir hash si existe
        background: true,          // Modo background (autoplay, muted, loop, no controls)
        muted: true,               // Doble seguridad para empezar muteado
        controls: false,           // Ocultar controles
        dnt: true,                 // Do Not Track
        // width: playerRef.current.offsetWidth // Podríamos ajustar tamaño si es necesario
      };

      const vimeoPlayer = new VimeoPlayer(playerRef.current, options);

      vimeoPlayer.ready().then(() => {
         // Asegurarse de que esté muteado al inicio si background no lo hizo
         vimeoPlayer.setVolume(0); 
         // No necesitamos play() si background=true funciona
      }).catch(error => {
        console.error("Error initializing Vimeo player:", error);
      });

      setPlayer(vimeoPlayer);

      // Limpieza al desmontar el componente
      return () => {
        vimeoPlayer.destroy().catch(error => console.error("Error destroying Vimeo player:", error));
        setPlayer(null);
      };
    }
  }, [videoId, videoHash]); // Dependencias: reinicializar si cambian

  // --- Manejar el clic en el overlay ---
  const handlePlayClick = useCallback(() => {
    if (player) {
      setShowOverlay(false); // Ocultar overlay
      player.setLoop(false);     // Quitar loop si estaba (por el modo background)
      player.setVolume(1);     // Poner volumen al máximo (o el nivel deseado)
      player.setCurrentTime(0); // Reiniciar al principio
      player.play().catch(error => console.error("Error playing video:", error));
    }
  }, [player]);

  // --- Manejar clic en el video para pausar/reanudar ---
  const handleVideoTogglePlay = useCallback(() => {
    if (player && !showOverlay) { // Solo funciona si el overlay no está visible
      player.getPaused().then((paused) => {
        if (paused) {
          player.play().catch(error => console.error("Error playing video:", error));
        } else {
          player.pause().catch(error => console.error("Error pausing video:", error));
        }
      }).catch(error => console.error("Error getting paused state:", error));
    }
  }, [player, showOverlay]);

  return (
    // Contenedor principal, añadimos onClick para pausar/reanudar
    <div 
      ref={containerRef} 
      className="relative w-full aspect-video rounded-xl overflow-hidden bg-black cursor-pointer"
      onClick={handleVideoTogglePlay} // <<--- CLICK EN VIDEO PARA PAUSAR/REANUDAR
    >
      {/* Div donde se montará el player de Vimeo */}
      <div ref={playerRef} className="w-full h-full"></div>

      {/* Overlay personalizado (se muestra si showOverlay es true) */}
      {showOverlay && (
        <div
          className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-10"
          onClick={(e) => { 
            e.stopPropagation(); // Evita que el click llegue al contenedor de atrás
            handlePlayClick(); 
          }} // <<--- CLICK EN OVERLAY PARA EMPEZAR
        >
          <div className="flex flex-col items-center justify-center animate-pulse">
            <div className="bg-white/90 rounded-full p-6 mb-4 transform transition-all hover:scale-110">
              <Play className="h-12 w-12 text-blue-600 fill-current" />
            </div>
            <p className="text-white text-xl font-semibold">Click to Watch The Video</p>
            {/* Puedes quitar esta línea si ya no aplica con Vimeo */}
            {/* <p className="text-gray-300 text-sm mt-2">Cannot be paused or skipped once started</p> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;