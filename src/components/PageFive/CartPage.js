import React, { useState } from 'react';
import './CartPage.css';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, setCartItems }) => {
  const [couponInput, setCouponInput] = useState('');
  const [couponMessage, setCouponMessage] = useState('');
  const [isCouponValid, setIsCouponValid] = useState(false);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = 80;
  const tax = 14;
  const total = subtotal - discount + tax;

  const handleRemoveItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
  };

const handleApplyCoupon = () => {
  const isNumeric = /^\d+$/.test(couponInput); // Only digits
  const isValid = isNumeric && couponInput.length >= 6;

  if (isValid) {
    setIsCouponValid(true);
    setCouponMessage('Coupon applied successfully!');
  } else {
    setIsCouponValid(false);
    setCouponMessage('Please enter a valid coupon (at least 6 digits)');
  }

  setTimeout(() => {
    setCouponMessage('');
  }, 1500);
};


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
                  <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </button>
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
            <Link to="/page-four" className="back-btn">
              <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i> Back to shop
            </Link>
            <button className="remove-all-btn" onClick={() => setCartItems([])}>
              Remove all
            </button>
          </div>
        </div>

        <div className="cart-summary">
          <div className="coupon">
            <p>Have a coupon?</p>
            <div className="coupon-input">
              <input
                type="text"
                placeholder="Add coupon"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value)}
              />

              <button className="coupon-btn" onClick={handleApplyCoupon}>
                Apply
              </button>
            </div>
            {couponMessage && (
              <p className={isCouponValid ? "coupon-success" : "coupon-error"}>
                {couponMessage}
              </p>
            )}
          </div>

          <div className="summary">
            <div><span>Subtotal:</span><span>${subtotal.toFixed(2)}</span></div>
            <div><span>Discount:</span><span className="green">- ${discount.toFixed(2)}</span></div>
            <div><span>Tax:</span><span className="red">+ ${tax.toFixed(2)}</span></div>
            <div className="total"><span>Total:</span><span className="total-price">${total.toFixed(2)}</span></div>

            <button
              className="checkout-btn"
              onClick={() => {
                setCheckoutMessage('Checkout completed successfully!');
                setTimeout(() => {
                  setCheckoutMessage('');
                }, 2000);
              }}
            >
              Checkout
            </button>

            {checkoutMessage && (
              <p className="coupon-success">{checkoutMessage}</p>
            )}

            <div className="payments">
              <a href="https://www.americanexpress.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/pagefive/img1.jpg" alt="American Express" />
              </a>
              <a href="https://www.mastercard.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/pagefive/img2.jpg" alt="Mastercard" />
              </a>
              <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/pagefive/img3.jpg" alt="PayPal" />
              </a>
              <a href="https://www.visa.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/pagefive/img4.jpg" alt="Visa" />
              </a>
              <a href="https://www.apple.com/apple-pay/" target="_blank" rel="noopener noreferrer">
                <img src="/images/pagefive/img5.png" alt="Apple Pay" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
