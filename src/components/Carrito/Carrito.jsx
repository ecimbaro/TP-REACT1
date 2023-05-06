import React, { useContext } from "react";
import { ProductosContext } from "../Contexto/ContextProducts";
import CardsLista from "../cards/CardsLista";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Carrito = () => {
  const {carrito, productos, addToCart} =useContext(ProductosContext);

  return (
    <div className="Container">
      <h1 className="oferta-tiempo">TODOS LOS PRODUCTOS</h1>
      <Row
        sm={2}
        md={2}
        lg={3}
        xl={4}
        className="g-4 justify-content-center  pb-4 pt-3"
      >
        {productos.map((producto) => (
          <Col key={producto.id}>
            <CardsLista data={producto} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Carrito;
