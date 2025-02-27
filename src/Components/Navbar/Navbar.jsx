import React, { useState } from "react";
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
          Home
        </li>
        <li
          onClick={() => setMenu("About Us")}
          className={menu === "About Us" ? "active" : ""}
        >
          About Us
        </li>
        <li
          onClick={() => setMenu("Rooms")}
          className={menu === "Rooms" ? "active" : ""}
        >
          Rooms
        </li>
        <li
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      {/* <div className="navbar-right">
        <ul className="navbar-right-side">
          <li>Log In</li>
        </ul>
      </div> */}
      <div>
        <button>log In</button>
      </div>
    </div>
  );
};

export default Navbar;
