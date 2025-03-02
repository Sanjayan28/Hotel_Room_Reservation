import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="Heading">Log In</h1>
        {/* <h2>Register</h2> */}
        <form className="login-form">
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
          <p className="forgot-text">Forgot Password ?</p>
          <button onClick={handleLogin} className="login-button">
            Log In
          </button>

          <p className="register-link">
            Don't have an account?{" "}
            <Link to="/register" className="register-text">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
