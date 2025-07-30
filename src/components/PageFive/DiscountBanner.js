import React from "react";
import "./DiscountBanner.css";

const DiscountBanner = () => {
  return (
    <div className="discount-banner">
      <div className="discount-text">
        <h2>Super discount on more than 100 USD</h2>
        <p>Have you ever finally just write dummy info</p>
      </div>
      <button className="shop-now-btn">Shop now</button>
    </div>
  );
};

export default DiscountBanner;
