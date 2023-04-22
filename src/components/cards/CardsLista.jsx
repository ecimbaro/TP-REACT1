import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "./cardsStyle.css";



const CardsLista = ({producto}) => {

  return (
   
    <Card className=" contenedor-productos" style={{ width: "17rem" }}>
      <Carousel interval={null} variant="dark" indicators={true}>
        <Carousel.Item>
          <img className="d-block w-100 img-product"
            src={producto.imagen.imgPrincipal}
            alt="First slide"/>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100  img-product"
            src={producto.imagen.img1} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100  img-product"
            src={producto.imagen.img2} alt="Third slide"/>
        </Carousel.Item>

      </Carousel>
      <Card.Body>
        <Card.Title className="text-center" >{producto.nombre}</Card.Title>
        <Card.Text className="text-center" >
          <div>
          <span className="antes"> ${producto.precioAntes} </span>
          <span className="descuento" >{producto.descuento} </span>
          </div>

          <span className="fw-bold oferta"> ${producto.precio} </span>
         
        </Card.Text>
        <div className="text-center">
          <button className="btn btn-cards w-100" >Comprar</button>
        </div>
      </Card.Body>
    </Card>
 
  );
};

export default CardsLista;
