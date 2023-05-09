import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ProductosContext } from "../Contexto/ContextProducts";

function ProductosModal({ show, onHide, selectedProductId}) {
  const {addToCart}= useContext(ProductosContext);
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Mi carrito </Modal.Title>
        </Modal.Header>

        <Modal.Body className="txt-modal">
          <h5> ¿Desea agregar este producto al carrito?</h5>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cerrar
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addToCart(selectedProductId);
              onHide();
            }}
          >
            Agregar
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default ProductosModal;
