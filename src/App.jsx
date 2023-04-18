import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer/> } />
          <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> } />
          <Route path="/item/:idItem" element={ <ItemDetailContainer/> }  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;