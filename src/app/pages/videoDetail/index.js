import React from 'react';
import Template from './template';
import { useEffect, useState, useRef } from 'react';

export default (props) => {    
  const {url} = props.history.location.state;
  const [videoData, setVideoData] = useState();

  const get_video_data = async (url) => {
    const response = await fetch(url, {
      method: 'GET', 
      mode: 'cors', 
    });
    return await response.json();
  }

  useEffect(() => {
    get_video_data(url)
      .then(videoData => {
        setVideoData(videoData);
      }) ;
  }, []);

  return (
    <Template data={videoData}/>
  )
}
