import React,{useState,useEffect} from "react";
import Card from "react-bootstrap/Card";
import "./categorias.css";
import smartphones from "./imgsCategorias/smartphones.png";
import relojes from "./imgsCategorias/relojes.png";
import cafetera from "./imgsCategorias/cafetera.png";
import smartphones from './imgsCategorias/smartphones.png'
import relojes from './imgsCategorias/relojes.png'
import cafetera from './imgsCategorias/cafetera.png'
import { faHourglass2 } from "@fortawesome/free-solid-svg-icons";

const Categorias = () => {

  const [click, setClick] = useState(false)
  const seleccionarCategoria = () => {
    setClick(true)
  }
  return (

    
    <div className="categorias mt- 3 mb-3">
      {click ? <h2>Hizo click</h2> : <h2>a ver q onda</h2> }
    <Card className="Container d-flex justify-content-center contenedor-categoria"
    onClick={() => seleccionarCategoria("smartphones")}>
      <h5 className="text-center texto-categoria"> Smarthphones </h5>
      <img className="img-categoria d-block mx-auto" src={smartphones} alt="smarthphones" />
    </Card>
    <Card className="Container d-flex justify-content-center contenedor-categoria"
    onClick={() => seleccionarCategoria("smart watch")}>
      <h5 className="text-center texto-categoria"> Smart Watch </h5>
      <img className="img-categoria d-block mx-auto" src={relojes} alt="smarth watch" />
    </Card>
    <Card className="Container d-flex justify-content-center contenedor-categoria"
     onClick={() => seleccionarCategoria("cafeteras")}>
      <h5 className="text-center texto-categoria"> Cafeteras </h5>
      <img className="img-categoria d-block mx-auto" src={cafetera} alt="cafeteras" />
    </Card>
   </div>

  );
};

export default Categorias;
