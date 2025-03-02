import React from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="Heading">Register</h1>
        <form className="register-form" onSubmit={handleRegister}>
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
          <button type="submit" className="register-button">
            Register
          </button>
          <p className="login-link">
            Already have an account?{" "}
            <a href="/login" className="login-text">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
