import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Item from "../Carrito/Item";
import { RiShoppingCartLine } from "react-icons/ri";
import { ProductosContext } from "../Contexto/ContextProducts";
import './modal.css'

function ModalCarrito() {
  const {carrito, deleteFromCart, clearCart } = useContext(ProductosContext);
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

      <Modal show={show} onHide={handleClose} centered
      size="lg">
        <Modal.Header closeButton>
          <Modal.Title> Carrito de compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          {carrito.map((item, index) => (
            <Item key={index} data={item} deleteFromCart={deleteFromCart} />
          ))}
         
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
       
         
          <Button variant="primary" onClick={handleClose}>
            Comprar
          </Button>
           <Button
            onClick={() => clearCart()}
            className="btn limpiar-carrito btn-sm"
          >
            Vaciar Carrito
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalCarrito;
