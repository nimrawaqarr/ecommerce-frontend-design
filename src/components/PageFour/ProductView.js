import React, { useState } from "react";
import "./ProductView.css";

const ProductView = () => {

  const [showTooltip, setShowTooltip] = useState(false);

  const [saved, setSaved] = useState(false);
  const toggleSave = () => {
    setSaved((prev) => !prev);
  };

  const productImages = [
    "/images/pagefour/image1.jpg",
    "/images/pagefour/image2.jpg",
    "/images/pagefour/image3.jpg",
    "/images/pagefour/image4.jpg",
   "/images/pagefour/image5.jpg",
    "/images/pagefour/image6.jpg"
  ];

  const [mainImage, setMainImage] = useState(productImages[0]);

  return (
    <div className="product-view-container">
      {/* Left: Image Section */}
      <div className="product-images">
        <img src={mainImage} alt="Main Product" className="main-image" />
        <div className="thumbnail-row">
          {productImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${mainImage === img ? "active" : ""}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Right: Details Section */}
      <div className="product-details">
        <span className="in-stock">
            <i className="fas fa-check tick-stock" style={{ color: '#00B517' }}></i> In stock</span>
        <h2>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h2>
        
        <div className="rating">
            <span className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <span className="rating-score">9.3</span>
            </span>
            
            <span className="dot-d"></span>
            <span className="reviews">
                <i className="fas fa-comment-alt"></i> 32 reviews
            </span>
            <span className="dot-d"></span>
            <span className="sold">
                <i className="fas fa-shopping-cart"></i> 154 sold
            </span>
        </div>

        {/* Price Table */}
        <div className="price-box">
          <div>
            <strong className="price-red">$98.00</strong>
            <p>50-100 pcs</p>
          </div>
          <div>
            <strong>$90.00</strong>
            <p>100-700 pcs</p>
          </div>
          <div>
            <strong>$78.00</strong>
            <p>700+ pcs</p>
          </div>
        </div>


        {/* Product Info */}
        <ul className="product-info">
            <li><span className="label">Price:</span> Negotiable</li>
            <li><span className="label">Type:</span> Classic shoes</li>
            <li><span className="label">Material:</span> Plastic material</li>
            <li><span className="label">Design:</span> Modern nice</li>
            <li className="custom2"><span className="label custom-label">Customization:</span> Customized logo and 
            design custom packages</li>
            <li><span className="label">Protection:</span> Refund Policy</li>
            <li><span className="label">Warranty:</span> 2 years full warranty</li>
        </ul>

      </div>


      {/* Supplier Card */}
      <div>
      <div className="supplier-card">
        <div className="supplier-header">
            <div className="supplier-logo">
                <p className="r">R</p></div>
            <div className="supplier-info-txt">
                <p>Supplier</p>
                <p>Guanjoi Trading LLC</p>
            </div>
            </div>

        <div className="supplier-info">
            {/* <p className="flag-text">🇩🇪 Germany, Berlin</p> */}
            <p className="location"><img
                src="https://flagcdn.com/w20/de.png"
                alt="Germany"
                className="flag-icon-txt"
            /> Germany, Berlin</p>
            <p className="verified"><i className="fas fa-check-circle"></i> Verified Seller</p>
            <p className="shipping"><i className="fas fa-globe"></i> Worldwide shipping</p>
        </div>

        <div className="supplier-buttons">
            {/* <button className="inquiry-btn">Send inquiry</button> */}
            <div className="tooltip-container">
            <button
              className="inquiry-btn"
              onClick={() => {
                setShowTooltip(true);
                setTimeout(() => setShowTooltip(false), 3000); // hide after 3s
              }}
            >
              Send inquiry
            </button>

            {showTooltip && (
              <div className="tooltip-message">Inquiry sent successfully!</div>
            )}
          </div>


            <button className="profile-btn">Seller's profile</button>
        </div>
        </div>

        <div className="save-later" onClick={toggleSave}>
           <i className={`${saved ? 'fas' : 'far'} fa-heart`}></i> Save for later
        </div>
        </div>


    </div>
  );
};

export default ProductView;
