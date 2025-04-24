import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const thumbnailUrl = `https://www.youtube.com/embed/I__Dx73EaX0{videoId}/maxresdefault.jpg`; 
  const iframeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1`;

  return (
    // Container needs relative positioning and overflow hidden
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
      
      {/* Thumbnail Image */}
      {!isPlaying && (
        <img 
          src={thumbnailUrl} 
          alt="Video Thumbnail" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
          onError={(e) => { 
            const target = e.target as HTMLImageElement;
            if (!target.src.includes('hqdefault.jpg')) {
              target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            } else if (!target.src.includes('sddefault.jpg')) {
               target.src = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
            }
          }}
        />
      )}

      {/* Overlay */}
      {!isPlaying && (
        <div
          className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center cursor-pointer z-10"
          onClick={handlePlay}
        >
          <div className="flex flex-col items-center justify-center animate-pulse"> 
            <div className="bg-white/90 rounded-full p-6 mb-4 transform transition-all hover:scale-110">
              <Play className="h-12 w-12 text-blue-600 fill-current" />
            </div>
            <p className="text-white text-xl font-semibold">Click to Watch The Video</p>
            <p className="text-gray-300 text-sm mt-2">Cannot be paused or skipped once started</p>
          </div>
        </div>
      )}

      {/* YouTube Iframe - Now with CSS Hacks */}
      {/* We make the iframe taller and shift it up to hide the top bar */}
      {/* We also might need pointer-events-none *if* controls=0 isn't enough, but let's try without first */}
      {isPlaying && (
        <iframe
          src={iframeSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={false}
          // ===== CSS HACK START =====
          // Position it absolutely within the container
          // Make height significantly larger (e.g., add 120px)
          // Shift it up by a negative margin (e.g., -70px - adjust as needed!)
          className="absolute w-full h-[calc(100%+120px)] -top-[70px] left-0 z-20" 
          // ===== CSS HACK END =====
        />
      )}
    </div>
  );
};

export default VideoPlayer;