import React from "react";
import "./Header.css";

const Header = ({ bannerImage, heading, description }) => {
  return (
    <div className="Header-sec">
      {/* Background Image */}
      <img src={bannerImage} alt="Banner" className="Homepage-banner" />

      {/* Overlay */}
      <div className="shadow-section"></div>

      {/* Content */}
      <div className="content">
        <h1 className="content-heading">{heading}</h1>
        <p className="content-para">{description}</p>
        <button className="home-banner-btn">Book Now</button>
      </div>
    </div>
  );
};

export default Header;
