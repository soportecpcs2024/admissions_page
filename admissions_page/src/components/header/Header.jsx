import React from 'react';
import Logo from '/logo.png'; // Asegúrate de usar el logo correcto
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={Logo} alt="Logo" className="logo-img" />
        <h2>Admisiones 2025 CPCS</h2>
      </div>
      <a href="https://colombosueco.com/" className="header-link">Volver CPCS</a>
    </header>
  );
}

export default Header;
