import React from "react";
import Portada from "../Portada/Portada";
import Carousel from "../carrousel/Carousel";
import Categorias from "../categorias/Categorias";
import Redes from "../carrousel/Redes";
import CarouselOfertas  from '../ofertas/CarouselOfertas'
import Instagram from '../Instagram/Instagram'
const Home = () => {
  return (
    <div>
        <Portada />
        <Carousel />
        <Categorias />
        <CarouselOfertas />
        <Redes />
        <Instagram/>
       
    </div>
  );
};

export default Home;
