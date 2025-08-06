import React, { useState, useEffect, useRef } from 'react';
import './SubNavbar.css';

const SubNavbar = () => {
  const [showHelpDropdown, setShowHelpDropdown] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showFlagDropdown, setShowFlagDropdown] = useState(false);
  
  const [menuOpen, setMenuOpen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setMenuOpen(true);
        } else {
          setMenuOpen(false);
        }
      };

      window.addEventListener('resize', handleResize);
      
      // Call once on mount in case window size changes before user interacts
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);


  const [selectedLocale, setSelectedLocale] = useState('English, USD');
  const [selectedFlag, setSelectedFlag] = useState('de'); // default: Germany

  const flagOptions = ['de', 'us', 'fr', 'in', 'pk'];
  const helpRef = useRef(null);
  const langRef = useRef(null);
  const flagRef = useRef(null);

  const handleLocaleSelect = (locale) => {
    setSelectedLocale(locale);
    setShowLangDropdown(false); // Close dropdown after selection
  };

  const handleFlagSelect = (code) => {
  setSelectedFlag(code);
  setShowFlagDropdown(false);
};

useEffect(() => {
  const handleClickOutside = (event) => {
    if (helpRef.current && !helpRef.current.contains(event.target)) {
      setShowHelpDropdown(false);
    }
    if (langRef.current && !langRef.current.contains(event.target)) {
      setShowLangDropdown(false);
    }
    if (flagRef.current && !flagRef.current.contains(event.target)) {
      setShowFlagDropdown(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);




  return (
    <div className="subnavbar">
      {/* Left side menu */}
      <div className="subnavbar-left">

        {/* <div className="menu-icon">
             <i className="fas fa-bars"></i>
        </div> */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fas fa-bars"></i>
      </div>

        <nav className={`subnav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#">All category</a>
          <a href="#">Hot offers</a>
          <a href="#">Gift boxes</a>
          <a href="#">Projects</a>
          <a href="#">Menu item</a>

          <div className="dropdown" ref={helpRef} onClick={() => setShowHelpDropdown(!showHelpDropdown)}>
            <span>
              Help <i className="fas fa-chevron-down small-arrow"></i>
            </span>
            {showHelpDropdown && (
              <div className="dropdown-menu">
                <a href="#">Support</a>
                <a href="#">Contact</a>
                <a href="#">FAQs</a>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Right side language & flag */}
      <div className="subnavbar-right" > 
        <div className="dropdown" ref={langRef} 
         onClick={() => setShowLangDropdown(!showLangDropdown)}>
          <span>
            {selectedLocale} <i className="fas fa-chevron-down small-arrow"></i>
          </span>

          {showLangDropdown && (
            <div className="dropdown-menu">
              <div onClick={() => handleLocaleSelect('English, USD')}>English, USD</div>
              <div onClick={() => handleLocaleSelect('Francais, EUR')}>Francais, EUR</div>
              <div onClick={() => handleLocaleSelect('Deutsch, EUR')}>Deutsch, EUR</div>
            </div>
          )}
        </div>


    {/* Flag Dropdown */}
    <div className="dropdown" ref={flagRef}>
      <div className="ship-to" onClick={() => setShowFlagDropdown(!showFlagDropdown)}>
        <span>Ship to</span>
        <img
          src={`https://flagcdn.com/w40/${selectedFlag}.png`}
          alt="Flag"
          className="flag-icon-lan"
        />
        <i className="fas fa-chevron-down small-arrow-flag"></i>
      </div>

      {showFlagDropdown && (
        <div className="dropdown-menu flags-only">
          {flagOptions.map((code) => (
            <div
              key={code}
              className="dropdown-flag-item"
              onClick={() => handleFlagSelect(code)}
            >
              <img
                src={`https://flagcdn.com/w40/${code}.png`}
                alt="Flag"
                className="flag-icon-lan"
              />
            </div>
          ))}
        </div>
      )}
    </div>


      </div>
    </div>
  );
};

export default SubNavbar;
