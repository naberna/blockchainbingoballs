const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

export const connect = (wallet) => {
  console.log("wallet from connect" + wallet.account);
  console.log("web3 from connect" + wallet.web);
  return async (dispatch) => {
    dispatch(connectRequest());
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const abi = await abiResponse.json();
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    var tokenId = "";
    var tokenMetadataURI = "";
    var tokenMetadata = "";
    var tokenMetadataArr = [
      {
        name: "",
        description: "",
        image: "",
      },
    ];
    var balance = "";
    var isWhiteList = false;
    var totalSupply = "";
    const CONFIG = await configResponse.json();
    const SmartContractObj = new wallet.web3.eth.Contract(
      abi,
      CONFIG.CONTRACT_ADDRESS
    );
    await SmartContractObj.methods
      .balanceOf(wallet.account)
      .call()
      .then(function (result) {
        balance = result;
      });
    await SmartContractObj.methods
      .isWhiteList(wallet.account)
      .call()
      .then(function (result) {
        isWhiteList = result;
      });
    await SmartContractObj.methods
      .totalSupply()
      .call()
      .then(function (result) {
        totalSupply = result;
      });
    for (var i = 0; i < balance; i++) {
      await SmartContractObj.methods
        .tokenOfOwnerByIndex(wallet.account, i)
        .call()
        .then(function (result) {
          tokenId = result;
        });
      await SmartContractObj.methods
        .tokenURI(tokenId)
        .call()
        .then(function (result) {
          tokenMetadataURI = result;
        });

      if (tokenMetadataURI.startsWith("ipfs://")) {
        tokenMetadataURI = `https://ipfs.io/ipfs/${
          tokenMetadataURI.split("ipfs://")[1]
        }`;

        tokenMetadata = await fetch(tokenMetadataURI).then((response) =>
          response.json()
        );

        tokenMetadataArr[i] = tokenMetadata;
      }
    }
    dispatch(
      connectSuccess({
        smartContract: SmartContractObj,
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
