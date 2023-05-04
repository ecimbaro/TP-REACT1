import React, { useReducer, useEffect } from "react";
import { TYPES } from "./CartReducer/CartActions";
import axios from "axios";
import Item from "./Item";
import { carritoInitialState, carritoReducer } from "./CartReducer/CartReducer";
import Cards from "./Cards";
import Cart from "./Cart";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const Carrito = () => {
  const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);
  const { productos, carrito } = state;

  //funciones con las que voy a despachar las acciones
  const updateState = async () => {
    const productosURL = "http://localhost:3000/products";
    const cartURL = "http://localhost:3000/carrito";
    const resProductos = await axios.get(productosURL);
    const resCart = await axios.get(cartURL);
    const newProduct = await resProductos.data;
    const newCartItem = await resCart.data;

    dispatch({ type: TYPES.READ_STATE, payload: [newProduct, newCartItem] });
  };

  useEffect(() => {
    updateState();
  }, []);

  //agregar
  const addToCart = (id) => {
    //del objeto TYPES la funcion que quiero
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  //Borrar removeAll true
  const deleteFromCart = (id, removeAll) => {
    if (removeAll === true) {
      dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ITEM, payload: id });
    }
  };
  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

  return (
    <div>
      <div>
        <Cart
          cart={carrito}
          deleteFromCart={deleteFromCart}
          clearCart={clearCart}
        />
      </div>
      <div className="Container">
        <h1 className="oferta-tiempo">TODOS LOS PRODUCTOS</h1>
        <Row
          sm={1}
          md={2}
          lg={3}
          xl={4}
          className="g-4 justify-content-center pb-4 pt-3"
        >
          {productos.map((producto) => (
            <Col>
              <Cards key={producto.id} data={producto} addToCart={addToCart} />
            </Col>
          ))}
        </Row>
      </div>

      {/* aca va lo que se va a ver en la pagina, los productos disponibles y los que agregue al carrito */}
      {/* <Productos productos={productos} addToCart={addToCart} /> */}
    </div>
  );
};

export default Carrito;
