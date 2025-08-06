import React from "react";
import "./RelatedProducts.css";

const products = [
  {
    id: 1,
    img: "/images/pagefour/product/img1.jpg", 
    title: "Xiaomi Leather Wallet", 
    price: "$32.00 - $40.00"
  },
  {
    id: 2,
    img: "/images/pagefour/product/img2.jpg", 
    title: "Amazfit Smart Watch", 
    price: "$120.00 - $150.00"
  },
  {
    id: 3,
    img: "/images/pagefour/product/img3.jpg", 
    title: "Mi Wireless Headphones", 
    price: "$65.00 - $80.00" 
  },
  {
    id: 4,
    img: "/images/pagefour/product/img4.jpg", 
    title: "Levi's Denim Shorts", 
    price: "$45.00 - $55.00"
  },
  {
    id: 5,
    img: "/images/pagefour/product/img5.jpg", 
    title: "Viomi Electric Kettle", 
    price: "$55.00 - $70.00" 
  },
  {
    id: 6,
    img: "/images/pagefour/product/img6.jpg", 
    title: "PU Leather File Holder", 
    price: "$38.00 - $50.00"
  },
];


export default function RelatedProducts() {
  return (
    <div className="saved-container">
      <h2 className="saved-title">Related Products</h2>

      <div className="saved-grid-four">
        {products.map((item) => (
          <div className="saved-card-four" key={item.id}>
            <div className="img-div-four">
              <img src={item.img} alt={item.title} className="saved-img-four" />
            </div>
            <p className="saved-desc-four">{item.title}</p>
             <p className="saved-price-four">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
