import { RiShoppingCartLine } from "react-icons/ri";
import { useContext,useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ProductosContext } from "../Contexto/ContextProducts";
import ModalCarrito from '../Modal/ModalCarrito'

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
        <Navbar.Brand as={Link} to="/">
          React-Tech
        </Navbar.Brand>
        {/* <Navbar.Brand className="icono-carrito" as={Link} to="/Cart"   onClick={handleShowModal}>
          <RiShoppingCartLine />  ({carrito.length})
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Carrito">
              Productos
            </Nav.Link>
            <Nav.Link as={Link} to="/Ofertas">
              Ofertas </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/Categorias">
              Categorias
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <ModalCarrito showModal={showModal} setShowModal={setShowModal} />
    </Navbar>
    
     </>
  );
}

export default BarraNav;
