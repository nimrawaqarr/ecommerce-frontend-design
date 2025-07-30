import React, { useState, useRef, useEffect } from 'react';
import './FooterLine.css';

const FooterLine = () => {

  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState({ code: 'us', label: 'English' });
  const langRef = useRef(null);

  const languages = [
    { code: 'us', label: 'English' },
    { code: 'fr', label: 'Francais' },
    { code: 'de', label: 'Deutsch' },
    { code: 'es', label: 'Espanol' }
  ];

  const toggleDropdown = () => {
    setShowLangDropdown(!showLangDropdown);
  };

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setShowLangDropdown(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setShowLangDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <div className="footer-line">
      <div className="footer-sub-left">
        © 2023 Ecommerce.
      </div>

      <div className="footer-sub-right" ref={langRef} onClick={toggleDropdown}>
      <img
        src={`https://flagcdn.com/w20/${selectedLang.code}.png`}
        alt={`${selectedLang.label} Flag`}
        className="flag-icon"
      />
      <span className="language-text">{selectedLang.label}</span>
      <i className={`fas fa-chevron-${showLangDropdown ? 'down' : 'up'} arrow-icon`}></i>

      {showLangDropdown && (
        <div className="dropdown-menu footer-dropdown">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="dropdown-item"
              onClick={() => handleSelect(lang)}
            >
              <img
                src={`https://flagcdn.com/w20/${lang.code}.png`}
                alt={lang.label}
                className="flag-icon"
              />
              <span className="language-text">{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>


    </div>
  );
};

export default FooterLine;
