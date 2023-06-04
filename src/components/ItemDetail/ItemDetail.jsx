import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

export const ItemDetail = ({ id, name, price, image, stock, description }) => {
  const [addCount, setAddCount] = useState(0);
  const { addProduct } = useContext(CarritoContext);

  const manageCount = (count) => {
    setAddCount(count);

    const item = { id, name, price, image };
    addProduct(item, count);
  }

  return (
    <div className="flex flex-col">
      <div className="px-20 py-10 flex flex-row">
        <img className="" src={image} alt={name} />
        <div className="w-full">
          <div className="">
            <p className="text-2xl">{name}</p>
            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <p className="font-medium text-cyan-600">Precio especial</p>
            <p className="font-medium text-cyan-600 text-3xl">$ {price}</p>
            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <p className="font-medium text-cyan-600">Garantia - 36 meses</p>
            <p className="font-medium text-cyan-600">Stock disponible</p>
            <p className="font-medium text-cyan-600">Envíos a todo el país</p>
            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
          {addCount > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manageCount} />)}
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  )
}