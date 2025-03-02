import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate(); // Use the hook to navigate programmatically

  const handleLogin = () => {
    // Perform login logic here (optional)
    // After login, navigate to the home screen
    navigate("/");
  };

  return (
    <div className="login-screen">
      <h2>Log In</h2>
      {/* Example of a login form (simplified) */}
      <div className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button onClick={handleLogin}>Log In</button>
      </div>
      <div>
        {/* Link to navigate to Register screen */}
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  );
};

export default LogIn;
