import React from 'react';
import Header from '../../organisms/header';
import Player from '../../organisms/player';
import { Layout } from 'antd';

export default ({url}) => {    
  return (
    <Layout className="layout">
      <Header/>
      <Player url={url}/>
    </Layout>
  )
}
