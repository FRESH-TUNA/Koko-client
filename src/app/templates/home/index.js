import React from 'react';
import Header from '../../organisms/header'
import Grid from '../../organisms/grid'
import { Layout } from 'antd';

export default () => {
  return (
    <Layout className="layout">
      <Header/>
      <Grid/>
    </Layout>
  )
}
