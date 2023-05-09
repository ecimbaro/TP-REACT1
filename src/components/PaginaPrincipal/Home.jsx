import React from "react";
import Portada from "../Portada/Portada";
import Carousel from "../carrousel/Carousel";
import Categorias from "../categorias/Categorias";
import Redes from "../carrousel/Redes";
import ProductosProvider from "../Contexto/ContextProducts";
import ModalCarrito from "../Carrito/ModalCarrito";
import CarouselOfertas from "../ofertas/CarouselOfertas";
import Productos from '../Carrito/Productos'
import ProductosModal from "../Modal/ProductosModal";
const Home = () => {
  return (
    <div>
      <ProductosProvider>
        <Portada />
        <Carousel />
        <Categorias />
        <CarouselOfertas />
        <Productos/>
        <Redes />
        <ModalCarrito />
        <ProductosModal/>
      </ProductosProvider>
    </div>
  );
};

export default Home;
