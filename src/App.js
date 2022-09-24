import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import scrollreveal from "scrollreveal";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Mint from "./pages/Mint";
import Drop from "./pages/Drop";
import Admin from "./pages/Admin";
import Construction from "./pages/Construction";
import MyNfts from "./pages/MyNfts";
import Leadership from "./pages/Leadership";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "./assets/img/logo/latestlogo.png";
import "./sass/index.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { walletConnect, walletDisconnect } from "./redux/wallet/walletActions";
import { fetchData } from "./redux/data/dataActions";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Collection from "./pages/Collection";
import Mainhall from "./pages/Mainhall";

function App() {
  /********************** THEME **********************/
  const [theme, setTheme] = useState("dark");
  const [navState, setNavState] = useState(false);
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        .clients,
        .super-rare,
        .releases,
        .like,
        .signup,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);

  /********************** WALLET CONNECTION **********************/
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet);

  const getData = () => {
    if (wallet.account !== "") {
      dispatch(fetchData(wallet.account));
    }
  };
  return (
    <div data-theme={theme} className="app-container">
      <ScrollToTop />

      <HashRouter>
        <nav>
          <div className="brand-container">
            <div className="brand">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="toggle-container">
              <div className="toggle">
                {navState ? (
                  <MdClose onClick={() => setNavState(false)} />
                ) : (
                  <GiHamburgerMenu onClick={() => setNavState(true)} />
                )}
              </div>
              <div className="mode" onClick={changeTheme}>
                {theme === "dark" ? (
                  <ImSun className="light" />
                ) : (
                  <BsFillMoonFill className="dark" />
                )}
              </div>
            </div>
          </div>
          <div className={`links-container ${navState ? "nav-visible" : ""}`}>
            <ul className="links">
              <li className="left">
                <Link to="/">Home</Link>
                <Link to="/crobingo">CroBINGO</Link>
                <Link to="/crobingo-card">CroBINGO Cards</Link>
                <Link to="/play-game">Play Game</Link>
                {/* <Link to="/collections">Collections</Link> */}
                <Link to="/marketplace">Marketplace</Link>
                <Link to="/exchange">Exchange</Link>
                <Link to="/bingoverse-shop">BingoVerse Shop</Link>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="redcarpet-dropdown">
                    Red Carpet
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Link to="/tilted-dabbers">Tilted Dabber OGs</Link>
                    <Link to="/main-hall">Main Hall PFPs</Link>
                    <Link to="/dangerous-dabbers">Dangerous Dabbers</Link>
                    <Link to="/">Blockchain Bingo Buses</Link>
                    <Link to="/bingoverse">Bingoverse HQs</Link>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <Link to="/red-carpet">Red Carpet</Link> */}
                {/* <Link to="/play-game">Play Game</Link>
                                <Link to="/drops">Drops</Link> */}
              </li>
              {/* <li>
                                <Link to="/shop">Shop</Link>
                            </li> */}
              {/* {walletAddress !== "" ? (
                <li>
                  <Link to="/my-nfts">My NFTs</Link>
                </li>
              ) : (
                <></>
              )} */}
              {!(
                wallet.admin === "0x9f522c770aF097c642aF52c3939A581840611549"
              ) ? (
                <></>
              ) : (
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
              )}
              <li className="right">
                {wallet.account !== null ? (
                  <div className="mr-1">
                    <Link className="green" to="/my-nfts">
                      My NFTs
                    </Link>
                  </div>
                ) : (
                  <></>
                )}
                {wallet.account == null ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(walletConnect());
                        getData();
                      }}
                    >
                      WALLET CONNECT
                    </button>
                    {wallet.errorMsg !== "" ? (
                      <div>{wallet.errorMsg}</div>
                    ) : null}
                  </>
                ) : (
                  <>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(walletDisconnect());
                      }}
                    >
                      DISCONNECT
                    </button>
                  </>
                )}
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/play-game" element={<Game />} />
          <Route path="/crobingo" element={<Mint />} />
          <Route path="/crobingo-card" element={<Drop />} />
          <Route path="/leadership-board" element={<Leadership />} />
          <Route path="/my-nfts" element={<MyNfts />} />
          {/* <Route path="/collections" element={<Collection />} /> */}
          <Route path="/marketplace" element={<Construction />} />
          <Route path="/exchange" element={<Construction />} />
          <Route path="/bingoverse-shop" element={<Construction />} />
          <Route path="/dangerous-dabbers" element={<Collection />} />
          <Route path="/red-carpet" element={<Construction />} />
          <Route path="/main-hall" element={<Mainhall />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
