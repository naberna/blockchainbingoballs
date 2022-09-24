import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FaDiscord } from "react-icons/fa";

const Leadership = () => {
  return (
    <section className='leadership'>
      <div className='empty-banner'>
        <div className='title'>
          <FaDiscord /> 
          <div className='discord'>Discord</div>
        </div>
        <a href="https://discord.gg/blockchainbingoballs" target="_blank" className="discord">Join Discord</a>
      </div>
      <Container className='content'>
        <Row>
          <Col xs={12} md={12} lg={6}>
          <iframe src="https://unbelievaboat.com/leaderboard/952620950082433054/widget" width="100%" height="500" className='leadership-discord'></iframe>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <div>
              <widgetbot
                server="952620950082433054"
                channel="985994262996996226"
                className="leadership-content"
              ></widgetbot>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Leadership;
