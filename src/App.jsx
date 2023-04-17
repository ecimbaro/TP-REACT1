import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaProductos from "./components/api/ListaProductos";



function App() {
 
 

  return (
   <>
  <div className="lista-cards"> <ListaProductos/> </div>
   </>
    
    
  );
}

export default App;
