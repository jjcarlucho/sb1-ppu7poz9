import React from 'react';

// Mantenemos las props por compatibilidad con Hero.tsx, pero no las usamos aquí.
interface VideoPlayerProps {
  videoId: string; 
  videoHash?: string; 
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, videoHash }) => {
  
  // Usamos la estructura DIV + IFRAME que proporcionó Vimeo
  // Incluyendo el HASH (?h=...) en la URL del iframe
  // Y adaptando los atributos para JSX

  return (
    // El div exterior maneja el aspect ratio con padding-top
    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }} className="rounded-xl overflow-hidden"> 
      <iframe 
        // URL corregida incluyendo el hash (h=1a73fb42a0) y parámetros originales
        src="https://player.vimeo.com/video/1078146633?h=1a73fb42a0&badge=0&autopause=0&player_id=0&app_id=58479" 
        frameBorder="0" // Atributo adaptado a JSX
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
        allowFullScreen // Atributo adaptado a JSX
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} // Style como objeto
        title="VSL JONATHAN(1) (1)" // Título importante para accesibilidad
      ></iframe>
      {/* Quitamos el <script> que venía con el código de Vimeo */}
    </div>
  );
};

export default VideoPlayer;