import React, { useContext,useState,useEffect} from "react";
import "./ofertas.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./breakpoints";
// import { ProductosContext } from "../context/ContextProducts";
import axios from "axios";


  const getProductosByCategoria = async (categoria) => {
    const response = await axios.get("http://localhost:3000/products");
    const productosFiltrados = response.data.filter(
      (producto) => producto.nuevo === true
    );
    return productosFiltrados;
  };
  
  function CarouselOfertas({ categoria }) {
    const [productos, setProductos] = useState([]);
  //con contexto
  // const { productos } = useContext(ProductosContext);

  // const productosFiltrados = productos.filter(
  //   (producto) => producto.nuevo === true
  // );
    useEffect(() => {
      const traerData = async () => {
        const productosFiltrados = await getProductosByCategoria(categoria);
        setProductos(productosFiltrados);
      };
      traerData();
    }, [categoria]);

  // const items = productosFiltrados
   const items = productos.map((producto,index) => (
    <div key={index} className="card-oferta">
      <img
        className=" product-img w-100"
        src={producto.imagenes.imgPrincipal}
        alt={producto.nombre} />
      <p className="texto-ofertaCarousel nombre">{producto.nombre}</p>
      <p className="texto-ofertaCarousel fw-bold">
        OFERTA $ {producto.precio}
      </p>
      <button className="btn-oferta" >Comprar</button>
    </div>
  ));
  
  return (
    <div className="container-ofertas Container">
      <h1 className="oferta-tiempo">OFERTAS DEL MES</h1>

      <Carousel className="item" showDots={true} responsive={responsive} >
    {items}
      </Carousel>
    </div>
  );
}
export default CarouselOfertas;
