import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import NFTCard from "./NFTCard"

const NFTContainer = ({ nfts }) => {
  return (
    <Container className='nft-container'>
      <Row>
        {
          nfts.map((nft, index) => {
            <Col xs={12} md={12} lg={4}>
              <NFTCard nft={nft} key={index} />
            </Col>
          })
        }
      </Row>
    </Container>
  )
}

export default NFTContainer