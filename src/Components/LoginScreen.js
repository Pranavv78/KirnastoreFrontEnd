import React from "react";
import "./LoginScreen.css"; // Import the CSS
import { FaUser } from "react-icons/fa";

const LoginScreen = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="icon">
          <FaUser className="user-icon" />
        </div>
        <h2 className="login-title">Login</h2>

        <form className="login-form">
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Enter your username" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-button">Login</button>

          <div className="create-account">
            Don't have an account? <a href="#">Create Account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
