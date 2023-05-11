import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Rutas from "./components/Rutas/Rutas";
import ProductosProvider from "./components/Contexto/ContextProducts";
const App = () => {
  return (
    <ProductosProvider>
      <Rutas />
    </ProductosProvider>
  );
};

export default App;
