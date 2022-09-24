import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "../redux/blockchain/blockchainActions";
import { fighterConnect } from "../redux/blockchainFighters/blockchainActions";

const MyNfts = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const blockchainFighters = useSelector((state) => state.blockchainFighters);
  const wallet = useSelector((state) => state.wallet);

  const getBlockchain = () => {
    if (wallet.account != null) {
      dispatch(connect(wallet));
      dispatch(fighterConnect(wallet));
    }
  };

  useEffect(() => {
    getBlockchain();
  }, [wallet.account]);

  //   const url =
  return (
    <section className="my-nfts">
      <div className="empty-banner">
        <div className="title">
          {/* <FaDiscord /> */}
          <div className="discord">My NFTs</div>
        </div>
        <Link to="/crobingo">Mint Now</Link>
      </div>
      {wallet.account !== null ? (
        <Container>
          <Row>
            {blockchainFighters.tokenMetadata == null &&
            blockchain.tokenMetadata == null ? (
              <Container className="no-nft">
                <Row>
                  <div className="warning">
                    You don't have any Nfts to display
                  </div>
                </Row>
              </Container>
            ) : (
              <>
                {/* {blockchainFighters.tokenMetadata.name} */}
                {blockchainFighters.tokenMetadata ? (
                  <>
                    {!blockchainFighters.loading ? (
                      <>
                        {blockchainFighters.tokenMetadataArr.map(
                          (nft, index) => (
                            <Col xs={12} md={3} lg={4} key={index}>
                              <div className="nft-card">
                                <div className="nft-title">{nft.name}</div>
                                <img
                                  src={`https://ipfs.io/ipfs/${
                                    nft.image.split("ipfs://")[1]
                                  }`}
                                  alt={nft.name}
                                  className="nft-image"
                                />
                              </div>
                            </Col>
                          )
                        )}
                      </>
                    ) : (
                      <>
                        <Container className="no-nft">
                          <Row>
                            <div className="warning">Loading...</div>
                          </Row>
                        </Container>
                      </>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </>
            )}
          </Row>
          <Row>
            {blockchain.tokenMetadata ? (
              <>
                {blockchain.tokenMetadataArr.map((nft, idx) => (
                  <Col xs={12} md={3} lg={4} key={idx}>
                    <div className="nft-card">
                      <div className="nft-title">{nft.name}</div>
                      <img
                        src={`https://ipfs.io/ipfs/${
                          nft.image.split("ipfs://")[1]
                        }`}
                        alt={nft.name}
                        className="nft-image"
                      />
                    </div>
                  </Col>
                ))}
              </>
            ) : (
              <></>
            )}
          </Row>
        </Container>
      ) : (
        <Container className="no-nft">
          <Row>
            <div className="warning">Please Connect Your Wallet</div>
          </Row>
        </Container>
      )}
    </section>
  );
};

export default MyNfts;
