import React, { useState } from "react";
import "./Recommendations.css"; // Separate CSS file

const Recommendations = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = ["Description", "Reviews", "Shipping", "About seller"];

  const renderContent = () => {
    switch (activeTab) {
      case "Description":
        return (
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, 
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, <br />
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>

            <table className="product-table">
              <tbody>
                <tr>
                  <td>Model</td>
                  <td>#8786867</td>
                </tr>
                <tr>
                  <td>Style</td>
                  <td>Classic style</td>
                </tr>
                <tr>
                  <td>Certificate</td>
                  <td>ISO-889321212</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>34mm x 450mm x 19mm</td>
                </tr>
                <tr>
                  <td>Memory</td>
                  <td>36GB RAM</td>
                </tr>
              </tbody>
            </table>

            <ul className="feature-list">
              <li>✔  Some great feature name here</li>
              <li>✔  Lorem ipsum dolor sit amet, consectetur</li>
              <li>✔  Duis aute irure dolor in reprehenderit</li>
              <li>✔  Some great feature name here</li>
            </ul>
          </>
        );
      case "Reviews":
        return <p>Customer reviews will be shown here.</p>;
      case "Shipping":
        return <p>Shipping information will be displayed here.</p>;
      case "About seller":
        return <p>Information about the seller will appear here.</p>;
      default:
        return null;
    }
  };

  const recommendations = [
    {
      img: "/images/pagefour/description/img1.png",
      title: "Men Blazers Sets Elegant Formal",
      price: "$7.00 - $99.50",
    },
    {
      img: "/images/pagefour/description/img2.png",
      title: "Men Shirt Sleeve Polo Contrast",
      price: "$7.00 - $99.50",
    },
    {
      img: "/images/pagefour/description/img3.jpg",
      title: "Apple Watch Series Space Gray",
      price: "$7.00 - $99.50",
    },
    {
      img: "/images/pagefour/description/img4.png",
      title: "Basketball Crew Socks Long Stuff",
      price: "$7.00 - $99.50",
    },
    {
      img: "/images/pagefour/description/img5.png",
      title: "New Summer Men's casual T-Shirts",
      price: "$7.00 - $99.50",
    },
  ];

  return (
    <div className="recommendations-container">

      {/* Left Section */}
      <div className="left-section">
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="tab-content">{renderContent()}</div>
      </div>


      {/* Right Sidebar */}
      <div className="right-sidebar">
        <h4>You may like</h4>
        {recommendations.map((item, index) => (
          <div key={index} className="recommendation-item">
            <img src={item.img} alt={item.title} className="img-recom"/>
            <div>
              <p>{item.title}</p>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
