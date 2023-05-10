import React, { useState, useContext} from "react";
import Button from "react-bootstrap/Button";
import { Modal as BootstrapModal } from "react-bootstrap";
import Item from "./Item";
import { RiShoppingCartLine } from "react-icons/ri";
import { ProductosContext } from "../Contexto/ContextProducts";


function ModalCarrito() {
  const {carrito,productos,deleteFromCart,addToCart, clearCart } = useContext(ProductosContext);
  
  const [showCarrito, setShowCarrito] = useState(false);

  //Para total productos
  const [totalCarrito, setTotalCarrito] = useState(0);

  const handleClose = () => setShowCarrito(false);
  const handleShow = () => setShowCarrito(true);


  let totalProductos = 0;
  carrito.forEach((item) => {
    totalProductos += item.cantidad;
  });
  //total de los productos del carrito
  const total = carrito.reduce((acc, item) => acc + item.cantidad * item.precio, 0);
  const totalRedondeo = total.toFixed(2);
  

  return (
    <div className="container-fluid contenedor-modal">
      <Button className="icono-carrito" onClick={handleShow}>
        <RiShoppingCartLine /> {totalProductos}
      </Button>

      <BootstrapModal show={showCarrito} onHide={handleClose} centered
      size="lg">
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title> Mi Carrito </BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
          {" "}
          {carrito.map((item, index) => (
            <Item key={index} data={item} deleteFromCart={deleteFromCart} />
          ))} 
            <div className="text-right">
            <strong>Total: ${totalRedondeo}</strong>
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
