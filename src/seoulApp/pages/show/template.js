import { getThumbnails } from 'video-metadata-thumbnails';
import React, { useState } from 'react';
import Header from '../../organisms/header';
import Player from '../../organisms/player';
import { Layout } from 'antd';

export default ({url}) => {    
  const [video, setVideo] = useState();
  const [thumbnail, setThumbnail] = useState();
  
  const post_video_request = async (data) => {
    const response = await fetch("http://localhost:8000/videos", {
      method: 'POST', 
      mode: 'cors', 
      body: data
    });
    return await response.json();
  }

  const post_video = async(event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append('video', video);
    formData.append('thumbnail', thumbnail, video.name + "_thumbnail.jpeg");
    await post_video_request(formData);
  }

  const get_thumbnail = async(video) => {
    const thumbnails = await getThumbnails(
      video, { quality: 0.6, start: 0, end: 10 }
    );
    return thumbnails;
  }

  const setVideoThumbnail = (e) => {
    get_thumbnail(e.target.files[0])
      .then(newThumbnail => setThumbnail(newThumbnail[10].blob))
      .then(setVideo(e.target.files[0]))
  }
  
  return (
    <Layout className="layout">
      <Header/>
      <form onSubmit={post_video}>
        <input type="file" onChange={setVideoThumbnail}/>
        <button type="submit">hoho</button>
      </form>
      <Player url={url}/>
    </Layout>
  )
}
