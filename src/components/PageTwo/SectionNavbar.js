import React from "react";
import "./SectionNavbar.css";
import { Link } from "react-router-dom";

const SectionNavbar = () => {
  return (
    <div className="section-navbar">
      <Link to="/" className="breadcrumb home-link">Home</Link>
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
