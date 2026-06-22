import React from "react";
import Logo from "../../../public/logo2025.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__brand">
          <img src={Logo} alt="Logo CPCS" className="header__logo" />

          <div className="header__text">
            <span className="header__subtitle">Proceso institucional</span>
            <h1>
              Admisiones <strong>2027</strong>
            </h1>
            <p>Colegio Panamericano Colombo Sueco</p>
          </div>
        </div>

        <a
          href="https://colombosueco.com/"
          className="header__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Volver CPCS
        </a>
      </div>
    </header>
  );
};

export default Header;