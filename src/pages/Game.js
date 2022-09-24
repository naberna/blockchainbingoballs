import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Twitch from '../components/Twitch';
import Board from '../components/Board';
import Banner from '../components/Banner';
import banner_image from '../assets/img/header/mint-banner.png'

const Game = () => {
  return (
    <section className='play-game'>
      <Banner banner={banner_image} countdown={new Date(Date.UTC(2022, 7, 28, 19))} date="Next Game: 28 August, 2022" title="Next Game" addclass="game-banner" />
      <Container className='content'>
        <Row>
          <Col xs={12} md={12} lg={6}>
            <div className='twitch'>
              <Twitch />
            </div>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <div className='game-right'>
              <div className='discord'>
                <widgetbot
                  server="952620950082433054"
                  channel="978532791341953055"
                  className="discord-chat"
                ></widgetbot>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Game;
