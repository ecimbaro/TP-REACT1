import React, { useContext } from "react";
import { ProductosContext } from "../Contexto/ContextProducts";
import CardsLista from "../cards/CardsLista";
import { Col, Row } from "react-bootstrap";

const ProductosCategoria = ({categoria}) => {
  const { productos, addToCart} = useContext(ProductosContext);

  const productosFiltrados = productos.filter((producto) => {
    return !categoria || producto.categoria === categoria;
  });
  

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
    </div>
  </div>
  );
};

export default ProductosCategoria;
