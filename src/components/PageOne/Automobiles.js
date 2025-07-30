import React from 'react';
import './Automobiles.css';
import { Link } from 'react-router-dom';

const Automobiles = () => {
  const sidebarItems = [
    'Automobiles',
    'Clothes and wear',
    'Home interiors',
    'Computer and tech',
    'Tools, equipments',
    'Sports and outdoor',
    'Animal and pets',
    'Machinery tools',
    'More category',
  ];

  return (
    <div className="container">
      <div className="sidebar">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`sidebar-item ${index === 0 ? 'active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>


      <div
        className="main-banner"
        style={{
          backgroundImage: "url('/images/pageone/banner.png')",
        }}
      >
        <div className="banner-content-auto">
          <h2 className='bannerh2'>Latest trending</h2>
          <h1 className='bannerh1'>Electronic items</h1>
          {/* <button className="learn-more-btn">Learn more</button> */}
          <Link to="/page-two" className="learn-more-btn">Learn more</Link>
        </div>
      </div>


      <div className="right-panel">
        <div className="auth-box">
          <div className="auth-header">
            <div className="avatar">
               <i className="fas fa-user"></i>
               {/* <img src="/images/pageone/avatar.jpg" alt="Logo" className="user" /> */}
            </div>
            <div>
              <div className="auth-name">Hi, user <br /> let’s get stated</div>
            </div>
          </div>
          <button className="join-btn">Join now</button>
          <button className="login-btn">Log in</button>
        </div>

        <div className="offer orange">Get US $10 off with a new supplier</div>
        <div className="offer teal">Send quotes with supplier preferences</div>
      </div>
    </div>
  );
};

export default Automobiles;
