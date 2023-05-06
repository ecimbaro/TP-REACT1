import React, {useContext} from "react";
import { ProductosContext} from '../Contexto/ContextProducts'
import CardsLista from "../cards/CardsLista";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Item from "./Item";


const Carrito = () => {
  const {productos, carrito , addToCart, deleteFromCart, clearCart } = useContext(ProductosContext);

  return (
    <div className="Container">
      <div>
      <h2> Carrito </h2>
        {carrito.map((item) => (
          <Item key={item.id} data={item} deleteFromCart={deleteFromCart} />
        ))}
      </div>

      <button onClick={() => clearCart()} className="btn btn-warning btn-sm">
        Limpiar Carrito
      </button>
      <div className="Container">
        <h1 className="oferta-tiempo">TODOS LOS PRODUCTOS</h1>
        <Row sm={2} md={2} lg={3}xl={4}
          className="g-4 justify-content-center  pb-4 pt-3">
          {productos.map((producto) => (
            <Col key={producto.id}>
              <CardsLista   data={producto} addToCart={addToCart} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Carrito;