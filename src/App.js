import React from 'react';
import Navbar from './Pages/Home/Components/Navbar'; // Importa el Navbar
import Banner from './Pages/Home/Components/Banner';
import ProductCard from './Pages/Home/Components/ProductCard';
import Products from './Pages/Home/Components/Products';
import Footer from './Pages/Home/Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar añadido aquí */}
      <Navbar />
      <Banner/>
      <ProductCard/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
