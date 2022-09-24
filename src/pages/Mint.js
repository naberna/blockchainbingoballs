import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import banner_image from "../assets/img/header/footer_banner2.png";
import { Container, Row, Col } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import card from "../assets/img/cards/cards.gif";
import card2 from "../assets/img/cards/cronosfighterscards.gif";
import { connect } from "../redux/blockchain/blockchainActions";
import { fighterConnect } from "../redux/blockchainFighters/blockchainActions";
import { FaPlus, FaMinus } from "react-icons/fa";

function Mint() {
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet);
  const blockchain = useSelector((state) => state.blockchain);
  const blockchainFighters = useSelector((state) => state.blockchainFighters);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);

  const [claimingNftFighter, setClaimingNftFighter] = useState(false);
  const [feedbackFighter, setFeedbackFighter] = useState(
    `Click buy to mint your NFT.`
  );
  const [mintAmountFighter, setMintAmountFighter] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    WHI_COST: 0,
    DISPLAY_COST: 0,
    WHITELIST_COST: 0,
    GAS_LIMIT: 0,
  });

  const [FIGHTER_CONFIG, SET_FIGHTER_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    WHI_COST: 0,
    DISPLAY_COST: 0,
    WHITELIST_COST: 0,
    GAS_LIMIT: 0,
  });

  const claimNFTs = async () => {
    var cost;
    if (blockchain.isWhiteList) {
      cost = CONFIG.WHI_COST;
    } else {
      cost = CONFIG.WEI_COST;
    }
    let gasLimit = CONFIG.GAS_LIMIT;
    // setMintAmount(Number(document.querySelector("[name=amount]").value));
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: wallet.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(`WOW, the ${CONFIG.NFT_NAME} is yours!`);
        setClaimingNft(false);
      });
  };

  const claimFighterNFTs = async () => {
    var cost;
    if (blockchainFighters.isWhiteList) {
      cost = CONFIG.WHI_COST;
    } else {
      cost = CONFIG.WEI_COST;
    }
    let gasLimit = FIGHTER_CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmountFighter);
    let totalGasLimit = String(gasLimit * mintAmountFighter);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedbackFighter(`Minting your ${FIGHTER_CONFIG.NFT_NAME}...`);
    setClaimingNftFighter(true);
    blockchainFighters.smartContract.methods
      .mint(wallet.account, mintAmountFighter)
      .send({
        gasLimit: String(totalGasLimit),
        to: FIGHTER_CONFIG.CONTRACT_ADDRESS,
        from: wallet.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedbackFighter(
          "Sorry, something went wrong please try again later."
        );
        setClaimingNftFighter(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedbackFighter(`WOW, the ${FIGHTER_CONFIG.NFT_NAME} is yours!`);
        setClaimingNftFighter(false);
        // dispatch(fetchData(blockchain.account));
      });
  };

  const getBlockchain = () => {
    if (wallet.account != null) {
      dispatch(connect(wallet));
      dispatch(fighterConnect(wallet));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  const getFighterConfig = async () => {
    const configResponse = await fetch("/config/fighterConfig.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_FIGHTER_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
    getFighterConfig();
  }, []);

  useEffect(() => {
    getBlockchain();
  }, [wallet.account]);

  const decrementFighterMintAmount = () => {
    let newMintAmount = mintAmountFighter - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmountFighter(newMintAmount);
  };

  const incrementFighterMintAmount = () => {
    let newMintAmount = mintAmountFighter + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmountFighter(newMintAmount);
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  return (
    <>
      <Banner
        banner={banner_image}
        countdown={new Date(Date.UTC(2022, 5, 19, 19))}
        date="Mint your NFT card, play the game"
        title="Current Drops"
        text="LIVE"
      />
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <div className="mint-information">
              <Row className="mint-card">
                <Col xs={12} md={12} lg={6}>
                  <img src={card2} alt="Card Gif" className="mint-gif" />
                </Col>
                <Col xs={12} md={12} lg={6}>
                  <div className="mint-title">Cronos Fighters Bingo Cards</div>
                  <div className="mint-description">
                    Mint your NFT card, play the game.
                  </div>
                  <ul>
                    <li className="mint-description">
                      Standard - {FIGHTER_CONFIG.DISPLAY_COST}{" "}
                      {FIGHTER_CONFIG.NETWORK.SYMBOL}
                    </li>
                    <li className="mint-description">
                      White Listed / OG - {FIGHTER_CONFIG.WHITELIST_COST}{" "}
                      {FIGHTER_CONFIG.NETWORK.SYMBOL}
                    </li>
                  </ul>
                  <div className="mint-group">
                    {/* Number(data.totalSupply) */}
                    {Number(blockchainFighters.totalSupply) >=
                    FIGHTER_CONFIG.MAX_SUPPLY ? (
                      <div className="feedback">The sale has ended.</div>
                    ) : (
                      <>
                        {wallet.account === null ? (
                          <div className="feedback">Connect to the wallet</div>
                        ) : (
                          <div className="mint-functionality">
                            {/* <button
                              disabled={claimingNftFighter ? 1 : 0}
                              onClick={(e) => {
                                e.preventDefault();
                                claimFighterNFTs();
                              }}
                            >
                              Mint
                            </button> */}

                            <div className="mint-amount">
                              <button
                                className="set-amount"
                                disabled={claimingNftFighter ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  decrementFighterMintAmount();
                                }}
                              >
                                <FaMinus />
                              </button>
                              <div className="number">{mintAmountFighter}</div>
                              <button
                                className="set-amount"
                                disabled={claimingNftFighter ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  incrementFighterMintAmount();
                                }}
                              >
                                <FaPlus />
                              </button>

                              <button
                                className="btn-primary"
                                disabled={claimingNftFighter ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  claimFighterNFTs();
                                }}
                              >
                                {claimingNftFighter ? "BUSY" : "BUY"}
                              </button>
                            </div>

                            <div className="feedback mt-2">{feedbackFighter}</div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  <div className="minted-amount">
                    {blockchainFighters.totalSupply} Minted
                  </div>
                  <div className="mint-progress-container">
                    <ProgressBar
                      animated
                      now={blockchainFighters.totalSupply}
                      className="mint-progress"
                      max={FIGHTER_CONFIG.MAX_SUPPLY}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={12} lg={12}>
            <div className="mint-information">
              <Row className="mint-card">
                <Col xs={12} md={12} lg={6}>
                  <div className="mint-title">Elite Fox Bingo Cards</div>
                  <div className="mint-description">
                    Mint your NFT card, play the game.
                  </div>
                  <ul>
                    <li className="mint-description">
                      Standard - {CONFIG.DISPLAY_COST} {CONFIG.NETWORK.SYMBOL}
                    </li>
                    <li className="mint-description">
                      White Listed / OG - {CONFIG.WHITELIST_COST}{" "}
                      {CONFIG.NETWORK.SYMBOL}
                    </li>
                  </ul>
                  <div className="mint-group">
                    {blockchain.totalSupply >= CONFIG.MAX_SUPPLY ? (
                      <div className="feedback">The sale has ended.</div>
                    ) : (
                      <>
                        {wallet.account === null ? (
                          <div className="feedback">Connect to the wallet</div>
                        ) : (
                          <div className="mint-functionality">
                            <div className="mint-amount">
                              <button
                                className="set-amount"
                                disabled={claimNFTs ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  decrementMintAmount();
                                }}
                              >
                                <FaMinus />
                              </button>
                              <div className="number">{mintAmount}</div>
                              <button
                                className="set-amount"
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  incrementMintAmount();
                                }}
                              >
                                <FaPlus />
                              </button>

                              <button
                                className="btn-primary"
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  claimNFTs();
                                }}
                              >
                                {claimingNft ? "BUSY" : "BUY"}
                              </button>
                            </div>

                            <div className="feedback mt-2">{feedback}</div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  <div className="minted-amount">
                    {blockchain.totalSupply} Minted
                  </div>
                  <div className="mint-progress-container">
                    <ProgressBar
                      animated
                      now={blockchain.totalSupply}
                      className="mint-progress"
                      max={CONFIG.MAX_SUPPLY}
                    />
                  </div>
                </Col>
                <Col xs={12} md={12} lg={6}>
                  <img src={card} alt="Card Gif" className="mint-gif" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Mint;
