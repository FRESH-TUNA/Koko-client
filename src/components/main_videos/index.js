import React from 'react';
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';

function MainVideos() {
  return (
    <Container>
      <Row xs={2} md={3} lg={4}>
        <Col><div className="video">2 of 2</div></Col>
        <Col><div className="video">2 of 2</div></Col>
        <Col><div className="video">2 of 2</div></Col>
      </Row>
    </Container>
  );
}

export default MainVideos;
