import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaProductos from './components/api/ListaProductos';
import Footer from './components/Footer/Footer'
import Carousel from './components/carrousel/Carousel'
import { Navbar } from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="container mt-3">
      <Navbar/>
        <Carousel/>
    <ListaProductos/>
    <Footer/>
    </div>
  )
}

export default App