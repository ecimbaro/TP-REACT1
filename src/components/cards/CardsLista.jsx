import React, { useContext, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./cardsStyle.css";
// import { ProductosContext } from "../Contexto/ContextProducts";
import ProductosModal from "../Modal/ProductosModal";

const CardsLista = ({ data }) => {
  // const { addToCart } = useContext(ProductosContext);
  const { id, nombreCorto, precio, precioAntes, descuento, imagenes } =
    data ?? {};
  //Modal
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="contenedor-productos" style={{ width: "15rem" }}>
      <Carousel interval={null} variant="dark" indicators={false}>
        <Carousel.Item style={{ height: "12rem" }}>
          <img
            className="img-product"
            src={imagenes.imgPrincipal}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item style={{ height: "12rem" }}>
          <img className="img-product" src={imagenes.img1} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item style={{ height: "12rem" }}>
          <img className="img-product" src={imagenes.img2} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <div className="card-body">
        <h5 className="text-center prod-nombre">{nombreCorto}</h5>
        <div className="text-center">
          <span className="antes"> ${precioAntes} </span>
          <span className="descuento"> {descuento} </span>
          <p className="fw-bold oferta"> ${precio} </p>
          <div className="contenedor-botones">
            <button className="btn btn-cards" onClick={handleShowModal}>
              COMPRAR
            </button>
          </div>

          <ProductosModal
            producto={data}
            show={showModal}
            handleClose={handleCloseModal}
          />
        </div>
      </div>
    </div>
  );
};

export default CardsLista;
