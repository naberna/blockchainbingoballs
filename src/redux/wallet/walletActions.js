import Web3 from "web3";
import { DeFiWeb3Connector } from "deficonnect";
import defi from '../../defi.png';
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { Web3Provider } from "@ethersproject/providers";

let web3Modal;
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    network: "cronos", // optional
    cacheProvider: true,
    providerOptions: {
      'custom-defi': {
        display: {
          logo: defi,
          name: 'Defi Wallet',
          description: 'Connect to your Defi Wallet'
        },
        package: DeFiWeb3Connector,
        options: {
          supportedChainIds: [25],
          rpc: {
            25: "https://evm.cronos.org/",
          },
          pollingInterval: 15000,
        },
        connector: async (ProviderPackage, options) => {
          const connector = new ProviderPackage(options);
          await connector.activate();
          let provider = await connector.getProvider()
          return provider;
        }
      },
      walletconnect: {
        package: WalletConnectProvider,
		  options: {
			appName: 'cronos',
			supportedChainIds: [25],
			rpc: {
				25: "https://evm.cronos.org/",
			},
		},
      },
    }, // required
    theme: "dark",
  });
}

// log
import { fetchData } from "../data/dataActions";

const connectWalletRequest = () => {
  return {
    type: "WALLET_CONNECTION_REQUEST",
  };
};

const connectWalletSuccess = (payload) => {
  return {
    type: "WALLET_CONNECTION_SUCCESS",
    payload: payload,
  };
};

const updateWalletAccountRequest = (payload) => {
  return {
    type: "WALLET_UPDATE_ACCOUNT",
    payload: payload,
  };
};

const disconnectWalletSuccess = (payload) => {
  return {
    type: "WALLET_DISCONNECT_SUCCESS",
    payload: payload
  };
};

export const walletConnect = () => {
  return async (dispatch) => {
    dispatch(connectWalletRequest());
    // const { ethereum } = window;
    // const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    var admin = '';
    const provider = await web3Modal.connect();
    const connectedProvider = new Web3Provider(provider);
    const chainId = await connectedProvider.getNetwork().then(network => network.chainId);
    const connectedAddress = await connectedProvider.getSigner().getAddress();
    const web3 = new Web3(provider);
    admin = connectedAddress;
    console.log("connectedAddress = ", connectedAddress);
    console.log("web3 = ", web3);
    dispatch(
        connectWalletSuccess({
        account: connectedAddress,
        web3: web3,
        admin: admin,
      })
    );
  };
};

export const walletDisconnect = () => {
  return async (dispatch) => {
    await web3Modal.clearCachedProvider();
    dispatch(disconnectWalletSuccess(""));
  };
}

export const walletUpdateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateWalletAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};