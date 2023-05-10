import {useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import ModalCarrito from '../Carrito/ModalCarrito'
import { NavbarBrand } from "react-bootstrap";
import { ProductosContext } from "../Contexto/ContextProducts";
function BarraNav() {
  const {carrito} = useContext(ProductosContext);

  
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  }

  return (
    <>
    <Navbar className="barra-nav" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          React-Tech
        </Navbar.Brand>
        <NavbarBrand ><ModalCarrito className="carrito-btn" showModal={showModal} setShowModal={setShowModal} /></NavbarBrand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        {/* <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Productos">
              Productos
            </Nav.Link>
            <Nav.Link as={Link} to="/Ofertas">
              Ofertas </Nav.Link>
              <Nav.Link as={Link} to="/Categorias">
              Categorias
            </Nav.Link> */}
          {/* </Nav>
        
        </Navbar.Collapse> */}
      </Container>
    
      
      
    </Navbar>
    
     </>
  );
}

export default BarraNav;