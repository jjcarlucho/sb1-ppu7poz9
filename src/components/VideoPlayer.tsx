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

  // Construct the thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`; 
  // You can also try hqdefault.jpg or sddefault.jpg if maxresdefault doesn't load

  // Construct the iframe URL with parameters
  // controls=0: Hide player controls
  // autoplay=1: Start playing immediately after click
  // rel=0: Don't show related videos at the end
  // modestbranding=1: Reduce YouTube logo
  // iv_load_policy=3: Hide video annotations
  // fs=0: Disable fullscreen button
  // disablekb=1: Disable keyboard controls
  const iframeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1`;

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
      {/* Thumbnail Image (visible only when not playing) */}
      {!isPlaying && (
        <img 
          src={thumbnailUrl} 
          alt="Video Thumbnail" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
          // Optional: Add error handling for thumbnail loading if needed
          onError={(e) => { 
            // Fallback to a lower quality thumbnail if maxresdefault fails
            const target = e.target as HTMLImageElement;
            if (!target.src.includes('hqdefault.jpg')) {
              target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            } else if (!target.src.includes('sddefault.jpg')) {
               target.src = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
            }
            // You could add a final fallback like hiding the image or showing a generic placeholder
          }}
        />
      )}

      {/* Overlay (visible only when not playing) */}
      {!isPlaying && (
        <div
          className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center cursor-pointer z-10"
          onClick={handlePlay}
        >
          {/* Animated Play Button and Text Container */}
          <div className="flex flex-col items-center justify-center animate-pulse"> 
            <div className="bg-white/90 rounded-full p-6 mb-4 transform transition-all hover:scale-110">
              <Play className="h-12 w-12 text-blue-600 fill-current" /> {/* Added fill-current */}
            </div>
            <p className="text-white text-xl font-semibold">Click to Watch The Video</p>
            <p className="text-gray-300 text-sm mt-2">Cannot be paused or skipped once started</p>
          </div>
        </div>
      )}

      {/* YouTube Iframe (visible only when playing) */}
      {isPlaying && (
        <iframe
          src={iframeSrc}
          title="YouTube video player" // Added title for accessibility
          frameBorder="0" // Use frameBorder instead of frameborder
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={false} // Explicitly set based on fs=0
          className="absolute inset-0 w-full h-full z-20" // Ensure iframe is on top when playing
        />
      )}
    </div>
  );
};

export default VideoPlayer;