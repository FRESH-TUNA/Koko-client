import React from 'react';
import Header from '../../organisms/header'
import { Layout } from 'antd';
import { useEffect, useRef } from 'react';
import videojs from 'video.js'

export default () => {  
  const playerRef = useRef();

  useEffect(() => {
    const player = videojs(playerRef.current, { autoplay: true, muted: true }, () => {
      player.src("https://youtu.be/BDisGwPATu8");
    });

    return () => {
      player.dispose();
    };
  }, []);
  
  return (
    <Layout className="layout">
      <Header/>
      <div data-vjs-player>
        <video ref={playerRef} className="video-js vjs-16-9" playsInline />
      </div>
    </Layout>
  )
}
