import React from "react";
import "./FooterEmail.css";

const FooterEmail = () => {
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
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>
  );
};

export default FooterEmail;
