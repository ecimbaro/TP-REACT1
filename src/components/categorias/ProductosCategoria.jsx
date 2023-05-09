import React, { useContext, useState } from "react";
import { ProductosContext } from "../Contexto/ContextProducts";
import CardsLista from "../cards/CardsLista";
import { Col, Row } from "react-bootstrap";
import ProductosModal from "../Modal/ProductosModal";

const ProductosCategoria = ({categoria}) => {
  const { productos, addToCart} = useContext(ProductosContext);

  const productosFiltrados = productos.filter((producto) => {
    return !categoria || producto.categoria === categoria;
  });
  
//Modal
const [showModal, setShowModal] = useState(false);

  return (
    <div>
    <div>
      <Row  sm={2} md={2} lg={3} xl={4} className="d-flex justify-content-center">
        {productosFiltrados.map((producto) => (
          <Col className="py-2" key={producto.id}>
            <CardsLista data={producto} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
      <ProductosModal show={showModal} onHide={() => setShowModal(false)}  addToCart={addToCart}/>
    </div>
  </div>
  );
};

export default ProductosCategoria;
