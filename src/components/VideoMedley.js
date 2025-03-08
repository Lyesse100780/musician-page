import React from 'react';
import ReactPlayer from 'react-player';
import './VideoMedley.css';

const VideoMedley = () => {
  return (
    <div className="video-medley">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"  // Remplace par l'URL de ta vidéo medley
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};

export default VideoMedley;
