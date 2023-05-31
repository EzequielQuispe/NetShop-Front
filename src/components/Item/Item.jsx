import './Item.css'
import { Link } from 'react-router-dom'

export const Item = ({id, name, price, image}) => {
  return (
    <Link to={`/item/${id}`} className="border w-60 p-4 m-4 flex flex-col items-center">
        <img className="h-28" src={image} alt={name} />
        <p className="pb-5 text-sm">{name}</p>
        <p className="font-medium text-cyan-600">$ {price}</p>
    </Link>
  )
}