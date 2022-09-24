import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const OldGames = () => {
  //   const url =
  return (
    <section className="old-games">
      <div className='empty-banner'>
        <div className='title'>
          <FaDiscord />
          <div className='discord'>Discord</div>
        </div>
        <a href="https://discord.gg/blockchainbingoballs" target="_blank" className="discord">Join Discord</a>
      </div>
      {blockchain.account !== null ? (
        <div>
          <Container>
            <Row>
              <Col xs={12} md={12} lg={6}>
                <div className="old-game">
                  <div className="sus-title">CROBINGO - 7th August 2022</div>
                  <div className="game">
                    1st GAME for #1 line (NO diagonals)
                  </div>
                  <div className="game-numbers"></div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <div className="warning">Please Connect Your Wallet</div>
      )}
    </section>
  );
};

export default OldGames;
