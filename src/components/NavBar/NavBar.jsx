import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return(
        <header>
            <h1>NetShop</h1>
            <nav>
                <ul>
                    <li>Lacteos</li>
                    <li>Bebidas</li>
                    <li>Almacen</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}