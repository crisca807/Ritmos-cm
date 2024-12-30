import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = () => {
  return (
    <div className="product-section">
      <h2 className="section-title">Productos destacados</h2>
      <div className="product-cards-container">
        {/* Producto 1: Bombo */}
        <div className="product-card">
          <div className="discount-badge">-10%</div>
          <div className="product-image product-image-bombo"></div>
          <div className="product-info">
            <p className="brand">Percusión Pro</p>
            <p className="name">Bombo 22"</p>
            <p className="prices">
              <span className="original-price">$1.200.000</span>
              <span className="discount-price">$1.080.000</span>
            </p>
            <button className="add-to-cart">Añadir al carrito</button>
          </div>
        </div>

        {/* Producto 2: Tambora */}
        <div className="product-card">
          <div className="discount-badge">-15%</div>
          <div className="product-image product-image-tambora"></div>
          <div className="product-info">
            <p className="brand">Percusión Pro</p>
            <p className="name">Tambora 14"</p>
            <p className="prices">
              <span className="original-price">$800.000</span>
              <span className="discount-price">$680.000</span>
            </p>
            <button className="add-to-cart">Añadir al carrito</button>
          </div>
        </div>

        {/* Producto 3: Granadera */}
        <div className="product-card">
          <div className="discount-badge">-5%</div>
          <div className="product-image product-image-granadera"></div>
          <div className="product-info">
            <p className="brand">Marching Band</p>
            <p className="name">Granadera 14"</p>
            <p className="prices">
              <span className="original-price">$1.000.000</span>
              <span className="discount-price">$950.000</span>
            </p>
            <button className="add-to-cart">Añadir al carrito</button>
          </div>
        </div>

        {/* Producto 4: Redoblante */}
        <div className="product-card">
          <div className="discount-badge">-8%</div>
          <div className="product-image product-image-redoblante"></div>
          <div className="product-info">
            <p className="brand">Marching Band</p>
            <p className="name">Redoblante 14"</p>
            <p className="prices">
              <span className="original-price">$1.100.000</span>
              <span className="discount-price">$1.012.000</span>
            </p>
            <button className="add-to-cart">Añadir al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
