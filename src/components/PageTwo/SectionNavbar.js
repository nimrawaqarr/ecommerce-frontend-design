import React from "react";
import "./SectionNavbar.css";

const SectionNavbar = () => {
  return (
    <div className="section-navbar">
      <span className="breadcrumb">Home</span>
      <i className="fas fa-chevron-right separator"></i>
      <span className="breadcrumb">Clothings</span>
      <i className="fas fa-chevron-right separator"></i>
      <span className="breadcrumb">Men’s wear</span>
      <i className="fas fa-chevron-right separator"></i>
      <span className="breadcrumb current">Summer clothing</span>
    </div>
  );
};

export default SectionNavbar;
