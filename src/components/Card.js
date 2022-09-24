import React from "react";
export default function Card({ image, series, title, price, tag, time }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="super1" />
      </div>
    </div>
  );
}
