import React, { useState } from 'react';
import '../styles/Navbar.css';
import { FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* El logo será agregado a través del CSS */}
      </div>

      <div className="navbar-search">
        <div className="search-container">
          <input type="text" placeholder="Buscar instrumentos..." className="search-input" />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Ícono hamburguesa para móvil */}
      <div className="menu-toggle" onClick={handleToggleMenu}>
        <FaBars />
      </div>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="/percusion">Percusión</a></li>
        <li><a href="/cuerda">Cuerda</a></li>
        <li><a href="/viento">Viento</a></li>
        <li><a href="/accesorios">Accesorios</a></li>
        <li><a href="/login" className="login-link">Iniciar</a></li>
        <li className="cart-icon">
          <a href="/cart">
            <FaShoppingCart />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
