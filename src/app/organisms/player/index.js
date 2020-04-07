import React from 'react';
import { useEffect, useState, useRef } from 'react';
import videojs from 'video.js'

export default ({url}) => {
  const playerRef = useRef(null);
  const videoJSOptions = {
    autoplay: "muted",
    controls: true,
    userActions: { hotkeys: true },
    playbackRates: [0.5, 1, 1.5, 2]
  };

  const get_video_data = async (url) => {
    const response = await fetch(url, {
      method: 'GET', 
      mode: 'cors', 
    });
    return await response.json();
  }

  useEffect(() => {
    if(playerRef) {
      get_video_data(url)
      .then(videoData => {
        const player = videojs(playerRef.current, videoJSOptions, () => {
          player.src(videoData.video);
        })
      })
    }

    return () => {};
  }, []);
  
  return (
    <div data-vjs-player>
      <video ref={playerRef} className="video-js vjs-16-9" playsInline />
    </div>
  )
}
