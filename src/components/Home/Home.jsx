import React from "react";
import Portada from "../Portada/Portada";
import Carousel from "../carrousel/Carousel";
import Categorias from "../categorias/Categorias";
import Redes from "../carrousel/Redes";
import ProductosProvider from "../Contexto/ContextProducts";
import Carrito from "../Carrito/Carrito";
import CarouselOfertas  from '../ofertas/CarouselOfertas'

const Home = () => {
  return (
    <div>
      <ProductosProvider>
        <Portada />
        <Carousel />
        <Categorias />
        <CarouselOfertas />
        <Carrito />
        <Redes />
      </ProductosProvider>
    </div>
  );
};

export default Home;
