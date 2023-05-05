// import { useContext, useState,useEffect } from "react";
// import CardsLista from "./CardsLista";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import { ProductosContext } from "../context/ContextProducts";
// import axios from "axios";



 
// const ListaProductos = () => {
//   //si se usa el contexto
//   //ver si va entre {} dentro de useContext(nombredelContexto)
//   // const productos  = useContext(ProductosContext);
//   //o asi const [productos, setProductos]  = useContext(ProductosContext);
//   const { productos } = useContext(ProductosContext);

//   //sin contexto
// //   const  [productos, setProductos] = useState([]);
// //   const URL = "http://localhost:3000/products";

// //   const getData = async () => {
// //     const response = await axios.get(URL);
// //     return response;
// //   };

// //   useEffect(() => {
// //     getData()
// //       .then((response) => setProductos(response.data))
// //       .catch((e) => console.log(e));
// //   }, []);
 
//   return (
//     <div className="Container">
//       <h1 className="oferta-tiempo">TODOS LOS PRODUCTOS</h1>
//       <Row sm={1} md={2} lg={3} xl={4}
//         className="g-4 justify-content-center  pb-4 pt-3">
//         {productos.map((producto, index) => (
//           <Col key={index}>
//             <CardsLista producto={producto} />
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };
// export default ListaProductos;
