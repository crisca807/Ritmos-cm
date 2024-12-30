import React from 'react';
import '../styles/Navbar.css'; // Archivo CSS para estilos
import { FaShoppingCart, FaSearch } from 'react-icons/fa'; // Importa los íconos necesarios

const Navbar = () => {
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
      <ul className="navbar-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/percusion">Percusión</a></li>
        <li><a href="/cuerda">Cuerda</a></li>
        <li><a href="/viento">Viento</a></li>
        <li><a href="/accesorios">Accesorios</a></li>
        <li><a href="/login" className="login-link">Iniciar Sesión</a></li>
        {/* Ícono de carrillo */}
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
