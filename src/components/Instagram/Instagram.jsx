import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagen1 from './img/Cafetera1-1.png'
import imagen2 from "./img/Reloj-1.png";
import imagen3 from "./img/Celular-1.png";
import imagen4 from "./img/Cafetera2-2.png"
import imagen5 from "./img/Reloj3.png";
import imagen6 from "./img/Celular2-1.png";
import imagen7 from "./img/Cafetera3.png";
import imagen8 from "./img/Reloj4.png";
import imagen9 from "./img/Celular3.png";
import imagen10 from "./img/Cafetera2.png"
import "./Instagram.css";

const Carousel = () => {
  return (<><h1>Fotos de Instagram</h1>
    <div id="carouselId" className="carousel slide container" data-bs-ride="carousel">
      
      <ul className="carousel-indicators">
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="First slide"
        ></li>
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to="1"
          aria-label="Second slide"
        ></li>
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to="2"
          aria-label="Third slide"
        ></li>
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to="3"
          className="active"
          aria-current="true"
          aria-label="Fourth slide"
        ></li>
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to="4"
          aria-current="true"
          aria-label="Fifth slide"
        ></li>
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to="5"
          aria-label="Sixth slide"
        ></li>
          <li
          data-bs-target="#carouselId"
          data-bs-slide-to="6"
          aria-label="Seventh slide"
        ></li>
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to="7"
          aria-label="Eight slide"
        ></li>
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to="8"
          className="active"
          aria-current="true"
          aria-label="Nineth slide"
        ></li>
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to="9"
          aria-current="true"
          aria-label="Tenth slide"
        ></li>

      </ul>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active ">
          <img src={imagen1} className="img-fluid d-block" alt="First slide" />
          
        </div>
        <div className="carousel-item">
          <img src={imagen2} className="img-fluid d-block" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img src={imagen3} className="img-fluid d-block" alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img src={imagen4} className="img-fluid d-block" alt="Fourth slide" />
        </div> 
        <div className="carousel-item">
          <img src={imagen5} className="img-fluid d-block" alt="Fifth slide" />
        </div>
        <div className="carousel-item">
          <img src={imagen6} className="img-fluid d-block" alt="Sixth slide" />
        </div> 
        <div className="carousel-item">
          <img src={imagen7} className="img-fluid d-block" alt="Seventh slide" />
        </div>
        <div className="carousel-item">
          <img src={imagen8} className="img-fluid d-block" alt="Eight slide" />
        </div> 
        <div className="carousel-item">
          <img src={imagen9} className="img-fluid d-block" alt="Nineth slide" />
        </div>
        <div className="carousel-item">
          <img src={imagen10} className="img-fluid d-block" alt="Tenth slide" />
        </div> 
                  
      </div>
     <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselId"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselId"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden"></span>
      </button>
     
    </div>
    </>
  );
};

export default Carousel;
