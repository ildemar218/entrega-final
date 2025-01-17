import React from 'react';
import logo from '../assets/img/pikachu.png';

const Header = () => (
  <header className="bg-danger text-white text-center py-3">
    <img src={logo} alt="Logo" width="50" className="d-inline-block" />
    <h1>Pokemon</h1>
  </header>
);

export default Header;
