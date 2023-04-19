import axios from "axios";
import { useEffect, useState } from "react";
import CardsLista from "../cards/CardsLista";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ListaProductos = () => {
  
  const URL = "http://localhost:3000/products";

  const getData = async () => {
    const response = await axios.get(URL);
    return response;
  };

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getData()
      .then((response) => setProductos(response.data))
      .catch((e) => console.log(e));
  }, []);

  return (
       <Row sm={1} md={2} lg={3} xl={4}  className="g-4">
      
        {productos.map(producto =>(
          <Col>
          <CardsLista key={producto.id} producto={producto}/>
          </Col>
           
        ))}
       
       </Row>
  );
};
export default ListaProductos;
