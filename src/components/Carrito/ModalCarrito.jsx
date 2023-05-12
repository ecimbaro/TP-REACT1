import React, { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Modal as BootstrapModal } from "react-bootstrap";
import Item from "./Item";
import { RiShoppingCartLine } from "react-icons/ri";
import { ProductosContext } from "../Contexto/ContextProducts";
import "./carrito.css";
import carritoBoton from './carritoBoton.png'

function ModalCarrito() {
  const { carrito, productos, deleteFromCart, addToCart, clearCart } =
    useContext(ProductosContext);

  const handleClose = () => setShowCarrito(false);
  const handleShow = () => setShowCarrito(true);

  const [showCarrito, setShowCarrito] = useState(false);
  const [totalCarrito, setTotalCarrito] = useState(0);
  const [totalPrecios, setTotalPrecios] = useState(0);

  useEffect(() => {
    // Calcula la cantidad total de productos y precios en el carrito
    let totalCantidad = 0;
    let totalPrecio = 0;
    carrito.forEach((item) => {
      totalCantidad += item.cantidad;
      const producto = productos.find((p) => p.id === item.id);
      if (producto) {
        totalPrecio += producto.precio * item.cantidad;
      }
    });
    setTotalCarrito(totalCantidad);
    setTotalPrecios(totalPrecio);
  }, [carrito, productos]);

  return (
    <div className="container-fluid contenedor-modal">
     <div className="carrito-container">
      <img src={carritoBoton} className="carrito-img" alt="carrito" onClick={handleShow}/>
      <span className="cantidad-productos">{totalCarrito}</span>
      </div>
      <Button className="icono-carrito" onClick={handleShow}>
        <RiShoppingCartLine /> {totalCarrito}
      </Button>

      <BootstrapModal
        show={showCarrito}
        onHide={handleClose}
        centered
        size="lg"
      >
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title> Mi Carrito </BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
          {" "}
          {carrito.map((item, index) => (
            <Item key={index} data={item} deleteFromCart={deleteFromCart} />
          ))}
          <div className="text-right p-1">
            <strong>Total: ${totalPrecios}</strong>
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
