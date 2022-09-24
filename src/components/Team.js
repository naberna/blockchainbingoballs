import React, { useContext } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
const Team = () => {
  return (
    <section className="section team" id="team">
      <div className="main-title">Team</div>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={6}>
            <div className="team-card">
              <div className="crpto-goku">
                <div className="info">
                  <div className="title">CRYPTO GOKU</div>
                  <div className="subtitle black">FOUNDER</div>
                  <div className="description">
                    I am a dedicated, entirely focused person who strives for excellence with everything
                    I am involved with. I have been in the crypto scene for over a year and more
                    importantly the NFT verse since around Oct-21.
                    I noticed a gap in the fluid world of Cronos NFTs which has enabled the Blockchain
                    Bingo Balls (BBB) project to come to life! I want the best for the BBB project team
                    and the ENTIRE Cronos NFT community and I aim to achieve this through mutually
                    beneficial partnerships across the Cronos Chain and also through the art of giving
                    back!
                  </div>
                  <div className="social-links">
                    <a href="https://twitter.com/CryptoGoku9" target="_blank"><FaTwitter /></a>
                    <a href="" target="_blank"><FaInstagram /></a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <div className="team-card luck">
              <div className="luckless">
                <div className="info">
                  <div className="title">0xLuckless</div>
                  <div className="subtitle black">COMMUNITE LEAD</div>
                  <div className="description">
                    I'm an artist and business owner with over 20 years of experience in graphic design, apparel design, marketing and project development. I have been in crypto since early 2014 and recently started working with NFTs in late 2021. 0xLuckless is my artist name for my 8K Resolution Generative Art Project on Cronos, a first in the NFT space. EvergreenKings.com is my shop/brand. I joined Blockchain Bingo Balls (BBB) after CryptoGoku came to me with the idea shortly after my first project mint and was immediately on board with the project and we have formed a great team very quickly.
                    {" "}
                    LET'S F*CKNG CRO!</div>
                  <div className="social-links">
                    <a href="https://twitter.com/0xLuckless" target="_blank"><FaTwitter /></a>
                    <a href="#" target="_blank"><FaInstagram /></a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={4} className="single-small-ball">
            <div className="team-card">
              <div className="chycero">
                <div className="info">
                  <div className="title small">CHYCERO</div>
                  <div className="subtitle black small">COMMUNITY LEAD</div>
                  <div className="social-links">
                    <a href="https://twitter.com/chycero_nft" target="_blank"><FaTwitter /></a>
                    <a href="https://www.instagram.com/pom.nigel/" target="_blank"><FaInstagram /></a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={4} className="single-small-ball">
            <div className="team-card">
              <div className="naberna">
                <div className="info">
                  <div className="title small">WOMAN IN THE PINK SUIT</div>
                  <div className="subtitle black small">WEB DEVELOPER</div>
                  <div className="social-links">
                    <a href="https://twitter.com/TheManInThePink" target="_blank"><FaTwitter /></a>
                    <a href="#" target="_blank"><FaInstagram /></a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={4} className="single-small-ball">
            <div className="team-card">
              <div className="dmk">
                <div className="info">
                  <div className="title small">DMKrypto</div>
                  <div className="subtitle black small">MARKETING MANAGER</div>
                  <div className="social-links">
                    <a href="https://twitter.com/DMKrypto" target="_blank"><FaTwitter /></a>
                    <a href="#" target="_blank"><FaInstagram /></a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={4} className="single-small-ball">
            <div className="team-card">
              <div className="cold2x">
                <div className="info">
                  <div className="title small">ItsCodyEdwards</div>
                  <div className="subtitle black small">COMMUNITY MODERATOR</div>
                  <div className="social-links">
                    <a href="https://twitter.com/ItsCodyEdwards" target="_blank"><FaTwitter /></a>
                    <a href="#" target="_blank"><FaInstagram /></a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={4} className="single-small-ball">
            <div className="team-card">
              <div className="tchkn_12x">
                <div className="info">
                  <div className="title small">ChknFace</div>
                  <div className="subtitle black small">COMMUNITY MODERATOR</div>
                  <div className="social-links">
                    <a href="https://twitter.com/ModernSingledad" target="_blank"><FaTwitter /></a>
                    <a href="#" target="_blank"><FaInstagram /></a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={4} className="single-small-ball">
            <div className="team-card">
              <div className="gundam_ball">
                <div className="info">
                  <div className="title small">Ms Cryptoslayer</div>
                  <div className="subtitle black small">FOUNDER</div>
                  <div className="social-links">
                    <a href="https://twitter.com/ModernSingledad" target="_blank"><FaTwitter /></a>
                    <a href="#" target="_blank"><FaInstagram /></a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section >

  );
};

export default Team;
