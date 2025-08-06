import React from 'react';
import './SuppliersProducts.css';
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';


const originalProducts  = [
  {
    image: '/images/pagetwo/image1.png',
    title: 'Canon Camera EOS 2000, Black 10x zoom'
  },
  {
    image: '/images/pagetwo/image2.png',
    title: 'GoPro HERO6 4K Action Camera - Black'
  },
  {
    image: '/images/pagetwo/image3.png',
    title: 'Sony Alpha ZV-E10 Mirrorless Vlog Camera'
  },
  {
    image: '/images/pagetwo/image4.png',
    title: 'Nikon D7500 DSLR with 18-140mm Lens Kit'
  },
  {
    image: '/images/pagetwo/image5.png',
    title: 'Panasonic Lumix G7 4K Mirrorless Camera'
  },
  {
    image: '/images/pagetwo/image6.png',
    title: 'Fujifilm X-T30 II Compact Mirrorless Camera'
  }
];

// Generate 60 products total
const products = Array(60).fill().map((_, i) => ({
  ...originalProducts[i % originalProducts.length],
  title: `${originalProducts[i % originalProducts.length].title} #${i + 1}`
}));


const SuppliersProducts = () => {

    const [checked, setChecked] = useState(true);
    const [favorites, setFavorites] = useState({});

   const [minVal, setMinVal] = useState(0);
    const [maxVal, setMaxVal] = useState(9999);

    const handleMinChange = (e) => {
      const value = Math.min(+e.target.value, maxVal - 1);
      setMinVal(value);
    };

    const handleMaxChange = (e) => {
      const value = Math.max(+e.target.value, minVal + 1);
      setMaxVal(value);
    };


    const [itemsPerPage, setItemsPerPage] = useState(6);  // default: 6
    const [currentPage, setCurrentPage] = useState(1);    // default: page 1

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedProducts = products.slice(startIndex, endIndex);

    // Calculate how many pages you need.
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const [pageWindowStart, setPageWindowStart] = useState(1); // start of visible button range
    const windowSize = 3; // how many buttons to show

    const pageWindowEnd = Math.min(pageWindowStart + windowSize - 1, totalPages);

    const [sections, setSections] = useState({
    category: true,
    brands: true,
    features: true,
    price: true,
    condition: true,
    ratings: true
  });

    const toggleSection = (section) => {
      setSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    const toggleFavorite = (index) => {
      setFavorites((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    };


  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/page-three');
  };



  //Logic for filters selections/
    const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    brands: [],
    features: [],
    condition: '',
    ratings: [],
    manufacturer: [],
    });
  
  
  // For checkboxes (multiple selections)
  const handleCheckboxChange = (section, value) => {
    setSelectedFilters((prev) => {
      const currentValues = prev[section];
      return {
        ...prev,
        [section]: currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value],
      };
    });
  };
  
  // For radio buttons (single selection like condition)
  const handleRadioChange = (section, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [section]: value,
    }));
  };
  
  // For clearing all filters
  const clearAllFilters = () => {
    setSelectedFilters({
      categories: [],
      brands: [],
      features: [],
      condition: '',
      ratings: [],
      manufacturer: [],
    });
  };
  
  
  const removeFilter = (section, value) => {
    setSelectedFilters((prev) => {
      if (Array.isArray(prev[section])) {
        // For arrays like categories, brands, ratings, etc.
        return {
          ...prev,
          [section]: prev[section].filter((v) => v !== value),
        };
      } else {
        // For single-value filters like condition
        return {
          ...prev,
          [section]: '',
        };
      }
    });
  };
  
  
    


  return (
    <div className="suppliers-product-container">

      <aside className="filters">
      {/* <hr /> */}
      
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection('category')}>
          <h3>Category</h3>
          <i className={`fas ${sections.category ? 'fa-chevron-up' : 'fa-chevron-down'} caret`}></i>
        </div>
        {sections.category && (
          <ul>
            <li>Mobile accessory</li>
            <li>Electronics</li>
            <li>Smartphones</li>
            <li>Modern tech</li>
            <li className="see-all">See all</li>
          </ul>
        )}
      </div>

   
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection('brands')}>
          <h3>Brands</h3>
          <i className={`fas ${sections.brands ? 'fa-chevron-up' : 'fa-chevron-down'} caret`}></i>
        </div>
        {sections.brands && (
          <ul>
            <li><input type="checkbox"
                checked={selectedFilters.brands.includes("Samsung")}
                onChange={() => handleCheckboxChange("brands", "Samsung")}/> Samsung </li>
            <li><input type="checkbox"
                checked={selectedFilters.brands.includes("Apple")}
                onChange={() => handleCheckboxChange("brands", "Apple")}/> Apple </li>
            <li><input type="checkbox"
                checked={selectedFilters.brands.includes("Huawei")}
                onChange={() => handleCheckboxChange("brands", "Huawei")}/> Huawei </li>                
            <li><input type="checkbox"
                checked={selectedFilters.brands.includes("Pocco")}
                onChange={() => handleCheckboxChange("brands", "Pocco")}/> Pocco </li>
            <li><input type="checkbox"
                checked={selectedFilters.brands.includes("Lenovo")}
                onChange={() => handleCheckboxChange("brands", "Lenovo")}/> Lenovo </li>

            <li className="see-all">See all</li>
          </ul>
        )}
      </div>

      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection('features')}>
          <h3>Features</h3>
          <i className={`fas ${sections.features ? 'fa-chevron-up' : 'fa-chevron-down'} caret`}></i>
        </div>
        {sections.features && (
          <ul>
            <li><input type="checkbox"
                checked={selectedFilters.features.includes("Metallic")}
                onChange={() => handleCheckboxChange("features", "Metallic")}/> Metallic </li>
             <li><input type="checkbox"
                checked={selectedFilters.features.includes("Plastic Cover")}
                onChange={() => handleCheckboxChange("features", "Plastic Cover")}/> Plastic Cover </li>
             <li><input type="checkbox"
                checked={selectedFilters.features.includes("8GB Ram")}
                onChange={() => handleCheckboxChange("features", "8GB Ram")}/> 8GB Ram </li>
              <li><input type="checkbox"
                checked={selectedFilters.features.includes("Super Power")}
                onChange={() => handleCheckboxChange("features", "Super Power")}/> Super Power </li>
              <li><input type="checkbox"
                checked={selectedFilters.features.includes("Large memory")}
                onChange={() => handleCheckboxChange("features", "Large memory")}/> Large memory</li>

            <li className="see-all">See all</li>
          </ul>
        )}
      </div>

    
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection('price')}>
          <h3>Price range</h3>
          <i className={`fas ${sections.price ? 'fa-chevron-up' : 'fa-chevron-down'} caret`}></i>
        </div>
        {sections.price && (
          <div className="price-range">

              <div className="double-slider">
                  <input
                    type="range"
                    min="0"
                    max="9999"
                    value={minVal}
                    onChange={handleMinChange}
                    className="range-slider min-range"
                  />
                  <input
                    type="range"
                    min="0"
                    max="9999"
                    value={maxVal}
                    onChange={handleMaxChange}
                    className="range-slider max-range"
                  />
                </div>

              <div className="min-max-inputs">
                <div>
                  <label>Min</label>
                  <input type="text" value={minVal} onChange={handleMinChange} />
                </div>
                <div>
                  <label>Max</label>
                  <input type="text" value={maxVal} onChange={handleMaxChange} />
                </div>
              </div>

              <button className="btn-apply">Apply</button>
            </div>

        )}
      </div>

     
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection('condition')}>
          <h3>Condition</h3>
          <i className={`fas ${sections.condition ? 'fa-chevron-up' : 'fa-chevron-down'} caret`}></i>
        </div>
        {sections.condition && (
          <ul>

            <li> <input type="radio" name="condition"
                checked={selectedFilters.condition === "Any"}
                onChange={() => handleRadioChange("condition", "Any")} /> Any </li>
            <li> <input type="radio" name="condition"
                checked={selectedFilters.condition === "Refurbished"}
                onChange={() => handleRadioChange("condition", "Refurbished")} /> Refurbished </li>
            <li> <input type="radio" name="condition"
                checked={selectedFilters.condition === "Brand new"}
                onChange={() => handleRadioChange("condition", "Brand new")} /> Brand new </li>
            <li> <input type="radio" name="condition"
                checked={selectedFilters.condition === "Old items"}
                onChange={() => handleRadioChange("condition", "Old items")} /> Old items </li>
          </ul>
        )}
      </div>

      
      <div className="filter-section">
          <div className="filter-header" onClick={() => toggleSection('ratings')}>
            <h3>Ratings</h3>
            <i className={`fas ${sections.ratings ? 'fa-chevron-up' : 'fa-chevron-down'} caret`}></i>
          </div>
          {sections.ratings && (
            <ul className="rating-list">

            <li><input type="checkbox"
                checked={selectedFilters.ratings.includes("5 star")}
                onChange={() => handleCheckboxChange("ratings", "5 star")}/> 
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i> </li>

            <li><input type="checkbox"
                checked={selectedFilters.ratings.includes("4 star")}
                onChange={() => handleCheckboxChange("ratings", "4 star")}/> 
               <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i> </li>

            <li><input type="checkbox"
                checked={selectedFilters.ratings.includes("3 star")}
                onChange={() => handleCheckboxChange("ratings", "3 star")}/> 
                     <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i> </li>

            <li><input type="checkbox"
                checked={selectedFilters.ratings.includes("2 star")}
                onChange={() => handleCheckboxChange("ratings", "2 star")}/> 
                 <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i> </li>

            </ul>
          )}
        </div>

        {/* <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection('category')}>
          <h3>Menufacturer</h3>
          <i className={`fas ${sections.category ? 'fa-chevron-up' : 'fa-chevron-down'} caret`}></i>
        </div>
        {sections.category && (
          <ul>
            <li>Mobile accessory</li>
            <li>Electronics</li>
            <li>Smartphones</li>
            <li>Modern tech</li>
            <li className="see-all">See all</li>
          </ul>
        )}
      </div> */}

      
    </aside>




      <main className="products">
          <div className="top-row">
            <h2>12,911 items in <strong>Mobile accessory</strong></h2>

             <div className="right-controls">
            <div className="custom-checkbox-wrapper" onClick={() => setChecked(!checked)}>
                <div className={`custom-checkbox ${checked ? "checked" : ""}`}>
                  {/* {checked && <span className="tick">✔</span>} */}
                  {checked && <i className="fas fa-check tick"></i>}
                </div>
                <span className="label">Verified only</span>
            </div>

            <div className="select-wrapper">
                <select className="feature-select">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <i className="fas fa-chevron-down custom-arrow"></i>
            </div>

            <div className="top-icons">
              <div onClick={handleClick} className="custom-grid-icon">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <i className="fas fa-bars icon active"></i>
            </div>

          </div>
          </div>


        {Object.values(selectedFilters).some(val => Array.isArray(val) ? val.length > 0 : val) && (
        <div className="selected-filters">
          {Object.entries(selectedFilters).map(([section, values]) =>
            Array.isArray(values)
              ? values.map((val, idx) => (
                  <span key={`${section}-${idx}`} className="filter-chip">
                    {section === "ratings" ? `${val} Star` : val}
                    <i
                      className="fas fa-times chip-close"
                      onClick={() => removeFilter(section, val)}
                    ></i>
                  </span>
                ))
              : values && (
                  <span key={section} className="filter-chip">
                    {section === "ratings" ? `${values} Star` : values}
                    <i
                      className="fas fa-times chip-close"
                      onClick={() => removeFilter(section, values)}
                    ></i>
                  </span>
                )
          )}
          <button className="clear-filters-btn" onClick={clearAllFilters}>
            Clear all filter
          </button>
        </div>
      )}




        <div className="product-list-one">
              {displayedProducts.map((product, index) => (
                <div key={index} className="product-item-one">
                  <div className="image-container-one">
                    <Link to='/page-four'> <img src={product.image} alt={product.title} className="product-image-one" /> </Link>
                  </div>

            <div className="product-details-one">
              <Link to="/page-four" className='product-title-one'>{product.title}</Link>
              
              <div className="price-row-one">
                <span className="new-price-one">$998.00</span>
                <span className="old-price-one">$1128.00</span>
              </div>
              

        <div className="rating-row-one">
          <span className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </span>
          <span className="rating-value">7.5</span>
          <span className="dot">·</span>
          <span className="orders">154 orders</span>
          <span className="dot">·</span>
          <span className="shipping">Free Shipping</span>
        </div>

        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <Link to="/page-four" className='view-button'>View details</Link>
      </div>

      {/* <i className="far fa-heart fav-icon"></i> */}
      <i
        className={`${favorites[index] ? 'fas' : 'far'} fa-heart fav-icon`}
        onClick={() => toggleFavorite(index)}
      ></i>

    </div>
  ))}
</div>



        <div className="pagination-container">
          <div className="show-dropdown">
            <label htmlFor="itemsPerPage">Show</label>
            <select id="itemsPerPage" 
            defaultValue="10" 
            // value={itemsPerPage}
             onChange={(e) => {
            setItemsPerPage(parseInt(e.target.value));
            setCurrentPage(1); // reset to page 1 when items per page changes
            setPageWindowStart(1); // reset pagination window too
           }}>
              <option value={6}>6</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>

          <div className="pagination-controls">

            <button
                className="page-button"
                disabled={currentPage === 1}
                onClick={() => {
                  const newPage = currentPage - 1;
                  setCurrentPage(newPage);
                  if (newPage < pageWindowStart) {
                    setPageWindowStart(Math.max(newPage - windowSize + 1, 1));
                  }
                }}
              >
                <i className="fas fa-chevron-left"></i>
              </button>

            {/* <button className="page-button active">1</button>
            <button className="page-button">2</button>
            <button className="page-button">3</button> */}

            {Array.from({ length: pageWindowEnd - pageWindowStart + 1 }, (_, i) => {
                const pageNum = pageWindowStart + i;
                return (
                  <button
                    key={pageNum}
                    className={`page-button ${currentPage === pageNum ? 'active' : ''}`}
                    onClick={() => setCurrentPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                );
              })}

            <button
                className="page-button"
                disabled={currentPage === totalPages}
                onClick={() => {
                  const newPage = currentPage + 1;
                  setCurrentPage(newPage);
                  if (newPage > pageWindowEnd) {
                    setPageWindowStart(newPage);
                  }
                }}
              >
                <i className="fas fa-chevron-right"></i>
              </button>

          </div>
        </div>


      
      </main>
    </div>
  );
};

export default SuppliersProducts;
