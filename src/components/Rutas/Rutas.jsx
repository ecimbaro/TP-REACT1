import React from "react";
import { Route,Routes } from "react-router-dom";
import BarraNav from "../Navbar/Navbar";
import CarouselOfertas from "../ofertas/CarouselOfertas";
import Productos from '../Carrito/Productos'
import Footer from "../Footer/Footer";
import Categorias from "../categorias/Categorias";
import Portada from "../Portada/Portada";
import ModalCarrito from "../Modal/ModalCarrito";

const Rutas = () => {
  return (
   <>
   
      <BarraNav />
      <Routes>
        <Route path="/" element={<Portada/>} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Ofertas" element={<CarouselOfertas />} />
        <Route path="/Categorias" element={<Categorias />} />
        <Route path="/CartModal" element={<ModalCarrito />} />
      </Routes>
      <Footer />
     
      </>
  )
};

export default Rutas;
