import React from "react";
import Logo from "/logo.png"; // Asegúrate de usar el logo correcto
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={Logo} alt="Logo" className="logo-img" />
        <h2>
          Admisiones 2025 <span>CPCS</span>
        </h2>
      </div>
      <div className="header_link_return">
        <a href="https://colombosueco.com/" className="header-link">
          Volver CPCS
        </a>
      </div>
    </header>
  );
};

export default Header;
