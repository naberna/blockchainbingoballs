import React from "react";
import bingoname from "../assets/img/header/name.png";
import cro from "../assets/img/extra-balls/cro.png";
import black from "../assets/img/balls/black.png";
import cg from "../assets/img/balls/cg.png";
import colorful from "../assets/img/balls/colorful.png";
import frozen from "../assets/img/balls/frozen.png";
import love from "../assets/img/balls/love.png";
import batball from "../assets/img/extra-balls/batball.png";
import naberna from "../assets/img/balls/naberna.png";
import white from "../assets/img/balls/white.png";
import { Container, Row, Col } from "react-bootstrap";
import {
  Link
} from "react-router-dom";
export default function Home() {
  return (
    <div className="home">
      <Container fluid>
        <Row>
          <Col xs={12} md={12} lg={6} className='left-container'>
            <div className="content">
              <img src={bingoname} alt="bingoname image" className="bingoname" />
            </div>
          </Col>
          <Col xs={12} md={12} lg={6} className='right-container'>

            <div className="image-container">
              <div className="image">
                <img src={white} alt="White Ball" className="white-ball" />
                <img src={cro} alt="Cro Ball" className="cro-ball" />
                <img src={black} alt="Black Ball" className="black-ball" />
                <img src={frozen} alt="Frozen Ball" className="frozen-ball" />
                <img src={colorful} alt="Colorful Ball" className="colorful-ball" />
                <img src={love} alt="Love Ball" className="love-ball" />
                <img src={naberna} alt="Naberna Ball" className="naberna-ball" />
                <img src={cg} alt="CG Ball" className="cg-ball" />
                <img src={batball} alt="Bat Ball" className="bat-ball" />
              </div>
              <div className="ellipse-container">
                <div className="ellipse pink"></div>
                <div className="ellipse orange"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
