import React from "react";
import "../styles/Banner.css";

const Banner = () => {
  return (
    <div className="unique-banner-container">
      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXFrMGtmYjMzbm81amc1a2dveDB2Zjk1dzdpaDVmemN6dGhnY2oyYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f6baCLrbs30L3HL3Eq/giphy.gif"
        alt="Man playing guitar"
        className="banner-gif"
      />
      <div className="banner-text">
        <h1>¡Descubre la guitarra perfecta para ti!</h1>
        <p>
          Instrumentos de alta calidad para todos los niveles. ¡Haz música hoy
          mismo!
        </p>
      </div>
    </div>
  );
};

export default Banner;
