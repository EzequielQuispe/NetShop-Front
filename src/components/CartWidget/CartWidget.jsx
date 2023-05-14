import { Link } from 'react-router-dom';
import './CartWidget.css'
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

export const CartWidget = () => {
    const { carrito } = useContext(CarritoContext);

    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    const icon = 'https://cdn-icons-png.flaticon.com/512/1413/1413908.png'

    return (
        <Link to="/cart">
            <div className="box text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm">
                <img className="imgCart" src={icon} alt="" />
                {totalCantidad}
            </div>
        </Link>
    )
}