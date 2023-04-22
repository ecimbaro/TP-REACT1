import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import "./ofertas.css";
import { Container } from "react-bootstrap";

const getProductosByCategoria = async (categoria) => {
  const response = await axios.get("http://localhost:3000/products");
  const productosFiltrados = response.data.filter(
    (producto) => producto.nuevo === true
  );
  return productosFiltrados;
};

function CarouselOfertas({ categoria }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const traerData = async () => {
      const productosFiltrados = await getProductosByCategoria(categoria);
      setProductos(productosFiltrados);
    };
    traerData();
  }, [categoria]);

  return (
 <div className="container-ofertas pt-5 " >
 <div className="oferta-tiempo">OFERTAS DEL MES</div>
      <div className="carousel-ofertas pt-5 pb-5 mx-auto" style={{ width: "50%" }}>
        <Carousel
          variant="dark"
          className=" d-flex justify-content-center"
          indicators={false}
        >
          {productos.map((producto, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block mx-auto my-auto container"
                src={producto.imagen.imgPrincipal}
                alt={producto.nombre}
                style={{ objectFit: "cover",  width: "60%", height: "60%"}}
              />
              <Carousel.Caption>
                <h3 className="texto-ofertaCarousel nombre">
                  {producto.nombre}
                </h3>
                <p className="texto-ofertaCarousel fw-bold">
                  {" "}
                  OFERTA $ {producto.precio}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
  </div>
  
  );
}

export default CarouselOfertas;
