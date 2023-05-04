import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "./cardsStyle.css";

//paso por prop data y funciones
const CardsLista = ({ data, addToCart }) => {
  //destructuracion de props
  const { id, imagen, nombre, precioAntes, descuento, precio } = data;

  return (
    <Card className="contenedor-productos" style={{ width: "17rem" }}>
      <Carousel interval={null} variant="dark" indicators={true}>
        <Carousel.Item>
          <Card.Img
            className="d-block w-100 img-fluid pt-1 img-product"
            src={imagen.imgPrincipal}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Card.Img
            className="d-block w-100 img-fluid img-product"
            src={imagen.img1}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Card.Img
            className="d-block w-100 img-fluid img-product"
            src={imagen.img2}
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
          </div>
          <div>
            {" "}
            <span className="fw-bold oferta"> ${precio} </span>{" "}
          </div>
        </Card.Text>
        <div className="text-center">
          <button
            className="btn btn-cards w-100"
            onClick={() => addToCart(id)}
          >
            Comprar
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardsLista;
