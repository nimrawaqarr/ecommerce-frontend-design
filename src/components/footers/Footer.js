import React from 'react';
import './Footer.css';
import { useNavigate, Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-left">
        
        <div className="brand">
          <Link to="/">
          <img src="/images/pageone/logo.jpg" alt="Logo" className="brand-icon" />
          </Link>
        </div>

        <p className="brand-text">
          Best information about the company <br /> goes here but now lorem ipsum is
        </p>

       <div className="social-icons">
        <a href="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://accounts.google.com/ServiceLogin?service=youtube" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
      </div>


      </div>

      <div className="footer-links">
        <div>
          <h5>About</h5>
          <a href="#">About Us</a>
          <a href="#">Find store</a>
          <a href="#">Categories</a>
          <a href="#">Blogs</a>
        </div>
        <div>
          <h5>Partnership</h5>
          <a href="#">About Us</a>
          <a href="#">Find store</a>
          <a href="#">Categories</a>
          <a href="#">Blogs</a>
        </div>
        <div>
          <h5>Information</h5>
          <a href="#">Help Center</a>
          <a href="#">Money Refund</a>
          <a href="#">Shipping</a>
          <a href="#">Contact us</a>
        </div>
        <div>
          <h5>For users</h5>
          <a href="#">Login</a>
          <a href="#">Register</a>
          <a href="#">Settings</a>
          <a href="#">My Orders</a>
        </div>

        <div className="get-app">
          <p className="get-head">Get app</p>
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
