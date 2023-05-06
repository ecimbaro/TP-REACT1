import React, {useContext} from "react";
import CartModal from "./CartModal";
import Item from '../Carrito/Item'
import { RiShoppingCartLine } from "react-icons/ri";
import { ProductosContext } from "../Contexto/ContextProducts";

const Cart = () => {
  const {carrito,deleteFromCart, clearCart} =useContext(ProductosContext);
  
  return (
    <div className="cart d-flex justify-content-center">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#cartModal"
      >
        <RiShoppingCartLine /> ({carrito.length})
      </button>
      <CartModal>
        {carrito.map((item, index) => (
          <Item key={index} data={item} deleteFromCart={deleteFromCart} />
        ))}
        <button onClick={() => clearCart()} className="btn btn-warning btn-sm">
          Limpiar Carrito
        </button>
      </CartModal>
    </div>
  );
};

export default Cart;
