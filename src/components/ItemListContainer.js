import './ItemListContainer.css'
import ItemList from './ItemList';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

import { getProducts } from '../utils/products';
    
const ItemListContainer = ({greeting}) =>{

    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts()
            .then((data)=>setProducts(data))
            .catch((error)=> console.warn(error))
    },[]);

    const{categoryName} = useParams();
    useEffect(()=>{
        console.log(categoryName)
    },[categoryName])

    return(
        <div>
           <h1>Tienda EntreEspigas</h1> 
           <h3 className="greeting">{greeting}</h3>
           <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;