import React from 'react';
import './Navbar.css'


export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
        
        </div>
        <div className="navbar-search">
          <form action="#">
            <input type="text" placeholder="Buscar..." />
            <button type="submit">Buscar</button>
          </form>
        </div>
        <div className="navbar-categories">
          <a href="#">Celulares y Teléfonos</a>
          <a href="#">Cámaras y Accesorios</a>
          <a href="#">Computación</a>
          <a href="#">Electrónica, Audio y Video</a>
          <a href="#">Consolas y Videojuegos</a>
        </div>
        <div className="navbar-offers">
          <a href="#">Ofertas</a>
        </div>
        <div className="navbar-user">
          <a href="#">Iniciar Sesión</a>
          <a href="#">Registrarse</a>
        </div>
        <div className="navbar-cart">
          <a href="#">Carrito de Compras</a>
        </div>
      </div>
    </nav>
  );
};




