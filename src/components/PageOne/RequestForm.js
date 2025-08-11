import React, { useState } from 'react';
import './RequestForm.css';

const RequestForm = () => {
  const [item, setItem] = useState('');
  const [details, setDetails] = useState('');
  const [quantity, setQuantity] = useState('');

  const [showTooltip, setShowTooltip] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!item.trim()) {
      setErrorMessage("Item is required");
      setShowTooltip(false);
      return;
    }

    if (!quantity.trim() || isNaN(quantity) || Number(quantity) <= 0) {
      setErrorMessage("Enter a valid quantity (number > 0)");
      setShowTooltip(false);
      return;
    }

    // If valid, proceed
    console.log('Request submitted:', { item, details, quantity });

    setErrorMessage('');
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  return (
    <div className="request-section">
      <div className="overlay">
        <img
          src="/images/pageone/request2.png"
          className="bg-form-img"
          alt="Background"
        />
        <div className="request-content">
          <div className="request-left">
            <h1>An easy way to send <br />requests to all suppliers</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod tempor incididunt.</p>
          </div>

          <div className="request-right">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <h5>Send quote to suppliers</h5>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                  placeholder="What item you need?"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Type more details"
                  className='txt-placeholder'
                />
              </div>

              <div className="form-group quantity-row">
                <div className="quantity-input">
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Quantity"
                    required
                  />
                </div>

                <div className="unit-dropdown">
                  <select>
                    <option value="pcs">Pcs</option>
                    <option value="kg">Kg</option>
                    <option value="litre">Litre</option>
                  </select>
                </div>
              </div>

              <div className="subscribe-wrapper">
                <button type="submit">
                  Send inquiry
                </button>
                {showTooltip && <div className="tooltip">Inquiry Sent Successful</div>}
                {/* {errorMessage && <div className="error-message">{errorMessage}</div>} */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
