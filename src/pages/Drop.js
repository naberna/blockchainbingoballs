import React from "react";
import Banner from "../components/Banner";
import banner_image from "../assets/img/header/footer_banner2.png";
import { Container, Row, Col } from "react-bootstrap";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import partner1 from "../assets/img/partners/fox.jpg";
import partner2 from "../assets/img/partners/fighters.jpeg";

const drop = () => {
  return (
    <>
      <Banner
        banner={banner_image}
        countdown={new Date(Date.UTC(2022, 7, 25, 19))}
        date="25 August 2022 19:00 UTC"
        title="Cronos Fighters Bingo Cards"
        text="LIVE"
      />
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <div className="drop-information">
              <Row className="drop-card">
                <Col xs={12} md={12} lg={9}>
                  <div className="drop-sub-information">
                    <div className="drop-title">
                      Cronos Fighters Bingo Cards<div className="drop-date">(7 September 2022 19:00 UTC)</div>
                    </div>
                    <div className="drop-date">
                      Drop release at 25 August 2022 21:00 UTC
                    </div>
                    <div className="drop-socials">
                      <a
                        href="https://discord.com/invite/Bb39m7BBBR"
                        target="_blank"
                        className="discord"
                      >
                        <FaDiscord />
                      </a>
                      <a href="https://twitter.com/FightersNFT" target="_blank">
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={12} lg={3} className="partner-image-main">
                  <div className="partner-image">
                    <img src={partner2} alt="Cronos Fighters Bingo Cards" />
                  </div>
                </Col>
                <Col xs={12} md={12} lg={12}>
                  <div className="drop-main-information">
                    <div className="subtitle">
                      CroBINGO presents an Exclusive CroBINGO event for Cronos
                      Fighters, ahead of their 3500 x V2 3D Cronos Fighters
                      release in September
                    </div>
                    <ul>
                      <li>
                        Bingo players will have the opportunity to mint from the
                        limited collection of 500 x Cronos Fighters Themed Bingo
                        Card NFTs
                      </li>
                      <li>
                        Bingo Cards will be 25CRO for WL or 50CRO standard
                      </li>
                      <li>
                        The Event will consist of 3 x rounds of bingo where
                        prizes from NFT & $CRO WILL be WON
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={12} lg={12}>
            <div className="drop-information">
              <Row className="drop-card">
                <Col xs={12} md={12} lg={3} className="partner-image-main">
                  <div className="partner-image">
                    <img src={partner1} alt="Cronos Fox Elite" />
                  </div>
                </Col>
                <Col xs={12} md={12} lg={9}>
                  <div className="drop-sub-information right">
                    <div className="drop-title right">
                      Cronos Fox Elite Game
                    </div>
                    <div className="drop-date right">
                      Drop release at 19 June 2022 21:00 UTC
                    </div>
                    <div className="drop-socials right">
                      <a
                        href="https://discord.com/invite/GEVVeHfSMn"
                        target="_blank"
                        className="discord"
                      >
                        <FaDiscord />
                      </a>
                      <a
                        href="https://twitter.com/CronosFoxElite"
                        target="_blank"
                      >
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={12} lg={12}>
                  <div className="drop-main-information">
                    <div className="subtitle">
                      CroBINGO presents an Exclusive CroBINGO event for Cronos
                      Fox Elite
                    </div>
                    <ul>
                      <li>
                        Players will have the opportunity to drop from the LTD
                        collection of 1000 CFE Themed Bingo Card NFTs
                      </li>
                      <li>
                        Droping for the Bingo Cards will be 25CRO for WL or
                        50CRO standard
                      </li>
                      <li>
                        The Event will consist of 5 games bingo where prizes
                        WILL be WON
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default drop;
