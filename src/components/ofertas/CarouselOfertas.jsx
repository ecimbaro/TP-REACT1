import React, { useContext } from "react";
import "./ofertas.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { renderButtonGroupOutside } from "react-multi-carousel";
import { responsive } from "./breakpoints";
import { ProductosContext } from "../Contexto/ContextProducts";

function CarouselOfertas() {
  const {productos, addToCart, carrito} = useContext(ProductosContext);

  const productosFiltrados = productos.filter(
    (producto) => producto.nuevo === true
  );

  const items = productosFiltrados.map(({ id, nombre, precio, imagenes }) => (
    <div key={id} className="card-oferta Container-fluid">
      <img
        className="product-img w-100"
        src={imagenes.imgPrincipal}
        alt={nombre}
      />
      <p className="texto-ofertaCarousel nombre">{nombre}</p>
      <p className="texto-ofertaCarousel fw-bold">OFERTA $ {precio}</p>
      <button className="btn-oferta" onClick={() => addToCart(id)}>
        COMPRAR
      </button>
    </div>
  ));

  return (
    <div className="container-ofertas Container">
      <h1 className="oferta-tiempo">OFERTAS DEL MES</h1>

      <Carousel
        className="item"
        showDots={true}
        responsive={responsive}
        renderButtonGroupOutside={true}
      >
        {items}
      </Carousel>
    </div>
  );
}
export default CarouselOfertas;
