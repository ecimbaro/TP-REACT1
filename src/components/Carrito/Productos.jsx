import React, { useContext,useState } from "react";
import { ProductosContext } from "../Contexto/ContextProducts";
import CardsLista from "../cards/CardsLista";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProductosModal from "../Modal/ProductosModal";
const Productos = () => {
  const {productos, addToCart} =useContext(ProductosContext);
  //modal
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };
  
  const handleAgregarCarrito = () => {
    if (selectedProduct) {
      addToCart(selectedProduct.id);
      setShowModal(false);
    }
  };

  return (
    <div className="Container">
   
      <h1 className="oferta-tiempo">TODOS LOS PRODUCTOS</h1>
      <Row
        sm={2}
        md={2}
        lg={3}
        xl={4}
        className="g-4 justify-content-center  pb-4 pt-3"
      >
        {productos.map((producto) => (
                   <Col key={producto.id}>
                   <CardsLista
                     data={producto}
                     addToCart={handleAgregarCarrito}
                   />
                 </Col>
               ))}
             </Row>
             {selectedProduct && (
        <ProductosModal
          producto={selectedProduct}
          show={showModal}
          handleClose={() => setShowModal(false)}
          handleAgregarCarrito={handleAgregarCarrito}
        />
      )}
    </div>
  )
};

export default Productos;
