import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/img/logo/logo.png";
import { Container } from "react-bootstrap";
import {
  Link
} from "react-router-dom";
export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  return (
      <nav>
      <div className="brand-container">
        <div className="brand">
          <Link to="/"><img src={logo} alt="logo" /></Link>
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
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mint">About</Link>
          </li>
          <li>
            <Link to="/play-game">Play Game</Link>
          </li>
          {/* <li>
            <Link to="/shop">Shop</Link>
          </li> */}
          <li>
            <button>Connect Wallet</button>
          </li>
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
