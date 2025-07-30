import React from "react";
import "./HomeCategoryGrid.css";
import "./ConsumerGagets.css";

const items = [
  { title: "Smart Watches", from: "From", price: "USD 19", image: "/images/pageone/consumer/smartwatches.png" },
  { title: "Cameras",  from: "From", price: "USD 89", image: "/images/pageone/consumer/cameras.png" },
  { title: "Headphones", from: "From", price: "USD 10", image: "/images/pageone/consumer/headphones.png" },
  { title: "Smart watches", from: "From", price: "USD 19", image: "/images/pageone/consumer/jug.png" },
  { title: "Gaming Set", from: "From", price: "USD 35",image: "/images/pageone/consumer/gamingset.png" },
  { title: "Laptops & PC", from: "From", price: "USD 340",image: "/images/pageone/consumer/laptoppc.png" },
  { title: "Smartphones", from: "From", price: "USD 19", image: "/images/pageone/consumer/smartpones.png" },
  { title: "Electric Kattle", from: "From", price: "USD 240", image: "/images/pageone/consumer/mobilekattle.png" },
];

export default function ConsumerGagets() {
  return (
    <div className="home-grid-container">

      <div className="left-banner">
        <div className="banner-overlay-con"></div>
        <img src="/images/pageone/consumer/banner3.png" className="bg-image-consumer" alt="Background" />
        <div className="banner-content">
            <h2> Consumer <br/> electronics and <br/> gadgets</h2>
            <button>Source now</button>
        </div>
        </div>


      <div className="product-grid">
        {items.map((item, index) => (
          <div className="product-card" key={index}>
            <div className="card-txt"> 
                <h3>{item.title}</h3>
                 <p>{item.from}</p>
                 <p>{item.price}</p>
            </div>
            <img src={item.image} alt={item.title} />
            
          </div>
        ))}
      </div>
      
    </div>
  );
}
