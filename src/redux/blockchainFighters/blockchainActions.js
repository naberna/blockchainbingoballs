const fighterConnectRequest = () => {
  return {
    type: "FIGHTER_CONNECTION_REQUEST",
  };
};

const fighterConnectSuccess = (payload) => {
  return {
    type: "FIGHTER_CONNECTION_SUCCESS",
    payload: payload,
  };
};

export const fighterConnect = (wallet) => {
  return async (dispatch) => {
    dispatch(fighterConnectRequest());
    const abiResponse = await fetch("/config/fighterAbi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const abi = await abiResponse.json();
    const configResponse = await fetch("/config/fighterConfig.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    var tokenId = '';
    var tokenMetadataURI = '';
    var tokenMetadata = '';
    var tokenMetadataArr = [{
      name: '',
      description: '',
      image: '',
  }];
    var balance = '';
    var isWhiteList = false;
    var totalSupply = "";
    const CONFIG = await configResponse.json();
    const FighterSmartContractObj = new wallet.web3.eth.Contract(abi, CONFIG.CONTRACT_ADDRESS);
    await FighterSmartContractObj.methods
      .balanceOf(wallet.account)
      .call()
      .then(function (result) {
        balance = result;
      });
      await FighterSmartContractObj.methods
      .isWhiteList(wallet.account)
      .call()
      .then(function (result) {
        isWhiteList = result;
      });
    await FighterSmartContractObj.methods
      .totalSupply()
      .call()
      .then(function (result) {
        totalSupply = result;
      });
    for(var i = 0; i < balance; i++) {
      await FighterSmartContractObj.methods
      .tokenOfOwnerByIndex(wallet.account, i)
      .call()
      .then(function (result) {
        tokenId = result;
      });
      await FighterSmartContractObj.methods
      .tokenURI(tokenId)
      .call()
      .then(function (result) {
        tokenMetadataURI = result;
      });
      if(tokenMetadataURI.startsWith("ipfs://")){
        tokenMetadataURI = `https://ipfs.io/ipfs/${tokenMetadataURI.split("ipfs://")[1]}`

        tokenMetadata = await fetch(tokenMetadataURI).then((response) => response.json())

        tokenMetadataArr[i] = tokenMetadata;
      }
    }
    dispatch(
      fighterConnectSuccess({
        loading: false,
        smartContract: FighterSmartContractObj,
        tokenId: tokenId,
        tokenMetadataURI: tokenMetadataURI,
        balance: balance,
        tokenMetadata: tokenMetadata,
        tokenMetadataArr: tokenMetadataArr,
        totalSupply: totalSupply,
        isWhiteList: isWhiteList,
      })
    );
  };
};