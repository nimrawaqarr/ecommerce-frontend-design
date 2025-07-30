import React from 'react';
import '../headers/Navbar.css'

const NavbarFive = () => {
  return (
    <nav className="navbar">

      <div className="navbar-left">
        <img src="/images/pageone/logo.jpg" alt="Logo" className="logo-icon" />
        {/* <span className="brand-text">Brand</span> */}
      </div>

      {/* Search Bar */}
      {/* <div className="search-bar-group">
        <input type="text" placeholder="Search" className="search-input" />
        <select className="category-dropdown">
          <option>All category</option>
          <option>Hot offers</option>
          <option>Gift boxes</option>
          <option>Projects</option>
          <option>Menu item</option>
          <option>Help</option>
        </select>
        <button className="search-button">Search</button>
      </div> */}

      {/* Right Menu */}
      <div className="navbar-right">
        <div className="nav-icon">
          <i className="fas fa-user"></i>
          <span>Profile</span>
        </div>
        <div className="nav-icon">
          <i className="fas fa-comment-alt"></i>
          <span>Message</span>
        </div>
        <div className="nav-icon">
          <i className="fas fa-heart"></i>
          <span>Orders</span>
        </div>
        <div className="nav-icon">
          <i className="fas fa-shopping-cart"></i>
          <span>My cart</span>
        </div>
      </div>

    </nav>

  );
};

export default NavbarFive;
