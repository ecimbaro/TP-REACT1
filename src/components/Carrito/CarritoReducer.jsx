import { TYPES } from './action'


// Casos que definimos en TYPES
export function carritoReducer(state, action) {
  switch (action.type) {
    //lee el estado
    case TYPES.READ_STATE:{
        return {
            ...state,
            productos: action.payload[0],
            carrito: action.payload[1]
        }            
}
    case TYPES.ADD_TO_CART: {
      //busca si hay un producto para agregar
      let nuevoItem = state.productos.find(
        producto => producto.id === action.payload
      );
      //console.log(nuevoItem)

      let itemEnCarrito = state.carrito.find(
        item => item.id === action.payload
      );
      //si ya existe el item le suma 1
      return itemEnCarrito
        ? {
            ...state,
            carrito: state.carrito.map(item =>
              item.id === nuevoItem.id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
            ),
          }
        : {
            //sino esta el item lo agrega
            ...state,
            carrito: [...state.carrito, { ...nuevoItem, cantidad: 1 }],
          };
    }

    case TYPES.REMOVE_ITEM: {
      //busca si en el estado actual del carrito esta el item con el id q recibe por payload
      let itemAEliminar = state.carrito.find(
        (item) => item.id === action.payload
      );
      //si del item a eliminar la cantidad es mayor a 1
      return itemAEliminar.cantidad > 1
        ? {
            ...state,
            //mapeo el carrito, si uno tiene = id, a la cantidad resta 1, sino devuelve el item
            carrito: state.carrito.map((item) =>
              item.id === itemAEliminar.id
                ? { ...item, cantidad: item.cantidad - 1 }
                : item
            ),
          }
        : {
            //si hay 1 solo, busca los items que tengan el id !== y me devuelce todo menos el item que tiene el id ===
            // si hay muchos me resta 1, si hay uno lo borra
            ...state,
            carrito: state.carrito.filter(
              (item) => item.id !== itemAEliminar.id
            ),
          };
    }

    case TYPES.REMOVE_ALL_ITEMS: {
      //find busca si el item esta en el carrito
      let itemAEliminar = state.carrito.find(
        (item) => item.id === action.payload
      );

      return {
        ...state,
        //filtra todos los items del carrito que no tengan ese id, quedan todos menos el que tenga == id
        carrito: state.carrito.filter((item) => item.id !== itemAEliminar.id),
      };
    }

    case TYPES.CLEAR_CART: {
      return {
        ...state,
        carrito: [],
      };
    }

    default:
      return state;
  }
}
