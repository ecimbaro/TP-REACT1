import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaProductos from './components/api/ListaProductos';
import Footer from './components/Footer/Footer'
import Carousel from './components/carrousel/Carousel'
const App = () => {
  return (
    <div className="container mt-3">
        <Carousel/>
    <ListaProductos/>
    <Footer/>
    </div>
  )
}

export default App