import React from "react";
import Portada from "../Portada/Portada";
import Carousel from "../carrousel/Carousel";
import Categorias from "../categorias/Categorias";
import Redes from "../carrousel/Redes";
import CarouselOfertas  from '../ofertas/CarouselOfertas'
import Productos from "../Carrito/Productos";


const Home = () => {
  return (
    <div>
        <Portada />
        <Carousel />
        <Categorias />
        <CarouselOfertas />
        <Productos/>
        <Redes />
       
    </div>
  );
};

export default Home;
