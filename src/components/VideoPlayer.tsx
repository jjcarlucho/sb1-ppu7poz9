import React, { useEffect, useRef } from 'react';
import VimeoPlayer from '@vimeo/player'; // Importar el reproductor

interface VideoPlayerProps {
  videoId: string; 
  videoHash?: string; 
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, videoHash }) => {
  const playerContainerRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    if (playerContainerRef.current) {
      let playerInstance: VimeoPlayer | null = null;
      try {
        const options = {
          id: parseInt(videoId, 10),
          hash: videoHash,
          width: 640, 
          controls: true // Empezamos mostrando controles para ver si carga
        };
        console.log("Intentando inicializar Vimeo Player con:", options); 
        playerInstance = new VimeoPlayer(playerContainerRef.current, options);

        playerInstance.ready().then(() => {
          console.log("Vimeo Player ¡LISTO!");
        }).catch(error => {
          console.error("Error en player.ready():", error);
        });
        playerInstance.on('error', (error) => {
           console.error('Error del Player de Vimeo:', error);
        });
      } catch (error) {
         console.error("Error al crear instancia de Vimeo Player:", error);
      }
      return () => {
        if (playerInstance) {
          console.log("Destruyendo instancia de Vimeo Player");
          playerInstance.destroy().catch(error => console.error("Error al destruir:", error));
        }
      };
    } else {
        console.warn("Referencia del contenedor de Vimeo no encontrada.");
    }
  }, [videoId, videoHash]); 

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-800">
      <div ref={playerContainerRef}></div> 
      <p className="absolute inset-0 flex items-center justify-center text-white opacity-50">Cargando Player...</p> 
    </div>
  );
};

export default VideoPlayer;