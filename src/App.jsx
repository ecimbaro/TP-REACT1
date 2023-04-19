import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaProductos from "./components/api/ListaProductos";
import CarouselOfertas from "./components/ofertas/CarouselOfertas";



function App() {
 
 

  return (
   <>
  <div className="lista-cards"> <ListaProductos/> </div>
<CarouselOfertas/>
   </>
    
    
  );
}

export default App;
