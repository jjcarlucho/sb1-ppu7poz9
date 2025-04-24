import React from 'react';

// Definimos la interfaz para las props que recibe el componente
interface VideoPlayerProps {
  videoId: string; 
  videoHash?: string; // El hash es opcional pero recomendado si el video es privado/no listado
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, videoHash }) => {
  
  // Construimos la URL del iframe básico de Vimeo dinámicamente usando las props
  // Añadimos el hash (h=...) si se proporciona
  // Añadimos parámetros básicos para una apariencia limpia (muchos se controlan mejor desde Vimeo.com)
  const vimeoSrc = `https://player.vimeo.com/video/${videoId}${videoHash ? `?h=${videoHash}` : ''}&badge=0&autopause=0&player_id=0&app_id=58479&controls=0&dnt=1`; 

  return (
    // Contenedor principal que usa padding-top para mantener el aspect ratio 16:9
    // Es importante que tenga position: relative para que el iframe absoluto se posicione correctamente
    <div 
      style={{ position: 'relative', width: '100%', paddingTop: '56.25%' /* 16:9 */ }}
      className="rounded-xl overflow-hidden bg-black" // Clases para estilo y ocultar desbordamiento
    > 
      <iframe 
        src={vimeoSrc} 
        frameBorder="0" // Atributo adaptado a JSX (camelCase)
        // Permisos del iframe
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
        allowFullScreen // Atributo adaptado a JSX (camelCase)
        // Estilos para asegurar que el iframe llene completamente el div contenedor
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
        title="VSL Video Player" // Título descriptivo para accesibilidad
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
