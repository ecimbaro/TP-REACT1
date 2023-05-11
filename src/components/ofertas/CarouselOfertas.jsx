import React, { useContext, useState } from "react";
import "./ofertas.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./breakpoints";
import { ProductosContext } from "../Contexto/ContextProducts";
import ProductosModal from "../Modal/ProductosModal";
import { Alert } from "react-bootstrap";

function CarouselOfertas() {
  const { productos, addToCart } = useContext(ProductosContext);

  const productosFiltrados = productos.filter((producto) => producto.nuevo === true);

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleAgregarCarrito = () => {
    if (selectedProduct) {
      addToCart(selectedProduct.id);
      setShowModal(false);
    }
  };

  const items = productosFiltrados.map(({ id, nombreCorto, precio, imagenes }) => (
    <div key={id} className="card-oferta">
      <img className="product-img w-100" src={imagenes.imgPrincipal} alt={nombreCorto} />
      <p className="texto-ofertaCarousel nombre">{nombreCorto}</p>
      <p className="texto-ofertaCarousel fw-bold">OFERTA $ {precio}</p>
      <button className="btn-oferta" onClick={() => handleShowModal({ id, nombreCorto, precio })}>
        COMPRAR
      </button>
    </div>
  ));

  return (
    <div className="container-ofertas">
      <h1 className="oferta-tiempo">OFERTAS DEL MES</h1>
      <div className="container">
        <Carousel className="item" showDots={true} responsive={responsive} renderButtonGroupOutside={true}>
          {items}
        </Carousel>
      </div>

      {selectedProduct && (
        <ProductosModal
          producto={selectedProduct}
          show={showModal}
          handleClose={() => setShowModal(false)}
          handleAgregarCarrito={handleAgregarCarrito}
        />
      )}
    </div>
  );
}

export default CarouselOfertas;