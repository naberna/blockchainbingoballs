import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import blockchainReducer from "./blockchain/blockchainReducer";
import blockchainFighterReducer from "./blockchainFighters/blockchainReducer";
import dataReducer from "./data/dataReducer";
import walletReducer from "./wallet/walletReducer";

const rootReducer = combineReducers({
  blockchain: blockchainReducer,
  blockchainFighters: blockchainFighterReducer,
  wallet: walletReducer,
  data: dataReducer,
});

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleware));

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};

const store = configureStore();

export default store;
