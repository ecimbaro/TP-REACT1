import React, { useContext } from "react";
import { ProductosContext } from "../Contexto/ContextProducts";
import { Row, Col, Button } from "react-bootstrap";

const Item = ({ data }) => {
  const { deleteFromCart, addToCart } = useContext(ProductosContext);
  const { id, nombreCorto, precio, cantidad } = data;
  return (
    <Row>
      <Col>
        <h4 className="texto-modal">{nombreCorto}</h4>
      </Col>
      <Col>
        <h5 className="texto-modal">
          $ {precio} x {cantidad}u
        </h5>
      </Col>

      <Col>
        <h5 className="texto-modal">$ {precio * cantidad}</h5>
      </Col>

      <Col className="d-flex justify-content-around aling-items-center">
        <Button
          onClick={() => deleteFromCart(id, false)}
          className="borrar-uno btn-sm  d-flex align-items-center"> - </Button>
        <h5 className="texto-modal">{cantidad} </h5>
        <Button onClick={() => addToCart(id)} className="sumar-uno btn-sm  d-flex align-items-center">
            +
        </Button>
      </Col>
    </Row>
  );
};

export default Item;
