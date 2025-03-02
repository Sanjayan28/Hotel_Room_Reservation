import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="Heading">Register</h1>
        {/* <h2>Register</h2> */}
        <form className="register-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input-field"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input-field"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input-field"
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="input-field"
          />
          <Link to="/home">
            <button className="register-button">Register</button>
          </Link>
          <p className="login-link">
            Already have an account?{" "}
            <Link to="/login" className="login-text">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
