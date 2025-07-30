import React from "react";
import "./ExtraServices.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArchive ,
  faTruckFast,
  faClipboardCheck
} from "@fortawesome/free-solid-svg-icons";


const services = [
  {
    id: 1,
    title: "Source from Industry Hubs",
    image: "/images/pageone/extraimg/source.png",
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" color="#1C1C1C" />,
  },
  {
    id: 2,
    title: "Customize Your Products",
    image: "/images/pageone/extraimg/customized.png",
    alt: "Close up of colorful printed fan of swatch cards",
    icon: <FontAwesomeIcon icon={faArchive } size="lg" color="#1C1C1C"/>,
     icon: (
    <img
      src="/images/pageone/extraimg/icon/icon2.jpg"
      alt="icon"
      style={{ width: "24px", height: "24px", objectFit: "contain" }}
    />
  ),
  },
  {
    id: 3,
    title: "Fast, reliable shipping by ocean or air",
    image: "/images/pageone/extraimg/plane.png",
    alt: "Commercial airplane flying over shipping containers",
    icon: (
    <img
      src="/images/pageone/extraimg/icon/icon3.jpg"
      alt="icon"
      style={{ width: "24px", height: "24px", objectFit: "contain" }}
    />
  ),
  },
  {
    id: 4,
    title: "Product monitoring and inspection",
    image: "/images/pageone/extraimg/product.png",
    alt: "Warehouse worker inspecting products",
    icon: (
    <img
      src="/images/pageone/extraimg/icon/icon4.jpg"
      alt="icon"
      style={{ width: "24px", height: "24px", objectFit: "contain" }}
    />
  ),
  },
];

const ExtraServices = () => {
  return (
    <div className="extra-services">
      <h5 className="extra-heading">Our extra services</h5>
      <div className="extra-grid">
        {services.map(({ id, title, image, alt, icon }) => (
          <div key={id} className="extra-card">
            <div className="image-wrapper">
              <img
                src={image}
                alt={alt}
                className="card-image"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <div className="image-overlay" /> {/* Add this line */}

              <div className="icon-circle" aria-hidden="true">
                {icon}
              </div>
            </div>
            <p className="card-title">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraServices;
