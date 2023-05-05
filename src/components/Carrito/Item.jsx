import React, {useContext} from 'react';
import { ProductosContext } from '../Contexto/ContextProducts';

const Item = ({data}) => {
    const {carrito, productos , deleteFromCart} = useContext(ProductosContext);
    const { id, nombre, precio, cantidad } = data;
    return (
        <div className='col-md-12 d-flex flex-row justify-content-between'>
            <h4>{nombre}</h4>
            <h5>$ {precio} x {cantidad}u</h5>
            <h5>$ {precio * cantidad}</h5>
            {/* //false para borrar 1 , true para borrar todos */}
            <button onClick={() => deleteFromCart(id, false)} className='btn btn-danger btn-sm'>Eliminar uno</button>
            <button onClick={() => deleteFromCart(id, true)} className='btn btn-danger btn-sm'>Eliminar todos</button>
        </div>
    );
}

export default Item;