import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="bg-gray-800">
      <Link to={"/"}>
        <h1 className="text-2xl font-bold text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">NetShop</h1>
      </Link>
      <ul>
        <li>
          <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to={`/categoria/2`}>Intel</NavLink>
        </li>
        <li>
          <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to={`/categoria/3`} >Amd</NavLink>
        </li>
      </ul>
      <CartWidget />
    </header>
  )
}