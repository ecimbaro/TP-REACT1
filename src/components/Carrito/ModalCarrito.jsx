import React, { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Modal as BootstrapModal } from "react-bootstrap";
import Item from "./Item";
import { RiShoppingCartLine } from "react-icons/ri";
import { ProductosContext } from "../Contexto/ContextProducts";


function ModalCarrito() {
  const {carrito,productos,deleteFromCart, clearCart } = useContext(ProductosContext);
  const [showCarrito, setShowCarrito] = useState(false);

  //Para total productos
  const [totalCarrito, setTotalCarrito] = useState(0);

  const handleClose = () => setShowCarrito(false);
  const handleShow = () => setShowCarrito(true);

  let totalProductos = 0;
  carrito.forEach((item) => {
    totalProductos += item.cantidad;
  });
  //toal de los productos del carrito
  const total = carrito.reduce((acc, item) => acc + item.cantidad * item.precio, 0);
  
  return (
    <div className="container-fluid contenedor-modal">
      <Button className="icono-carrito" onClick={handleShow}>
        <RiShoppingCartLine /> {totalProductos}
      </Button>

      <BootstrapModal show={showCarrito} onHide={handleClose} centered
      size="lg" style={{ maxWidth: "100%" }}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title> Mi Carrito </BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
          {" "}
          {carrito.map((producto, index) => (
            <Item key={index} data={producto} deleteFromCart={deleteFromCart} />
          ))} 
            <div className="text-right">
            <strong>Total: ${total}</strong>
          </div>
        </BootstrapModal.Body>
        <BootstrapModal.Footer>
           <Button
            onClick={() => clearCart()}
            className="btn limpiar-carrito btn-sm"
          >
            Vaciar Carrito
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Comprar
          </Button>
        </BootstrapModal.Footer>
        </BootstrapModal>
    </div>
  );
}

export default ModalCarrito;
