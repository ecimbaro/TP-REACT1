import React, {useContext} from "react";
import Carousel from "react-bootstrap/Carousel";
import "./cardsStyle.css";
import { ProductosContext } from "../Contexto/ContextProducts";

const CardsLista = ({data}) => {
  const {addToCart} = useContext(ProductosContext);
  const { id, nombre, precio, precioAntes, descuento, imagenes } = data ?? {};
  return (
    <div className="contenedor-productos" style={{ width: "15rem" }}>
          <Carousel interval={null} variant="dark" indicators={false}>
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
      
      <div className="card-body">

        <h5 className="text-center prod-nombre">{nombre}</h5 >
        <div className="text-center">
            <span className="antes"> ${precioAntes} </span>
            <span className="descuento"> {descuento} </span>
            <p className="fw-bold oferta"> ${precio} </p>
            <button className="btn btn-cards" onClick={() => addToCart(id)}> Comprar </button>
        </div>
         
      </div>
    </div>
  );
};

export default CardsLista;
