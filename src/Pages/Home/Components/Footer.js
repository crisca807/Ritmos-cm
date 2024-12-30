import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección de información de la tienda */}
        <div className="footer-section store-info">
          <div className="footer-logo"></div> {/* Clase CSS para el logo */}
          
          <p className="store-address">
            Carrera 57 #74-04 Polígono industrial - Bodega 114, Barrio Hortencia, Itagüí - Antioquia<br />
            Tel: 604-4442362 Ext. 114 y 122<br />
            ventas5@themusic-site.com
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon facebook"></a>
            <a href="#" className="social-icon instagram"></a>
            <a href="#" className="social-icon youtube"></a>
            <a href="#" className="social-icon tiktok"></a>
          </div>
        </div>

        {/* Sección de categorías populares */}
        <div className="footer-section">
          <h4>Categorías populares</h4>
          <ul>
            <li>Instrumentos Musicales</li>
            <li>Audio y Amplificación</li>
            <li>Accesorios</li>
            <li>Marcas</li>
            <li>Blog</li>
            <li>Merch</li>
            <li>Visita Musical Cedar</li>
            <li>Outlet TMS</li>
            <li>Tms Radio</li>
          </ul>
        </div>

        {/* Sección de información */}
        <div className="footer-section">
          <h4>Información</h4>
          <ul>
            <li>Condiciones de Envío</li>
            <li>Formas de Pago</li>
            <li>Nuestra Tienda</li>
            <li>Tiendas Físicas</li>
            <li>Garantía</li>
            <li>Política de Tratamiento y Protección de Datos Personales</li>
          </ul>
        </div>

        {/* Sección de newsletter */}
        <div className="footer-section newsletter">
          <h4>¡Únete a nuestro newsletter!</h4>
          <p>Entérate de primera mano de nuestras ofertas, lanzamientos y consejos de nuestros expertos.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Su correo electrónico" />
            <button type="submit">
              <span className="send-icon">✉</span>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
