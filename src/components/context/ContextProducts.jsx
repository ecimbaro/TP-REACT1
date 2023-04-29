import { createContext, useState, useEffect } from "react";
import axios from "axios";

//creo contexto vacio
export const ProductosContext = createContext();

//desestructuro los hijos que tengo en app.js
const ProductosProvider = ({ children }) => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const response = await axios.get("http://localhost:3000/products");
      setProductos(response.data);
    };
    obtenerProductos();
  }, []);

  return (
    //ver si va {[productos, setProductos]} o {{productos}}
     <ProductosContext.Provider value={{productos}}>
      {children}
    </ProductosContext.Provider>
  );
};

export default ProductosProvider;