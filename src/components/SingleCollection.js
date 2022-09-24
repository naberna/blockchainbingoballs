import React, { useContext } from "react";
import { Link } from "react-router-dom";

const SingleCollection = ({image}) => {
  return (
    <div className="single__collection">
      <div className="single__collection__front">
        <img
          src={image}
          alt="collection image"
        />
      </div>
      <div className="single__collection__back">
        <p className="info">Blockchain Bingo Balls are proud to release the Main Hall PFP collection. A limited supply of 1000 PFPs with varying traits and rarity. Each PFP will grant its holder various utilities, similar to the OG Tilted Dabbers PFPs!</p>
        <Link to="/main-hall" className="button">
          Mint Now
        </Link>
      </div>
    </div>
  );
};

export default SingleCollection;
