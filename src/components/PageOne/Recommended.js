import React from "react";
import "./Recommended.css"; // Import the CSS

const items = [
  {
    id: 1,
    price: "$10.30",
    description: "T-shirts with multiple colors, for men",
    imgSrc: "/images/pageone/recommended/shirt.png",
    alt: "Blue polo T-shirt with collar on white background",
  },
  {
    id: 2,
    price: "$10.30",
    description: "Jeans shorts for men blue color",
    imgSrc: "/images/pageone/recommended/jacket.jpg",
    alt: "Brown winter coat jacket with hood laid flat on white background",
  },
  {
    id: 3,
    price: "$12.50",
    description: "Brown winter coat medium size",
    imgSrc: "/images/pageone/recommended/coat.png",
    alt: "Blue suit jacket with white shirt background, men fashion",
  },
  {
    id: 4,
    price: "$34.00",
    description: "Jeans bag for travel for men",
    imgSrc: "/images/pageone/recommended/file.png",
    alt: "Dark blue leather wallet on white background",
  },
  {
    id: 5,
    price: "$99.00",
    description: "Leather wallet",
    imgSrc: "/images/pageone/recommended/bag.png",
    alt: "Blue denim backpack with straps on white background",
  },
  {
    id: 6,
    price: "$9.99",
    description: "Canon camera black, 100x zoom",
    imgSrc: "/images/pageone/recommended/skirt.png",
    alt: "Folded pair of blue denim jeans laying flat",
  },
  {
    id: 7,
    price: "$8.99",
    description: "Headset for gaming with mic",
    imgSrc: "/images/pageone/recommended/headphone.png",
    alt: "White wireless over-ear headphones isolated on white background",
  },
  {
    id: 8,
    price: "$10.30",
    description: "Smartwatch silver color modern",
    imgSrc: "/images/pageone/recommended/bag.png",
    alt: "Blue denim backpack with front pocket and straps",
  },
  {
    id: 9,
    price: "$10.30",
    description: "Blue wallet for men leather metarfial",
    imgSrc: "/images/pageone/recommended/pot.png",
    alt: "Round brown handmade clay pot with lid on white background",
  },
  {
    id: 10,
    price: "$80.95",
    description: "Jeans bag for travel for men",
    imgSrc: "/images/pageone/recommended/kattle.png",
    alt: "Black electric coffee kettle with silver top isolated on white background",
  },
];

const Recommended= () => {
  return (
    <section className="recommended-section">
      <h4 className="recommended-title">Recommended items</h4>
      <div className="recommended-grid">
        {items.map(({ id, price, description, imgSrc, alt }) => (
          <div className="recommended-card" key={id}>
            <img
              src={imgSrc}
              alt={alt}
              className="recommended-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/260ad5cb-a800-4466-b6be-c5f74d263de9.png";
              }}
            />
            <div className="recommended-price">{price}</div>
            <div className="recommended-description">{description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommended;
