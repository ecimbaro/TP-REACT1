import React, {useContext} from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "./cardsStyle.css";
import { ProductosContext } from "../Contexto/ContextProducts";
//paso por prop data y funciones
const CardsLista = ({data}) => {
  const {addToCart} = useContext(ProductosContext);
  const { id, nombre, precio, precioAntes, descuento, imagenes } = data ?? {};
  return (
    <Card className="contenedor-productos" style={{ width: "15rem" }}>
          <Carousel interval={null} variant="dark" indicators={true}>
        <Carousel.Item>
          <img
            className="d-block w-100 pt-1 img-product"
            src={imagenes.imgPrincipal}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100  img-product"
            src={imagenes.img1}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100  img-product"
            src={imagenes.img2}
            alt="Third slide"
          />
        </Carousel.Item>
  
      </Carousel>


      <Card.Body>
        <Card.Title className="text-center prod-nombre">{nombre}</Card.Title>
        <Card.Text className="text-center">
          <div>
            <span className="antes"> ${precioAntes} </span>
            <span className="descuento"> {descuento} </span>
            <div className="fw-bold oferta"> ${precio} </div>
          </div>
        </Card.Text>
          <button className="btn btn-cards w-100" onClick={() => addToCart(id)}> Comprar </button>
    
      </Card.Body>
    </Card>
  );
};

export default CardsLista;
