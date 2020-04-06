import React from 'react';
import Header from '../../organisms/header'
import Grid from '../../organisms/grid'

import { Layout } from 'antd';

/**
 * def home:
 *   url = 비디오데이터요청url뽑아내기()
 *   비디오데이터들 = 비디오데이터읽어오기(url)
 *   렌더링(비디어데이터들)
 */
export default ({videos}) => {
  return (
    <Layout className="layout">
      <Header/>
      <Grid components={videos}/>
    </Layout>
  )
}
