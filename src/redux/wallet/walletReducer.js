const initialState = {
    loading: false,
    account: null,
    web3: null,
    errorMsg: "",
    admin: false,
  };
  
  const walletReducer = (state = initialState, action) => {
    switch (action.type) {
      case "WALLET_CONNECTION_REQUEST":
        return {
          ...initialState,
          loading: true,
        };
      case "WALLET_CONNECTION_SUCCESS":
        return {
          ...state,
          loading: false,
          account: action.payload.account,
          web3: action.payload.web3,
          admin: action.payload.account,
        };
      case "WALLET_CONNECTION_FAILED":
        return {
          ...initialState,
          loading: false,
          errorMsg: action.payload,
        };
      case "WALLET_DISCONNECT_SUCCESS":
        return {
          ...initialState,
          loading: false,
          account: null,
          web3: null,
          admin: false,
        };
      case "WALLET_UPDATE_ACCOUNT":
        return {
          ...state,
          account: action.payload.account,
        };
      default:
        return state;
    }
  };
  
  export default walletReducer;
  