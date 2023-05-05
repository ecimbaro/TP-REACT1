import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { TYPES } from "../Carrito/action";
import { carritoReducer } from "../Carrito/CarritoReducer";

//creo contexto vacio
export const ProductosContext = createContext();

//estado inicial que va a usar el reducer productos "disponibles" y carrito vacio
export const carritoInitialState = {
    productos: [],
    carrito: [],
  };
  
export const ProductosProvider = (props) => {
  //hook useReducer: funciónes que estan en carritoReducer reductora + estado inicial
  const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);
  //destructurar initial state (esto tengo en mi estado inicial)

  //funciones con las que voy a despachar las acciones

  //updateState para obtener datos de dos endpoints diferentes y luego, mediante el uso de dispatch, actualiza el estado global de la aplicación con los datos obtenidos. 
  const updateState = async () => {
   // Se utiliza un bloque try/catch para manejar errores en la ejecución de las solicitudes.
    try {
      const productosURL = "http://localhost:3000/products";
      const cartURL = "http://localhost:3000/carrito";
      //Promise.all para hacer las dos solicitudes a la vez y obtener las respuestas de forma paralela.
      //Esto puede mejorar el tiempo de carga en el caso de que las solicitudes sean lentas o se realicen en un servidor remoto.
      const [resProductos, resCart] = await Promise.all([
        axios.get(productosURL),
        axios.get(cartURL),
      ]);
  
      const [newProduct, newCartItem] = await Promise.all([
        resProductos.data,
        resCart.data,
      ]);
  
      dispatch({ type: TYPES.READ_STATE, payload: [newProduct, newCartItem] });
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    updateState();
  }, []);
  
  //agregar Producto
  const addToCart = (id) => {
    //del objeto TYPES la funcion que quiero
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

 //Borrar removeAll true
 const deleteFromCart = (id, removeAll) => {
  if (removeAll === true) {
    dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: id });
  } else {
    dispatch({ type: TYPES.REMOVE_ITEM, payload: id });
  }
};

  //vaciar carrito
  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });
  return (
     <ProductosContext.Provider value={{productos: state.productos,
      carrito: state.carrito,
        updateState,
        addToCart,
        deleteFromCart,
        clearCart,
        dispatch
     }}>
      {props.children}
    </ProductosContext.Provider>
  );
};

export default ProductosProvider;