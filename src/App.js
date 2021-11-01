import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import GlobalFonts from './fonts/fonts';

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

const firstRowImages = [1,2,3,4,5,6,7,8,9,10].map(image => (<div key={image}><img src={`./config/images/${image}.png`} /></div>));

const secondRowImages = [11,12,13,14,15,16,17,18,19,20].map(image => (<div key={image}><img src={`./config/images/${image}.png`} /></div>));

const thirdRowImages = [21,22,23,24,25,26,27,28,29,30].map(image => (<div key={image}><img src={`./config/images/${image}.png`} /></div>));

const fourthRowImages = [31,32,33,34,35,36,37,38,39,40].map(image => (<div key={image}><img src={`./config/images/${image}.png`} /></div>));

export const StyledButton = styled.button`
  border: none;
  background-color: var(--accent-text);
  padding: 20px 40px;
  color: var(--secondary-text);
  cursor: pointer;
  font-family: 'basier_square_monoregular';
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 5px;
  margin: 1rem 0;

  &:hover {
    background-color: var(--secondary);
    color: var(--secondary-text);
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--accent-text);
  padding: 10px;
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--secondary-text);
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }

  &:hover {
    background-color: var(--primary);
    color: var(--primary-text);
  }
`;

export const InteractionBox  = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;

  p {
    font-size: 2rem;
    font-weight: bold;
  }
`

export const StyledLogo = styled.img`
  width: 100%;
`;

export const StyledLink = styled.a`
  color: var(--accent-text);
  text-decoration: none;

  &:hover {
    color: var(--accent);
  }
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          `Welcome to the ${CONFIG.NFT_NAME} fam! Go visit Opensea.io to view your Polygono.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
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
    if (newMintAmount > 5) {
      newMintAmount = 5;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
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

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <>
      <s.Screen>
        <GlobalFonts/>
        <s.Left className="left">
          <s.Top className="top">
            <StyledLogo alt={"logo"} src={"/config/images/Polygonos_logo.svg"} />
          </s.Top>
          <s.Bottom className="bottom">
              <p className="counter">
                {data.totalSupply} / {CONFIG.MAX_SUPPLY}
              </p>
              <s.TextDescription>
                <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                  {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
                </StyledLink>
              </s.TextDescription>
              {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                <>
                  <s.TextDescription>
                    The sale has ended.
                  </s.TextDescription>
                  <s.TextDescription>
                    You can still find {CONFIG.NFT_NAME} on
                  </s.TextDescription>
                  <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                    {CONFIG.MARKETPLACE}
                  </StyledLink>
                </>
              ) : (
                <>
                  <s.TextDescription>
                    1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                    {CONFIG.NETWORK.SYMBOL}.
                  </s.TextDescription>
                  {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                      <>
                        <s.TextDescription>
                          Connect to the {CONFIG.NETWORK.NAME} network
                        </s.TextDescription>
                        <StyledButton
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(connect());
                            getData();
                          }}
                        >
                          CONNECT
                        </StyledButton>
                        {blockchain.errorMsg !== "" ? (
                          <>
                            <s.TextDescription>
                              {blockchain.errorMsg}
                            </s.TextDescription>
                          </>
                        ) : null}
                      </>
                  ) : (
                    <InteractionBox>
                      <s.TextDescription>
                        {feedback}
                      </s.TextDescription>
                      <ButtonWrapper>
                        <StyledRoundButton
                          style={{ lineHeight: 0.4 }}
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            decrementMintAmount();
                          }}
                        >
                          -
                        </StyledRoundButton>
                        <p>
                          {mintAmount}
                        </p>
                        <StyledRoundButton
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            incrementMintAmount();
                          }}
                        >
                          +
                        </StyledRoundButton>
                      </ButtonWrapper>
                      <StyledButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                      >
                        {claimingNft ? "BUSY" : "BUY"}
                      </StyledButton>
                    </InteractionBox>
                  )}
                </>
              )}
          </s.Bottom>
        </s.Left>
        <s.Right image={"/config/images/PolygonosGIF"} />
      </s.Screen>
      <s.Information>
        <div className="left">Polygonos is a collection of 1,010 abstract characters programmatically generated using more than 50 polygons and minted as NFTs.Polygonos are made up of a unique combination of hairstyles, face accessories, and tattoos, across 50+ traits randomized for varying rarities.</div>
        <div className="right">Polygonos are known to have many different sides that follow a straight belief. However, there are Polygonos that are different and bend their sides to their vibes making them rare within their posse.</div>
      </s.Information>
      <s.ImagesBanner>{firstRowImages}</s.ImagesBanner>
      <s.TextBanner>
        <p>No roadmaps or promises, just vibes.</p>
      </s.TextBanner>
      <s.ImagesBanner>{secondRowImages}</s.ImagesBanner>
      <s.Information bg="white" color="black">
        <div className="left">
          <h1>FAQ</h1>
        </div>
        <div className="right">
          <div className="faq-q">
            <h1>What are Polygonos?</h1>
            <p>Polygonos is a collection of programmatically generated abstract characters designed by <StyledLink target={"_blank"} href="https://twitter.com/brizism">@brizism</StyledLink> and minted as NFTs on the Ethereum blockchain.</p>
          </div>
          <div className="faq-q">
            <h1>Who is behind Polygonos?</h1>
            <p><StyledLink target={"_blank"} href="https://twitter.com/brizism">@brizism</StyledLink>, the dev/designer behind Polygonos is inspired by abstract, Russian Constructivism art and applies that to her designs. She studied graphic design and career transitioned to web dev and now wants to immerse herself in all things crypto.</p>
          </div>
          <div className="faq-q">
            <h1>What's on the roadmap?</h1>
            <p>No roadmap doesn't mean no utility, no production, no future drops, no meetups, no love, no friends. It just means there is no one direct path to lead to all these cool things. All I can promise is to keep creating.</p>
          </div>
          <div className="faq-q">
            <h1>What's an NFT?</h1>
            <p>NFT stands for "Non-fungible token," which means that it's a unique digital item. NFTs can really be anything digital (such as drawings, music, your brain downloaded and turned into an AI) with blockchain-managed ownership that users can collect, own, and trade. Some NFT's fundamental function is to be digital art. But they can also offer additional benefits like exclusive access to websites, event tickets, game items, and ownership records for physical objects.</p>
          </div>
          <div className="faq-q">
            <h1>How do I NFT?</h1>
            <p>New to NFTs? No problemo, here are some steps on what you need to do to get your Polygono.</p>
            <p className="bullet">Download the <StyledLink target={"_blank"} href="https://metamask.io/">metamask.io</StyledLink> extension for your Chrome browser or app on mobile. This will allow you to buy with Ethereum and can be found in the extensions tab. If you are on mobile, you must use the Metamask App Browser</p>
            <p className="bullet">You can buy Ethereum through the Metamask Wallet using Wyre or Send Ethereum from an exchange like <StyledLink target={"_blank"} href="https://www.coinbase.com/">Coinbase</StyledLink>.</p>
            <p className="bullet">Click on the Connect button at the top of the page and connect your Metamask. Once connected, you will be able to buy up to five Polygonos. You will be prompted to sign your transaction. FYI, there will be a fee associated with every transaction related to gas prices.</p>
            <p className="bullet">Once you have completed your transaction, your Polygonos NFTs will be viewable in your wallet and on OpenSea.</p>
          </div>
        </div>
      </s.Information>
      <s.ImagesBanner>{thirdRowImages}</s.ImagesBanner>
      <s.ImagesBanner>{fourthRowImages}</s.ImagesBanner>
      <s.TextBanner>
        <p>Polygonos on <StyledLink target={"_blank"} href="https://twitter.com/polygonosNFT">[Twitter]</StyledLink> <StyledLink target={"_blank"} href="https://opensea.io/collection/polygonos">[OpenSea]</StyledLink>.</p>
      </s.TextBanner>
    </>
  );
}

export default App;
