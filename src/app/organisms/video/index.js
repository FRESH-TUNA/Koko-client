import React from 'react';
import { useEffect, useRef } from 'react';
import videojs from 'video.js'

export default ({data}) => {
  const playerRef = useRef();

  useEffect(() => {
    const player = videojs(playerRef.current, { autoplay: true, muted: true }, () => {
      if(data) {
        player.src(data.video);
        console.log(data.video);
      }
    });

    return () => {
      player.dispose();
    };
  });
  
  return (
    <div data-vjs-player>
      <video ref={playerRef} className="video-js vjs-16-9" playsInline />
    </div>
  )
}
