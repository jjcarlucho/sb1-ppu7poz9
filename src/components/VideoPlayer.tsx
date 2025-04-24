import React, { useEffect, useRef } from 'react';
import VimeoPlayer from '@vimeo/player'; // Importar el reproductor

interface VideoPlayerProps {
  videoId: string; // El ID numérico de Vimeo: 1078146633
  videoHash?: string; // El hash opcional: 1a73fb42a0
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, videoHash }) => {
  const playerContainerRef = useRef<HTMLDivElement>(null); // Ref para el div

  useEffect(() => {
    // Asegurarse de que el div exista antes de crear el player
    if (playerContainerRef.current) {
      let playerInstance: VimeoPlayer | null = null;
      
      try {
        // Opciones mínimas: ID y hash
        const options = {
          id: parseInt(videoId, 10),
          hash: videoHash,
          width: 640, // Puedes ajustar esto o quitarlo para que sea responsivo
          controls: true // Empezamos mostrando controles para ver si carga
        };
        
        console.log("Initializing Vimeo Player with options:", options); 
        playerInstance = new VimeoPlayer(playerContainerRef.current, options);

        playerInstance.ready().then(() => {
          console.log("Vimeo Player is ready!");
        }).catch(error => {
          console.error("Vimeo Player ready error:", error);
        });

        playerInstance.on('error', (error) => {
           console.error('Vimeo Player Error:', error);
        });

      } catch (error) {
         console.error("Error creating Vimeo player instance:", error);
      }

      // Limpieza
      return () => {
        if (playerInstance) {
          console.log("Destroying Vimeo Player instance");
          playerInstance.destroy().catch(error => console.error("Error destroying Vimeo player:", error));
        }
      };
    } else {
        console.warn("Vimeo player container ref not found yet.");
    }
  }, [videoId, videoHash]); // Dependencias

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-800">
      {/* Este div es donde la API de Vimeo pondrá el iframe */}
      <div ref={playerContainerRef}></div> 
      {/* Mensaje temporal por si no carga */}
      <p className="absolute inset-0 flex items-center justify-center text-white">Loading Vimeo Player...</p> 
    </div>
  );
};

export default VideoPlayer;