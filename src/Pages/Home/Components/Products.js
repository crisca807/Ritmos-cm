import React from 'react';
import '../styles/Products.css';

const Products = () => {
  return (
    <div className="product-sectionone">
        <h2 className="section-title">Parches</h2>
      <div className="product-container">
  
        {/* Producto 1: Parches 16" */}
        <div className="product">
          <div className="discount-badge">-12%</div>
          <div className="product-image product-image-parche-16"></div>
          <div className="product-info">
            <p className="brand">Percusión Pro</p>
            <p className="name">Parche 16"</p>
            <p className="prices">
              <span className="original-price">$250.000</span>
              <span className="discount-price">$220.000</span>
            </p>
            <button className="add-to-cart">Añadir al carrito</button>
          </div>
        </div>

        {/* Producto 2: Parches 20" */}
        <div className="product">
          <div className="discount-badge">-10%</div>
          <div className="product-image product-image-parche-20"></div>
          <div className="product-info">
            <p className="brand">Percusión Pro</p>
            <p className="name">Parche 20"</p>
            <p className="prices">
              <span className="original-price">$300.000</span>
              <span className="discount-price">$270.000</span>
            </p>
            <button className="add-to-cart">Añadir al carrito</button>
          </div>
        </div>

        {/* Producto 3: Parches 24" */}
        <div className="product">
          <div className="discount-badge">-8%</div>
          <div className="product-image product-image-parche-24"></div>
          <div className="product-info">
            <p className="brand">Marching Band</p>
            <p className="name">Parche 24"</p>
            <p className="prices">
              <span className="original-price">$400.000</span>
              <span className="discount-price">$368.000</span>
            </p>
            <button className="add-to-cart">Añadir al carrito</button>
          </div>
        </div>

        {/* Producto 4: Parches 26" */}
        <div className="product">
          <div className="discount-badge">-15%</div>
          <div className="product-image product-image-parche-26"></div>
          <div className="product-info">
            <p className="brand">Marching Band</p>
            <p className="name">Parche 26"</p>
            <p className="prices">
              <span className="original-price">$450.000</span>
              <span className="discount-price">$382.500</span>
            </p>
            <button className="add-to-cart">Añadir al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
