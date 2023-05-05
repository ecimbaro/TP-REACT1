import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ProductosContext } from "../Contexto/ContextProducts"
function BarraNav() {
  const { carrito } = useContext(ProductosContext);

  let totalProductos = 0;
  carrito.forEach((item) => {
    totalProductos += item.cantidad;
  });

  return (
    <Navbar className="barra-nav" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          React-Tech
        </Navbar.Brand>
        <Nav.Link className="icono-carrito p-0.5" as={Link} to="/Carrito">
              <i className="bi bi-cart"></i>
              {totalProductos}
            </Nav.Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/ListaProductos"> Productos</Nav.Link>
            <Nav.Link as={Link} to="/Ofertas">Ofertas </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              Contacto
            </Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNav;
