import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Item from "../Carrito/Item";
import { RiShoppingCartLine } from "react-icons/ri";
import { ProductosContext } from "../Contexto/ContextProducts";
import './modal.css'

function ModalCarrito() {
  const { carrito, deleteFromCart, clearCart } = useContext(ProductosContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let totalProductos = 0;
  carrito.forEach((item) => {
    totalProductos += item.cantidad;
  });

  return (
    <div className="container-fluid contenedor-modal">
      <Button className="icono-carrito" onClick={handleShow}>
        <RiShoppingCartLine /> {totalProductos}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Carrito </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          {carrito.map((item, index) => (
            <Item key={index} data={item} deleteFromCart={deleteFromCart} />
          ))}
          <button
            onClick={() => clearCart()}
            className="btn limpiar-carrito fw-bold btn-sm"
          >
            Limpiar Carrito
          </button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ir a pagar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalCarrito;
