import React from "react";
import Card from "react-bootstrap/Card";
import "./categorias.css";
import smartphones from "./imgsCategorias/smartphones.png";
import relojes from "./imgsCategorias/relojes.png";
import cafetera from "./imgsCategorias/cafetera.png";

const Categorias = () => {
  return (
    <div className="categorias mt-5">
      <Card className="Container d-flex justify-content-center contenedor-categoria">
        <h5 className="text-center texto-categoria"> Smarthphones </h5>
        <img
          className="img-categoria d-block mx-auto"
          src={smartphones}
          alt="smarthphones"
        />
      </Card>
      <Card className="Container d-flex justify-content-center contenedor-categoria">
        <h5 className="text-center texto-categoria"> Smart Watch </h5>
        <img
          className="img-categoria d-block mx-auto"
          src={relojes}
          alt="smarth watch"
        />
      </Card>
      <Card className="Container d-flex justify-content-center contenedor-categoria">
        <h5 className="text-center texto-categoria"> Cafeteras </h5>
        <img
          className="img-categoria d-block mx-auto"
          src={cafetera}
          alt="cafeteras"
        />
      </Card>
    </div>
  );
};

export default Categorias;
