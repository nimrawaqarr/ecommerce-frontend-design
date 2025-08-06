import React from "react";
import "./DiscountBanner.css";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const DiscountBanner = () => {

  const [showTooltip, setShowTooltip] = useState(false);

  const navigate = useNavigate();
  const handleClickDeal = () => {
    // Navigate to PageOne and pass the anchor
    navigate("/#deals");
  };


  // const handleClick = () => {
  //   setShowTooltip(true);
  //   setTimeout(() => setShowTooltip(false), 2000); // hide after 2 seconds
  // };

  return (
    <div className="discount-banner">
      <div className="discount-text">
        <h2>Super discount on more than 100 USD</h2>
        <p>Have you ever finally just write dummy info</p>
      </div>

      <div className="subscribe-wrapper">
          <button className="shop-now-btn" onClick={handleClickDeal}>
            Shop now
          </button>
          {showTooltip && <div className="tooltip">Shop Successful</div>}
        </div>
      {/* <button className="shop-now-btn">Shop now</button> */}
    </div>
  );
};

export default DiscountBanner;
