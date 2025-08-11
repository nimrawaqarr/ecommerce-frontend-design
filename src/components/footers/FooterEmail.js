import React, { useState } from "react";
import "./FooterEmail.css";

const FooterEmail = () => {
  const [email, setEmail] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    // Basic email pattern
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleClick = () => {
    if (!email) {
      setErrorMessage("Please enter your email");
      setShowTooltip(false);
    } else if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email");
      setShowTooltip(false);
    } else {
      setErrorMessage("");
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    }
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
          <input
            type="email"
            placeholder="Email"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="subscribe-wrapper">
          <button className="subscribe-button" onClick={handleClick}>
            Subscribe
          </button>
         {showTooltip && <div className="tooltip">Subscribe Successful</div>}
         {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      </div>
       
    </div>
  );
};

export default FooterEmail;
