import React from "react";
import partners1 from "../assets/img/partners/ebisus.png";
import partners2 from "../assets/img/partners/launchpad.svg";

export default function Partners() {
  const data = [partners1, partners2];
  return (
    <section className="section partners">
      <div className="main-title">Partners</div>
      <div className="container">
        <div className="partners-container">
          {data.map((partner, index) => (
            <div className="partner" key={index}>
              <img src={partner} alt="partner" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
