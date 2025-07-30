import React from "react";
import "./InfoSection.css";

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="info-item">
        <div className="info-icon">
          <i className="fas fa-lock icon-img"></i>
        </div>
        <div className="info-text">
          <h4>Secure payment</h4>
          <p>Have you ever finally just</p>
        </div>
      </div>

      <div className="info-item">
        <div className="info-icon">
          <i className="fas fa-comment-dots icon-img"></i>
        </div>
        <div className="info-text">
          <h4>Customer support</h4>
          <p>Have you ever finally just</p>
        </div>
      </div>

      <div className="info-item">
        <div className="info-icon">
          <i className="fas fa-truck icon-img"></i>
        </div>
        <div className="info-text">
          <h4>Free delivery</h4>
          <p>Have you ever finally just</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
