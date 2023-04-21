
import react,{ useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaProductos from './components/api/ListaProductos';
import Footer from './components/Footer/Footer'
import Carousel from './components/carrousel/Carousel'
import CarouselOfertas from './components/ofertas/CarouselOfertas';



const App = () => {
  return (
    <div className="container mt-3">
   
      <div className="carousel">  <Carousel/> </div>
       
    <div className="ofertas container m-5"> <CarouselOfertas/> </div>
    <div className="listaProduc container"> <ListaProductos/> </div>
    
    <Footer/>
    </div>
  )

}

export default App