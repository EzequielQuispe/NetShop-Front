import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemGrid } from './components/ItemGrid/ItemGrid';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemGrid />} />
            <Route path="/categoria/:idCategoria" element={<ItemGrid />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path="*" element={<h2>Sitio en Construcción</h2>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;