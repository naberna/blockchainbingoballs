import React from "react";
import { FaDiscord, FaMediumM, FaTwitter } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <div className="copygight_text">
        <Container fluid>
          <Row className="align-items-center">
            <Col xs={12} md={8} lg={8}>
              <div className="copyright_text">
                <p>&copy; 2022 Blockchain Bingo Balls | All Right Reserved</p>
              </div>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <div className="social-links">
              <a href="https://medium.com/@BlockchainBingoBalls" target="_blank" className="discord">
                  <FaMediumM />
                </a>
                <a href="https://discord.gg/blockchainbingoballs" target="_blank" className="discord">
                  <FaDiscord />
                </a>
                <a href="https://twitter.com/BlockBingoBall" target="_blank">
                  <FaTwitter />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
