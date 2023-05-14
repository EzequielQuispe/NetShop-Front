import { useContext } from "react";
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from "react-router-dom";
import { CartItem } from '../CartItem/CartItem';

export const Cart = () => {

    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

    if (totalCantidad === 0) {
        return (
            <>
                <h2>No hay productos en el carrito </h2>
                <Link to='/'> Productos </Link>
            </>
        )
    }

    return (
        <div>
            <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                {carrito.map(producto =>
                    <li key={producto.item.id} class="pb-3 pt-3 sm:pb-4 pt-4">
                        <CartItem key={producto.item.id} {...producto} />
                    </li>
                )}
            </ul>
            <h3>Total: ${total} </h3>
            <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
            <Link to='/checkout'> Finalizar Compra </Link>
        </div>
    )
}