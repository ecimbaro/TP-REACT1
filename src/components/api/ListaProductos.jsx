import axios from "axios";
import { useEffect, useState } from "react";
import CardsLista from "../cards/CardsLista";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




const ListaProductos = () => {
  const  [productos, setProductos] = useState([]);
  const URL = "http://localhost:3000/products";

  const getData = async () => {
    const response = await axios.get(URL);
    return response;
  };

  useEffect(() => {
    getData()
      .then((response) => setProductos(response.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="container fluid">

       <Row sm={1} md={2} lg={3} xl={4}  className="g-4 justify-content-center">
      
        {productos.map((producto, index) =>(
          <Col>
          <CardsLista key={index} producto={producto}/>
          </Col>
           
        ))}
       
       </Row>
       </div>
  );
};
export default ListaProductos;
