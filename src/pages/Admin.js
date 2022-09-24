import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Board from '../components/Board';

const Game = () => {
  return (
    <section className='admin'>
      <Container className='content'>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Board />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Game;
