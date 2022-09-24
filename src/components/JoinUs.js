import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import discord from "../assets/img/extra-balls/discord.png";
import {
  Link
} from "react-router-dom";
export default function JoinUs() {
  return (
    <section className="section joinus">
      <div className="main-title">Join Us</div>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={7} className='left'>
            <div className="content">
              {/* <p className="sub-title">Play Game</p>
          <h1 className="title">An NFT like no other</h1>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live.
          </p> */}
              <p className="sub-title">Join our community to play various games!</p>
              <iframe className="discord-frame" src="https://discord.com/widget?id=952620950082433054&theme=dark" width="400px" height="300" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
              <Link to="/leadership-board" className="link">Leadership Board</Link>
            </div>
          </Col>
          <Col xs={12} md={12} lg={5}>
            <div className="image-container">
              <div className="image">
                <img src={discord} alt="discord image" />
              </div>
              <div className="ellipse-container">
                <div className="ellipse blue"></div>
                <div className="ellipse purple"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section >
  );
}
