import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useState } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import ItemDetailCointainer from './components/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import cartContext, { CartProvider } from "./context/cartContext"
import { useEffect } from 'react';
import {collection, getDocs, docs, getFirestore} from "firebase/firestore";
library.add(fab, faShoppingCart)


function App() {


 //Acceso a una colección 
 useEffect(()=>{
  
  const database = getFirestore();
  
  const collectionReference = collection(database, "items")

  // Obtenemos los datos a partir de la referencia creada
  getDocs(collectionReference)
    .then((snapshot)=>{
      // armamos un listado de objetos literales con los id y demas campos de cada documento
      const list = snapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data()
      }))
})  

 },[])


  return (
    <BrowserRouter basename='react'>
      <CartProvider>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
            <Route path='/item/:id' element={<ItemDetailCointainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
      </CartProvider>
  </BrowserRouter>
  );
}

export default App;
