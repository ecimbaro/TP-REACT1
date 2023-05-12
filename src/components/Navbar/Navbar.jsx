import { RiShoppingCartLine } from "react-icons/ri";
import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ProductosContext } from "../Contexto/ContextProducts";
import ModalCarrito from "../Modal/ModalCarrito";
import { NavbarBrand } from "react-bootstrap";

function BarraNav() {
  // const {carrito} = useContext(ProductosContext);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <Navbar className="barraNav" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            React-Tech
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto barraNav-carrito">
              <Nav.Link as={Link} to="/Productos">
                Productos
              </Nav.Link>
              <Nav.Link as={Link} to="/Ofertas">
                Ofertas{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/Categorias">
                Categorias
              </Nav.Link>
              <ModalCarrito
              className="barraNav-btn"
              showModal={showModal}
              setShowModal={setShowModal}
            />
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BarraNav;
