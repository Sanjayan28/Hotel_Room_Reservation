import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className={`navbar-menu1 ${mobileMenu ? "show-mobile-menu" : ""}`}>
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setMenu("About")}
          className={menu === "About" ? "active" : ""}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          onClick={() => setMenu("Room")}
          className={menu === "Room" ? "active" : ""}
        >
          <Link to="/room">Room</Link>
        </li>
        <li
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div>
        <Link to="/login">
          <button>Log In</button>
        </Link>
      </div>
      <div
        className={`menu-icon ${mobileMenu ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
};

export default Navbar;
