import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img
        className="header_logo"
        alt="logo"
        src="https://image.shutterstock.com/z/stock-vector-abstract-initial-letter-c-and-o-linked-logo-blue-gradient-circular-rounded-infinity-style-with-1728284956.jpg"
      />
      <Link to="/" className="header_link">
        <div className="header_option">
          <span className="header_lineOne">Hello, User</span>
          <span className="header_lineTwo">Sign In or Sign Out</span>
        </div>
      </Link>
    </nav>
  );
};

export default Header;
