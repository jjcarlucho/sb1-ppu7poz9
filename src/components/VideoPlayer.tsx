import React, { useState, useRef } from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (overlayRef.current) {
      overlayRef.current.style.display = 'none';
    }
  };

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden">
      {!isPlaying && (
        <div 
          ref={overlayRef}
          className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center cursor-pointer z-20"
          onClick={handlePlay}
        >
          <div className="bg-white/90 rounded-full p-6 mb-4 transform transition-all hover:scale-110">
            <Play className="h-12 w-12 text-blue-600" />
          </div>
          <p className="text-white text-xl font-semibold">Click to Watch The Video</p>
          <p className="text-gray-300 text-sm mt-2">Cannot be paused or skipped once started</p>
        </div>
      )}
      
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      ) : (
        <div className="w-full h-full bg-black" />
      )}
    </div>
  );
};

export default VideoPlayer;