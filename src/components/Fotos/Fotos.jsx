import React from "react";
import "./Fotos.css";
import Cafetera1 from "../../assets/img/Cafetera1-1.png";
import Cafetera2 from "../../assets/img/Cafetera2-2.png";
import Reloj from "../../assets/img/Reloj-1.png";
import Celular from "../../assets/img/Celular-1.png";

const infoFotos = [
  { id: 1, linkFoto: Reloj, textoDescriptivo: "Reloj" },
  { id: 2, linkFoto: Cafetera1, textoDescriptivo: "Cafetera" },
  { id: 3, linkFoto: Cafetera2, textoDescriptivo: "Cafetera" },
  { id: 4, linkFoto: Celular, textoDescriptivo: "Celular" },
];

const mapDeInfo = infoFotos.map((infoFoto, index) => {
  return (
    <div className="contenedor" key={index}>
      <img
        
        className="fotoTexto"
        src={infoFoto.linkFoto}
        alt={infoFoto.textoDescriptivo}
      />
    </div>
  );
});

function Fotos() {
  return (
    <>
      <div>{mapDeInfo}</div>
    </>
  );
}

export default Fotos;
