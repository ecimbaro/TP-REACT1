import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ProductosContext } from "../Contexto/ContextProducts";

const ProductosModal = ({ producto, show, handleClose }) => {
  const { addToCart } = useContext(ProductosContext);

  const handleAgregarCarrito = () => {
    addToCart(producto.id);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Confirmar compra</Modal.Title>
      </Modal.Header>
      <Modal.Body>¿Desea agregar este producto al carrito?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleAgregarCarrito}>
          Agregar al carrito
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductosModal;
