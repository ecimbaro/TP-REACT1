import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import './ofertas.css'


const getProductosByCategoria = async (categoria) => {
  const response = await axios.get('http://localhost:3000/products');
  const productosFiltrados = response.data.filter(producto => producto.nuevo === true);
  return productosFiltrados;
}


function CarouselOfertas({categoria}) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const traerData = async () => {
      const productosFiltrados = await getProductosByCategoria(categoria);
      setProductos(productosFiltrados);
    }
    traerData();
  }, [categoria]);

  return (
    // <div className="d-flex justify-content-center align-items-center">
    <div className="container fluid  mt-5 ">
      <span className="oferta-tiempo">OFERTAS DEL MES</span>

    <Carousel style={{ width: '80%' }} variant="dark" className=' d-flex justify-content-center contenedor-ofertas mb-6 mt-3' indicators={false}>
      {productos.map((producto, index )=> (
        
        <Carousel.Item  key={index}>
          <img
            className="d-block mx-auto container"
            src={producto.imagen.imgPrincipal}
            alt={producto.nombre}
            style={{ objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3 className='texto-ofertaCarousel nombre'>{producto.nombre}</h3>
            <p className='texto-ofertaCarousel fw-bold fs-2' > OFERTA $ {producto.precio}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
    // </div>
  );
}


export default CarouselOfertas