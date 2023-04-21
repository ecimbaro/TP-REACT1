import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagen1 from './img/1782.jpg'
import imagen2 from "./img/1789.jpg";
import imagen3 from "./img/1792.jpg";
import "./style.css";

const Carousel = () => {
  return (
    <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
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
      </ol>
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
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselId"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselId"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
