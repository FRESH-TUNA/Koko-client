import React from 'react';
import Header from '../../organisms/header'
import Grid from '../../organisms/grid'

import Video from '../../molecules/video'

import { useEffect, useState, useRef } from 'react';
import { Layout } from 'antd';

import { default_root_url } from '../../../'

/**
 * def home:
 *   url = 비디오데이터요청url뽑아내기()
 *   비디오데이터들 = 비디오데이터읽어오기(url)
 *   렌더링(비디어데이터들)
 */
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
  }, []);

  return (
    <Layout className="layout">
      <Header/>
      <Grid components={videos}/>
    </Layout>
  )
}
