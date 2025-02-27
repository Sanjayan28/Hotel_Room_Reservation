import React from "react";
import "./Header.css";
import {assets} from "../../assets/assets"

const Header = () => {
  return (
    // <div className="Header">
    //   <div className="header-contents"></div>
    // </div>
    <div className="Header-sec">
      {/* Background Image */}
      <img src={assets.banner1} alt="" className="Homepage-banner" />

      {/* Overlay */}
      <div className="shadow-section"></div>

      {/* Content */}
      <div className="content">
        <h1 className="content-heading">
          Welcome to Thamel Boutique Hotel
        </h1>
        <p className="content-para">
          Experience luxury and comfort in the heart of Thamel.
        </p>
        <button className="home-banner-btn">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Header;
