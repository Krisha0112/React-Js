import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <span className="logo">🍴</span>
        <div className="branding">
          <h1>ApiHunter</h1>
          <p>Call us: +91-98765-43210</p>
        </div>
      </div>

      <nav className="nav-links">
        <Link >Home</Link>
        <Link to="/">Recipes</Link>
        <Link to="/users">Users</Link>
      </nav>
    </header>
  );
};

export default Header;
