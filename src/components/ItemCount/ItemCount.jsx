import './ItemCount.css';
import { useState } from 'react';

export const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1)
        }
    }

    return (
        <>
            <div className='contenedor'>
                <button onClick={decrementar}> - </button>
                <p className='contador'> {contador} </p>
                <button onClick={incrementar}> + </button>
            </div>
            <button onClick={() => funcionAgregar(contador)} >Agregar al Carrito</button>
        </>
    )
}