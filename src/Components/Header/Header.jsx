import React from "react";
import "./Header.css";

const Header = ({ bannerImage, heading, description }) => {
  return (
    <div className="Header-sec">
      
      <img src={bannerImage} alt="Banner" className="Homepage-banner" />

      
      <div className="shadow-section"></div>

      
      <div className="content">
        <h1 className="content-heading">{heading}</h1>
        <p className="content-para">{description}</p>
        <button className="home-banner-btn">Book Now</button>
      </div>
    </div>
  );
};

export default Header;
