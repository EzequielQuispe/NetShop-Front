import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

export const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio, img };
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <div className='detalle'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
      </div>
      <br />
      <p>{descripcion}</p>
      <img className="imagen" src={img} alt={nombre} />
      {agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)}
    </div>
  )
}