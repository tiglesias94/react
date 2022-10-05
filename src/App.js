import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import { ItemCount } from './components/ItemCount';
import ItemDetailCointainer from './components/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

library.add(fab, faShoppingCart)


function App() {
  return (
    <BrowserRouter basename='/react'>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={'Productos Disponibles'}/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos Disponibles'}/>}/>
      <Route path='/item/:id' element={<ItemDetailCointainer />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/checkout' element={<Checkout />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
