import "./portada.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Portada = () => {
  return (
    <div className="Container home">
      <div className="home-texto container-fluid">
        <h3 className="titulo-home fw-bold text-center"> REACT TECH </h3>
        <p className="text-center"> MES DE MAYO ENVIOS SIN CARGO </p>

        <Link to="/Productos">
          <Button variant="outline-light btn-home">TIENDA</Button>
        </Link>
      </div>

      <div className="img-home">
        <img
          className="img-celu"
          src="https://armoto.vtexassets.com/arquivos/ids/163027-1200-auto?v=638096834845970000&width=1200&height=auto&aspect=true"
          alt="flip"
        />
      </div>
    </div>
  );
};

export default Portada;
