const initialState = {
  loading: false,
  smartContract: null,
  errorMsg: "",
  tokenId: "",
  tokenMetadataURI: "",
  balance: "",
  tokenMetadata: "",
  tokenMetadataArr: [
    {
      name: "",
      description: "",
      image: "",
    },
  ],
  totalSupply: "",
  isWhiteList: false,
};

const blockchainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONNECTION_REQUEST":
      return {
        ...initialState,
        loading: true,
      };
    case "CONNECTION_SUCCESS":
      return {
        ...state,
        loading: false,
        smartContract: action.payload.smartContract,
        tokenId: action.payload.tokenId,
        tokenMetadataURI: action.payload.tokenMetadataURI,
        balance: action.payload.balance,
        tokenMetadata: action.payload.tokenMetadata,
        tokenMetadataArr: action.payload.tokenMetadataArr,
        totalSupply: action.payload.totalSupply,
        isWhiteList: action.payload.isWhiteList,
      };
      return {
        ...state,
        account: action.payload.account,
      };
    default:
      return state;
  }
};

export default blockchainReducer;
