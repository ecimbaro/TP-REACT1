import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BarraNav from "../Navbar/BarraNav";
import Home from '../Home/Home'
import CarouselOfertas from "../ofertas/CarouselOfertas";
import Carrito from "../Carrito/Carrito";
import Footer from '../Footer/Footer'

const Rutas = () => {
  return (
    <div>
 <BrowserRouter>
  <BarraNav />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/ListaProductos" element={<Carrito/>} />
    <Route path="/Ofertas" element={<CarouselOfertas />} />
    <Route path="/Carrito" element={<Carrito />} /> 
    {/* en Carrito llevaria al modal VER */}
  </Routes>
  <Footer />
</BrowserRouter>

    </div>
  );
};

export default Rutas;
