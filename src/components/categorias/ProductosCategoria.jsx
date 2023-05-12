import React, { useContext, useState } from "react";
import { ProductosContext } from "../Contexto/ContextProducts";
import CardsLista from "../cards/CardsLista";
import { Col, Row } from "react-bootstrap";


const ProductosCategoria = ({categoria}) => {
  const { productos, addToCart,carrito} = useContext(ProductosContext);

  const productosFiltrados = productos.filter((producto) => {
    return !categoria || producto.categoria === categoria;
  });
//modal
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
  return (

    <div>
      <Row  sm={2} md={2} lg={3} xl={4} className="d-flex justify-content-around">
        {productosFiltrados.map((producto) => (
          <Col className="py-2" key={producto.id}>
          <CardsLista data={producto}   addToCart={handleAgregarCarrito}/>
          </Col>
        ))}
      </Row>
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
};

export default ProductosCategoria;
