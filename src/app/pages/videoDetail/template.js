import React from 'react';
import Header from '../../organisms/header';
import Video from '../../organisms/video';
import { Layout } from 'antd';

export default ({data}) => {    
  return (
    <Layout className="layout">
      <Header/>
      <Video data={data}/>
    </Layout>
  )
}
