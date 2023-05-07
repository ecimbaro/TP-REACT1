import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Rutas from "./components/Rutas/Rutas";
import ProductosProvider from "./components/Contexto/ContextProducts";
import { BrowserRouter } from "react-router-dom";
// import Portada from "./components/Portada/Portada";
// import Carousel from "./components/carrousel/Carousel";
// import Categorias from "./components/categorias/Categorias";
// import CarouselOfertas from "./components/ofertas/CarouselOfertas";
// import Carrito from "./components/Carrito/Carrito";
// import Redes from "./components/carrousel/Redes";
// import Instagram from './components/Instagram/Instagram'
const App = () => {
  return (
    <BrowserRouter>
    <ProductosProvider>
      <Rutas />
      {/* <Portada />
      <Carousel />
      <Categorias />
      <CarouselOfertas />
      <Carrito />
      <Redes />
      <Instagram/> */}
    </ProductosProvider>
    </BrowserRouter>
  );
};

export default App;
