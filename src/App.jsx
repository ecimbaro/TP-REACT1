
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Rutas from "./components/Rutas/Rutas";
import ProductosProvider from "./components/Contexto/ContextProducts"

const App = () => {
  //todos los componentes que quiero que se vean los paso a Home
  //para envolverlos en el contexto
  return (
  
    <div className="container">
      <ProductosProvider>
        <Rutas />
        </ProductosProvider>
    </div>

  );
};

export default App;
