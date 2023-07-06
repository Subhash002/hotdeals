import React from "react";
import logo from "../assets/logodeal.png";
const Header = () => {
  return (
    <header>
      <div className="text-container">
        <h1>Fire Deals</h1>
        <p>{new Date().toString().slice(0, 10)}</p>
      </div>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
