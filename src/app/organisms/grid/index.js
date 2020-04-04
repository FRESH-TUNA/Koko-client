import React from 'react';
import {
  Row, Col, Layout
} from 'antd';
import Video from '../../molecules/video'
import './.scss'
const { Content } = Layout;

export default ({xs=24, sm=12, md=8, components=[
  <Video/>,
  <Video/>,
  <Video/>
]}) => {
  
  // component wrap into antd
  components.forEach((value, index) => {
    components[index] = <Col xs={xs} sm={sm} md={md}>{value}</Col>
  });

  return (
    <Content>
      <Row className="grid-row">
        {components}
      </Row>
    </Content>
  );
}
