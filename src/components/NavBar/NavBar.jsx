import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";
import { Ripple, initTE } from "tw-elements";

initTE({ Ripple });

export const NavBar = () => {
  return (
    <header>
      <div className="flex items-center justify-space-between py-4">
        <div className="w-full pr-16 flex justify-end">
          <Link className="w-52" to={"/"}>
            <img src="../assets/logo.png" alt="" />
          </Link>
        </div>
        <div className="w-full px-6">
          <form>
            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" id="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-yellow-300 focus:border-yellow-300 outline-none" placeholder="Search" required />
            </div>
          </form>
        </div>
        <div className="w-full pl-8 flex justify-start">
          <button className="flex justify-center w-44 text-sm font-bold text-center text-gray-900 rounded inline-flex items-center bg-yellow-300 shadow-[0_1px_4px_-2px_#000] transition duration-150 ease-in-out hover:bg-yellow-400 focus:outline-none focus:ring-0 active:bg-yellow-400" type="button" data-te-ripple-init data-te-ripple-color="light">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>INICIAR SESIÓN</span>
          </button>
          <div className="pl-5">
            <CartWidget />
          </div>
        </div>
      </div>
      <div className="bg-yellow-300 flex justify-center h-16">
        <ul className="flex justify-center items-center">
          <li>
            <NavLink className="hover:text-white hover:underline mx-12 text-base font-medium" to={`/categoria/2`}>PRODUCTOS</NavLink>
          </li>
          <li>
            <NavLink className="hover:text-white hover:underline mx-12 text-base font-medium" to={`/categoria/3`} >ARMÁ TU PC</NavLink>
          </li>
          <li>
            <NavLink className="hover:text-white hover:underline mx-12 text-base font-medium" to={`/categoria/3`} >HISTORIAL</NavLink>
          </li>
          <li>
            <NavLink className="hover:text-white hover:underline mx-12 text-base font-medium" to={`/categoria/3`} >AYUDA</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}