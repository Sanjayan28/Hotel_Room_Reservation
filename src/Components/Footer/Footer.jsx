import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
            <div className="footer-subsec">
          <h2>Contact</h2>
          <p>Thamel Boutique Hotel</p>
          <p>Bhagwati Marg, Thamel, 44600</p>
          <p>Kathmandu, Nepal</p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              APC@thamelboutiquehotels.com
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              +94 771234567
            </li>
          </ul>
          </div>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <img src={assets.logo} alt=""  className="footer-logo"/>
          <h2>Thank you for your valuable time</h2>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faTiktok} /></a>
          </div>
        </div>
      </div>
      <div className="footer-last">
      <hr />
      <p className="footer-copyright">Developed by: Hello technology</p>
    </div>
    </div>
  );
};

export default Footer;
