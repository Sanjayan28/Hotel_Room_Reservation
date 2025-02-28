import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
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
        <button>Log In</button>
      </div>
    </div>
  );
};

export default Navbar;
