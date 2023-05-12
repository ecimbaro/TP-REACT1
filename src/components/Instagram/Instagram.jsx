import React from "react";
import imagen1 from '../../assets/img/Cafetera1-1.png'
import imagen2 from "../../assets/img/Reloj-1.png";
import imagen3 from "../../assets/img/Celular-1.png";
import imagen4 from "../../assets/img/Cafetera2-2.png"
import imagen5 from "../../assets/img/Reloj3.png";
import imagen6 from "../../assets/img/Celular2-1.png";
import imagen7 from "../../assets/img/Cafetera3.png";
import imagen8 from "../../assets/img/Reloj4.png";
import imagen9 from "../../assets/img/Celular3.png";
import imagen10 from "../../assets/img/Cafetera2.png"
import "./Instagram.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Tamaños} from "./Tamaños"



const Instagram= ()=>{
    return(
        <>  
        <div className="carruselDeInstagram">
        <h1 className="h1-Instagram"> Fotos de nuestro Instagram (@ReactTech-2023)</h1>      
    <Carousel  
    showDots={true}
    responsive={Tamaños}
    renderButtonGroupOutside={true}
    className="carrusel-Ig"
>
<div className="imagen"> <img src={imagen1} alt="Cafetera1"  className="producto-Ig"/> </div>
<div className="imagen"> <img src={imagen2} alt="Reloj1"  className="producto-Ig"/> </div>
<div className="imagen"> <img src={imagen3} alt="Celular1"  className="producto-Ig"/> </div>
<div className="imagen"> <img src={imagen4} alt="Cafetera2"  className="producto-Ig"/> </div>
<div className="imagen"> <img src={imagen5} alt="Reloj2"  className="producto-Ig"/> </div>
<div className="imagen"> <img src={imagen6} alt="Celular2"  className="producto-Ig"/> </div>
<div className="imagen"> <img src={imagen7} alt="Cafetera3"  className="producto-Ig"/> </div>
<div className="imagen"> <img src={imagen8} alt="Reloj3"  className="producto-Ig"/> </div>
<div className="imagen"> <img src={imagen9} alt="Celular3"  className="producto-Ig"/> </div>
<div className="imagen"> <img src={imagen10} alt="Cafetera4"  className="producto-Ig"/> </div>
</Carousel>
</div>
</>
    )
}

export default Instagram;
