import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-left">
        
        <div className="brand">
          <img src="/images/pageone/logo.jpg" alt="Logo" className="brand-icon" />
        </div>

        <p className="brand-text">
          Best information about the company <br /> goes here but now lorem ipsum is
        </p>

        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Find store</a>
          <a href="#">Categories</a>
          <a href="#">Blogs</a>
        </div>
        <div>
          <h4>Partnership</h4>
          <a href="#">About Us</a>
          <a href="#">Find store</a>
          <a href="#">Categories</a>
          <a href="#">Blogs</a>
        </div>
        <div>
          <h4>Information</h4>
          <a href="#">Help Center</a>
          <a href="#">Money Refund</a>
          <a href="#">Shipping</a>
          <a href="#">Contact us</a>
        </div>
        <div>
          <h4>For users</h4>
          <a href="#">Login</a>
          <a href="#">Register</a>
          <a href="#">Settings</a>
          <a href="#">My Orders</a>
        </div>

        <div className="get-app">
          <h4>Get app</h4>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="app-button"
          />
        </a>

        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
        <img 
          src="/images/pageone/googleplay.jpg"
          alt="Get it on Google Play"
          className="app-button"
        />
      </a>
      </div>

      </div>
    </footer>

  );
};

export default Footer;
