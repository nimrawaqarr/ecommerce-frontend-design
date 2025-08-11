import React from 'react';
import './Navbar.css';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/page-five');
  };

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <Link to="/">
          <img src="/images/pageone/logo.jpg" alt="Logo" className="logo-icon" />
        </Link>
      </div>

      {/* Middle: Search */}
      <div className="search-bar-group">
        <div className="search-input-wrapper">
          <i className="fas fa-search search-icon"></i>
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        
        <select className="category-dropdown">
          <option>All category</option>
          <option>Hot offers</option>
          <option>Gift boxes</option>
          <option>Projects</option>
          <option>Menu item</option>
          <option>Help</option>
        </select>
        <button className="search-button">Search</button>
      </div>

      {/* Right: Icons */}
      <div className="navbar-right">
        <Link to="/page-four" className="nav-icon">
          <i className="fas fa-user"></i>
          <span className='txt-icon'>Profile</span>
        </Link>
        <div className="nav-icon">
          <i className="fas fa-comment-alt"></i>
          <span className='txt-icon'>Message</span>
        </div>
        <div className="nav-icon">
          <i className="fas fa-heart"></i>
          <span className='txt-icon'>Orders</span>
        </div>
        <div className="nav-icon" onClick={handleClick}>
          <i className="fas fa-shopping-cart"></i>
          <span className='txt-icon'>My cart</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
