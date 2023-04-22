import react, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaProductos from "./components/api/ListaProductos";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/carrousel/Carousel";
import{ Navbar }from './components/Navbar/Navbar'
import Redes from "./components/carrousel/Redes";
import CarouselOfertas from "./components/ofertas/CarouselOfertas";


const App = () => {
  return (
    <div className="container mt-3">
      <Navbar/>
      <Carousel />
      <CarouselOfertas />
      <ListaProductos />
      <Redes />
      <Footer />
    </div>
  );
};

export default App;
