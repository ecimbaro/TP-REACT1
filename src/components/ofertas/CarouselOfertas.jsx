import React, { useContext,useState} from "react";
import "./ofertas.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./breakpoints";
import { ProductosContext } from "../Contexto/ContextProducts";
import ProductosModal from "../Modal/ProductosModal";

function CarouselOfertas() {
  const {productos, addToCart} = useContext(ProductosContext);

  const productosFiltrados = productos.filter(
    (producto) => producto.nuevo === true
  );
    
  const items = productosFiltrados.map(({ id, nombreCorto, precio, imagenes }) => (
    <div key={id} className="card-oferta">
      <img
        className="product-img w-100"
        src={imagenes.imgPrincipal}
        alt={nombreCorto}
      />
      <p className="texto-ofertaCarousel nombre">{nombreCorto}</p>
      <p className="texto-ofertaCarousel fw-bold">OFERTA $ {precio}</p>
      <button className="btn-oferta"onClick={() => {
            setShowModal(true);
            addToCart(id);
          }}>
        COMPRAR
      </button>
    </div>
  ));

  const [showModal, setShowModal] = useState(false);
  return (
    <>
  
      <h1 className="oferta-tiempo">OFERTAS DEL MES</h1>
      <div className="container-ofertas">
      <Carousel
        className="item"
        showDots={true}
        responsive={responsive}
        renderButtonGroupOutside={true}
      >
        {items}
      </Carousel>
  
    </div>
    <ProductosModal show={showModal} onHide={() => setShowModal(false)}  addToCart={addToCart}/>
 
    </>
  );
}
export default CarouselOfertas;
