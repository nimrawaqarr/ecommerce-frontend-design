import React, { useState } from 'react';
import './CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'T-shirts with multiple colors, for men and lady',
      price: 78.99,
      qty: 9,
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Artel Market',
      image: '/images/pagefive/shirt.png',
    },
    {
      id: 2,
      title: 'T-shirts with multiple colors, for men and lady',
      price: 39.00,
      qty: 3,
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Best factory LLC',
      image: '/images/pagefive/bag.jpg',
    },
    {
      id: 3,
      title: 'T-shirts with multiple colors, for men and lady',
      price: 170.5,
      qty: 1,
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Artel Market',
      image: '/images/pagefive/lapm.jpg',
    },
  ]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = 80;
  const tax = 14;
  const total = subtotal - discount + tax;

  return (
    <div className="cart-container">
      <h2>My cart ({cartItems.length})</h2>

      <div className="cart-content">

        <div className="cart-items">
          {cartItems.map((item, index) => (
              <div className="cart-item" key={item.id}>
                <div className="image-top cart-item-top">
                  <img src={item.image} alt="product" />
                </div>

                <div className="item-info">
                  <h4 className="card-heading">{item.title}</h4>
                  <p>Size: {item.size}, Color: {item.color}, Material: {item.material}</p>
                  <p className="seller">Seller: {item.seller}</p>
                  <div className="actions">
                    <button className="remove-btn">Remove</button>
                    <button className="save-btn">Save for later</button>
                  </div>
                </div>

                <div className="item-right">
                  <span className="price">
                    ${(item.price * item.qty).toFixed(2)}
                  </span>

                  <div className="qty-select-wrapper qty-group">
                    <select
                      className="qty-dropdown"
                      value={item.qty}
                      onChange={(e) => {
                        const newQty = parseInt(e.target.value);
                        const updatedItems = [...cartItems];
                        updatedItems[index].qty = newQty;
                        setCartItems(updatedItems);
                      }}
                    >
                      <option value={item.qty} hidden>
                        Qty: {item.qty}
                      </option>
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <i className="fa-solid fa-chevron-down fa-icon"></i>
                  </div>

                </div>
              </div>
            ))}

          <div className="bottom-actions">
            <button className="back-btn">
              <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i> Back to shop</button>
            <button className="remove-all-btn" onClick={() => setCartItems([])}> Remove all </button>

          </div>
        </div>


        <div className="cart-summary">

          <div className="coupon">
            <p>Have a coupon?</p>
            <div className="coupon-input">
              <input type="text" placeholder="Add coupon" />
              <button>Apply</button>
            </div>
          </div>

          <div className="summary">
            <div><span>Subtotal:</span><span>${subtotal.toFixed(2)}</span></div>
            <div><span>Discount:</span><span className="green">- ${discount.toFixed(2)}</span></div>
            <div><span>Tax:</span><span className="red">+ ${tax.toFixed(2)}</span></div>
            <div className="total"><span>Total:</span><span className="total-price">${total.toFixed(2)}</span></div>
            <button className="checkout-btn">Checkout</button>
            <div className="payments">
              <img src="/images/pagefive/img1.jpg" alt="American Express" />
              <img src="/images/pagefive/img2.jpg" alt="Mastercard" />
              <img src="/images/pagefive/img3.jpg" alt="Pay Pal" />
              <img src="/images/pagefive/img4.jpg" alt="Visa" />
              <img src="/images/pagefive/img5.png" alt="Apple Pay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
