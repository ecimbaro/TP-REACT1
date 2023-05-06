import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BarraNav from "../Navbar/Navbar";
import Home from '../Home/Home'
import CarouselOfertas from "../ofertas/CarouselOfertas";
import Carrito from "../Carrito/Carrito";
import Footer from '../Footer/Footer'
import Categorias from "../categorias/Categorias";
import Cart from '../Modal/Cart'

const Rutas = () => {
  return (
    <div>
 <BrowserRouter>
 <BarraNav/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Carrito" element={<Carrito/>} />
    <Route path="/Ofertas" element={<CarouselOfertas />} />
    <Route path="/Categorias" element={<Categorias />} /> 
    <Route path="/Cart" element={<Cart/>} /> 
  </Routes>
  <Footer />
</BrowserRouter>

    </div>
  );
};

export default Rutas;
