import React from "react";
import "./FooterEmail.css";
import { useState } from 'react';

const FooterEmail = () => {

  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000); // hide after 2 seconds
  };

  return (
    <div className="footer-email-container">
      <h5 className="footer-email-heading">Subscribe on our newsletter</h5>
      <p className="footer-email-subtext">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <div className="footer-email-form">
        <div className="email-input-container">
          <i className="far fa-envelope email-icon"></i>
          <input type="email" placeholder="Email" className="email-input" />
        </div>

         <div className="subscribe-wrapper">
          <button className="subscribe-button" onClick={handleClick}>
            Subscribe
          </button>
          {showTooltip && <div className="tooltip">Subscribe Successful</div>}
        </div>

      </div>
    </div>
  );
};

export default FooterEmail;
