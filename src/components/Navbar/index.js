import React from "react";
import "../../theme/Colors.scss";
import "./style.scss";
import logo from '../../assets/logo.webp';

const Header = () => {
  return (
    <header className="navbar">
      <div className="container">
        <img src={logo} alt="Yemeksepeti" />
      </div>
    </header>
  );
};

export default Header;
