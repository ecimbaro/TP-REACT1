import React from "react";
import Portada from "../Portada/Portada";
import Carousel from "../carrousel/Carousel";
import Categorias from "../categorias/Categorias";
import Redes from "../carrousel/Redes";
import CarouselOfertas  from '../ofertas/CarouselOfertas'

const Home = () => {
  return (
    <div>
        <Portada />
        <Carousel />
        <Categorias />
        <CarouselOfertas />
        <Redes />
       
    </div>
  );
};

export default Home;
