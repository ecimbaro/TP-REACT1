import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductosProvider from "./components/Contexto/ContextProducts";
import BarraNav from "./components/Navbar/BarraNav";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/carrousel/Carousel";
import Categorias from "./components/categorias/Categorias";
import CarouselOfertas from "./components/ofertas/CarouselOfertas";
import Productos from "./components/Carrito/Productos";
import Redes from "./components/carrousel/Redes";
import Portada from "./components/Portada/Portada";
import ProductosModal from "./components/Modal/ProductosModal";

const App = () => {
  return (
    <ProductosProvider>
      <BarraNav />
      <Portada />
      <Carousel />
      <Productos />
      <Categorias />
      <CarouselOfertas />
      <Redes />
   
      <ProductosModal />
      <Footer />
    </ProductosProvider>
  );
};

export default App;
