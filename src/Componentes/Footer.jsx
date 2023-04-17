import React from 'react'
import './Footer.css'
import logo from '../assets/logo.svg';


export const Footer = () => {
    return (

<div className="sup">
<div class="container">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5">
    <div class="col mb-4">
      <a href="/" class="d-flex align-items-center mb-3  ">
        <img class="bi me-2" width="140" height="110" src={logo}></img>
      </a>
      <p>Derechos reservados</p>      
      <p>&copy; React Tech 2023</p>
    </div>

    <div class="col mb-4">
      <h5>Atención al cliente</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2">0099-4456-2132</li>
        <li class="nav-item mb-2">0877-3698-2133</li>
        <li class="nav-item mb-2">Lu-Vi de 09:00 a 18:00</li>
        <li class="nav-item mb-2">Sa de 09:00 a 13:00</li>

      </ul>
    </div>

    <div class="col mb-4">
      <h5>Venta telefónica</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2">0099-4456-2132</li>
        <li class="nav-item mb-2">Lu-Vi de 08:00 a 20:00</li>
        <li class="nav-item mb-2">Sa-Do-Fer. de 09:00 a 21:00</li>
      </ul>
      <h5>Cobros</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2">cobranza@reactech.ar</li>
        </ul>
    </div>

    <div class="col mb-4">
      <h5>Servicio a Empresas</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2">Ventas corporativas</li>
        <li class="nav-item mb-2">Programas especiales</li>
        <li class="nav-item mb-2">Planes</li>
      </ul>

    </div>

    <div class="col mb-4">
      <h5>De interés</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#">Inicio</a></li>
        <li class="nav-item mb-2"><a href="#">Contacto</a></li>
        <li class="nav-item mb-2"><a href="#">Quienes somos</a></li>
        <li class="nav-item mb-2"><a href="#">Productos</a></li>
        <li class="nav-item mb-2"><a href="#">Información legal</a></li>
        <li class="nav-item mb-2"><a href="#">Blog</a></li>
      </ul>
    </div>
  </footer>
</div>
</div>


    )
}

export default Footer