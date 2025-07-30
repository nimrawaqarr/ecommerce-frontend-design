import React from 'react';
import './DealsOffers.css';

const products = [
  { name: 'Smart watches', discount: '-25%', img: '/images/pageone/watch.png' },
  { name: 'Laptops', discount: '-15%', img: '/images/pageone/laptop.png' },
  { name: 'GoPro cameras', discount: '-40%', img: '/images/pageone/camera.png' },
  { name: 'Headphones', discount: '-25%', img: '/images/pageone/headphone.png' },
  { name: 'Canon camreras', discount: '-25%', img: '/images/pageone/phone.png' },
];

const DealsOffers = () => {
  return (
    <div className="deals-container">
      <div className="deals-sidebar">
        <h3>Deals and offers</h3>
        <p className="subheading">Hygiene equipments</p>
        <div className="timer">
          <div><strong>04</strong><span>Days</span></div>
          <div><strong>13</strong><span>Hour</span></div>
          <div><strong>34</strong><span>Min</span></div>
          <div><strong>56</strong><span>Sec</span></div>
        </div>
      </div>
      
      {/* Just add this line here */}
      <div className="vertical-line"></div>

      <div className="deals-items">
        {products.map((item, i) => (
          <div className="deal-card" key={i}>
            <img src={item.img} alt={item.name} />
            <p className="product-name">{item.name}</p>
            <span className="discount">{item.discount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsOffers;
