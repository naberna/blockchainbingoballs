import React from "react";
import faq from "../assets/img/extra-balls/faq.png";
import Faqs from "react-faq-component";
import { Container, Row, Col } from "react-bootstrap";
export default function Faq() {
  const data = {
    rows: [
      {
        title: "What is Blockchain Bingo Balls (BBB)?",
        content: `BBB is an NFT project on the Cronos Chain which aims to provide its community with a fun time playing bingo!`,
      },
      {
        title: "Is it just playing Bingo?",
        content:
          "NO! Playing each round of bingo gives you the chance to win prizes in the shape of NFT's, CRO and more as the project progresses!",
      },
      {
        title: "How do I win?",
        content: `Each minter can win by playing the bingo games, each bingo game will have its own set of prizes, some of which immediately claimable upon minting the NFTs!`,
      },
      {
        title: "What happens if I don't win?",
        content: `Don't worry, we got you... At the end of each bingo cards lifespan BBB will offer to buy them back and burn them before the next round of minting and games begin!`,
      },
      {
        title: "What else is planned for BBB?",
        content: `The team has a lot planned, not everything will be released before or on the first drop! Stay tuned and active for updates!`,
      },
      {
        title: "How will the BINGO games take place?",
        content: `All bingo games will be played via a live video stream! With different types of bingo machine used!`,
      },
      {
        title: "How will I claim my prizes?",
        content: `On the initial launch there will be a dedicated channel were a dedicated member of the team will verify winners and process prize payments. This will start up on completion of the first game!`,
      },
      {
        title: "How do I mint the BBB NFTs and how many will there be?",
        content: `The NFTs will be dropping/minting on EbisusBay, stay tuned for an official minting date and more information!`,
      },
    ],
  };

  const styles = {
    bgColor: "transparent",
    titleTextColor: "#3b566e",
    rowTitleColor: "var(--pink)",
    rowContentColor: "#e7e3d7",
    arrowColor: "#6bbcff",
  };

  const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true,
  };
  return (
    <section className="section faq">
      <div className="main-title">FAQs</div>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={5}>
            <div className="image-container">
              <div className="image">
                <img src={faq} alt="faq image" />
              </div>
              <div className="ellipse-container">
                <div className="ellipse purple"></div>
                <div className="ellipse pink"></div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={7}>
            <div className="content">
              <Faqs data={data} styles={styles} config={config} />
            </div></Col>
        </Row>
      </Container>
    </section>
  );
}
