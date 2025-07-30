import React from 'react';
import './Suppliers.css';

const suppliers = [
  { country: 'Arabic Emirates', url: 'shopname.ae', code: 'ae' },
  { country: 'Australia', url: 'shopname.au', code: 'au' },
  { country: 'United States', url: 'shopname.us', code: 'us' },
  { country: 'Russia', url: 'shopname.ru', code: 'ru' },
  { country: 'Italy', url: 'shopname.it', code: 'it' },
  { country: 'Denmark', url: 'denmark.dk', code: 'dk' },
  { country: 'France', url: 'shopname.fr', code: 'fr' },
  { country: 'China', url: 'shopname.cn', code: 'cn' },
  { country: 'Germany', url: 'shopname.de', code: 'de' },
  { country: 'Great Britain', url: 'shopname.co.uk', code: 'gb' },
];

const Suppliers = () => {
  return (
    <div className="suppliers-container">
      <h5 className='countries'>Suppliers by region</h5>
      <div className="suppliers-grid">
        {suppliers.map((supplier, index) => (
          <div key={index} className="supplier-item">
            <img
              src={`https://flagcdn.com/w40/${supplier.code}.png`}
              alt={supplier.country}
              className="flag-img"
            />
            <div className="supplier-info">
              <div className="country">{supplier.country}</div>
              <div className="url">
            <a
            className="url"
            href={`https://${supplier.url}`}
            target="_blank"
            rel="noopener noreferrer"
            >
            {supplier.url}
            </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suppliers;
