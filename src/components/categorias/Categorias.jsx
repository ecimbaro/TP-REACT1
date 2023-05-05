import React, { useState,useContext } from "react";
import Card from "react-bootstrap/Card";
import "./categorias.css";
import smartphones from './imgsCategorias/smartphones.png'
import relojes from './imgsCategorias/relojes.png'
import cafetera from './imgsCategorias/cafetera.png'
import ProductosCategoria from "./ProductosCategoria";
import { ProductosContext } from "../Contexto/ContextProducts";

const Categorias = () => {
  const {productos}= useContext(ProductosContext);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const seleccionarCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  return (
    <div className="categorias container-fluid py-2">
      <Card className="my-3 contenedor-categoria" onClick={() => seleccionarCategoria("Smartphones")}>
        <h5 className="texto-categoria"> SMARTHPHONES </h5>
        <img className="img-categoria" src={smartphones} alt="Smarthphones" />
      </Card>
      <Card className="my-3 contenedor-categoria" onClick={() => seleccionarCategoria("Smart watch")}>
        <h5 className="texto-categoria"> SMART WATCH </h5>
        <img className="img-categoria" src={relojes} alt="Smarth watch" />
      </Card>
      <Card className="my-3 contenedor-categoria" onClick={() => seleccionarCategoria("Cafeteras")}>
        <h5 className="texto-categoria"> CAFETERAS </h5>
        <img className="img-categoria" src={cafetera} alt="Cafeteras" />
      </Card>
      <h5 className={`p-2 my-3 text-center  ${categoriaSeleccionada ? 'fondo-categoria' : 'none'}`}>{categoriaSeleccionada}</h5>
     
      {/* verifica si categoriaSeleccionada es verdadera antes de renderizar el componente ProductosCategoria. 
      Si categoriaSeleccionada es falsa, entonces el componente no se renderiza. */}
      {categoriaSeleccionada && <ProductosCategoria categoria={categoriaSeleccionada} />}
    </div>
  );
};

export default Categorias;

