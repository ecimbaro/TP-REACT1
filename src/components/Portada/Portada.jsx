import "./portada.css";
import { Button } from "react-bootstrap";

const Portada = () => {

  return (
    <div className="Container home">
      <div className="home-texto container-fluid">
        <h3 className="titulo-home fw-bold text-center"> REACT TECH </h3>
        <p className="text-center"> MES DE MAYO ENVIOS SIN CARGO </p>
        
        {/* <Button variant="outline-light btn-home" onClick={handleClick}>TIENDA </Button> */}
        
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
