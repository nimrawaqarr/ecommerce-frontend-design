import React from "react";
import "./HomeCategoryGrid.css";

const items = [
  { title: "Soft chairs", from: "From", price: "USD 19", image: "/images/pageone/homedecore/softchairs.png" },
  { title: "Sofa & chair",  from: "From", price: "USD 19", image: "/images/pageone/homedecore/lamp.png" },
  { title: "Kitchen dishes", from: "From", price: "USD 19", image: "/images/pageone/homedecore/kitchendishes.png" },
  { title: "Smart watches", from: "From", price: "USD 19", image: "/images/pageone/homedecore/smartwatches.png" },
  { title: "Kitchen mixer", from: "From", price: "USD 100",image: "/images/pageone/homedecore/kitchenmixer.png" },
  { title: "Blenders", from: "From", price: "USD 39",image: "/images/pageone/homedecore/blenders.png" },
  { title: "Home appliance", from: "From", price: "USD 19", image: "/images/pageone/homedecore/homeappliances.jpg" },
  { title: "Coffee maker", from: "From", price: "USD 10", image: "/images/pageone/homedecore/coffeemaker.png" },
];

export default function HomeCategoryGrid() {
  return (
    <div className="home-grid-container">

      <div className="left-banner">
        <div className="banner-overlay"></div>
        <img src="/images/pageone/homedecore/image.png" className="bg-image" alt="Background" />
        <div className="banner-content">
            <h2>Home and<br />outdoor</h2>
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
