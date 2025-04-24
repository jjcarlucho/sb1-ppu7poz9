import React from 'react';

// Nota: Ya no necesitamos las props videoId/videoHash aquí, 
// pero las dejamos por si Hero.tsx las sigue pasando, para no causar error allí.
// El ID real está dentro del código iframe que pegaste.
interface VideoPlayerProps {
  videoId: string;
  videoHash?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, videoHash }) => {
  // Directamente devolvemos la estructura con el iframe de Vimeo
  // Usamos Tailwind para el aspect ratio en lugar del div con padding style
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
      {/* El código iframe que pegaste de Vimeo, adaptado a JSX */}
      <iframe 
        src="https://player.vimeo.com/video/1078146633?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
        frameBorder="0" // 'frameborder' cambiado a 'frameBorder'
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
        allowFullScreen // 'allowfullscreen' cambiado a 'allowFullScreen'
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} // 'style' string convertido a objeto
        title="VSL JONATHAN(1) (1)" // Título del iframe
      ></iframe>
      {/* Nota: El <script src="https://player.vimeo.com/api/player.js"></script> que venía
          con el código de Vimeo no es necesario aquí porque no estamos usando la API avanzada */}
    </div>
  );
};

export default VideoPlayer;