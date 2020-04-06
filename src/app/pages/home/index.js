import React from 'react';
import Template from './template'

import Video from '../../molecules/video'

import { useEffect, useState } from 'react';
import { default_root_url } from '../../../'

export default () => {
  const [videos, setVideos] = useState([]);

  const get_root_api = async () => {
    const response = await fetch(default_root_url, {
      method: 'GET', 
      mode: 'cors', 
    });
    return await response.json();
  }

  const get_video_list = async () => { 
    const root_api = await get_root_api();
    const response =  await fetch(root_api.videos, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
    });
    return await response.json();
  }

  useEffect(() => {
    get_video_list()
      .then(video_list => {
        video_list.forEach((element, index) => {
          video_list[index] = <Video data={element}/>
        });
        setVideos(video_list);
      })
  });

  return (
    <Template videos={videos}/>
  )
}
