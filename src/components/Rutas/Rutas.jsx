import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BarraNav from "../Navbar/Navbar";
import CarouselOfertas from "../ofertas/CarouselOfertas";
import Carrito from "../Carrito/Carrito";
import Footer from "../Footer/Footer";
import Categorias from "../categorias/Categorias";
import Portada from "../Portada/Portada";
import ModalCarrito from "../Modal/ModalCarrito";

const Rutas = () => {
  return (
    <BrowserRouter>
      <BarraNav />
      <Routes>
        <Route path="/" element={<Portada/>} />
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="/Ofertas" element={<CarouselOfertas />} />
        <Route path="/Categorias" element={<Categorias />} />
        <Route path="/CartModal" element={<ModalCarrito />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  );
};

export default Rutas;
