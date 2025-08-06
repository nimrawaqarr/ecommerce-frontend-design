import React from "react";
import "./SavedForLater.css";

const products = [
  {
    id: 1,
    img: "/images/pagetwo/five/img1.jpg",
    price: "$99.50",
    title: "GoPro HERO6 4K Action Camera – Black",
  },
  {
    id: 2,
    img: "/images/pagetwo/five/img2.jpg",
    price: "$99.50",
    title: "GoPro HERO6 4K Action Camera – Black",
  },
  {
    id: 3,
    img: "/images/pagetwo/five/img3.jpg",
    price: "$99.50",
    title: "GoPro HERO6 4K Action Camera – Black",
  },
  {
    id: 4,
    img: "/images/pagetwo/five/img4.jpg",
    price: "$99.50",
    title: "GoPro HERO6 4K Action Camera – Black",
  },
];

export default function SavedForLater({ setCartItems }) {
  const handleMoveToCart = (product) => {
    setCartItems((prev) => [
      ...prev,
      {
        id: Math.random(), // or a better unique ID
        title: product.title,
        price: parseFloat(product.price.replace('$', '')),
        qty: 1,
        size: 'medium',
        color: 'black',
        material: 'Plastic',
        seller: 'GoPro Seller',
        image: product.img,
      },
    ]);
  };

  return (
    <div className="saved-container">
      <h2 className="saved-title">Saved for later</h2>
      <div className="saved-grid">
        {products.map((item) => (
          <div className="saved-card" key={item.id}>
            <div className="img-div">
              <img src={item.img} alt={item.title} className="saved-img" />
            </div>
            <p className="saved-price">{item.price}</p>
            <p className="saved-desc">{item.title}</p>
            <button className="saved-btn" onClick={() => handleMoveToCart(item)}>
              <i className="fas fa-shopping-cart"></i> Move to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
