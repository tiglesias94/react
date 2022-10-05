import './ItemListContainer.css'
import ItemList from './ItemList';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

import { getAllProducts, getProductsByCategory } from '../utils/products';
    
const ItemListContainer = ({greeting}) =>{

    const [products, setProducts] = useState([])


    const{categoryName} = useParams();

    useEffect(()=>{
        if(categoryName){
            getProductsByCategory(categoryName)
            .then((data)=>setProducts(data))
            .catch((error)=> console.warn(error))
        } 
        else {
            getAllProducts()
            .then((data)=>setProducts(data))
            .catch((error)=> console.warn(error))
        }
    },[categoryName]);

    return(
        <div>
           <h1>Tienda EntreEspigas</h1> 
           <h3 className="greeting">{greeting}</h3>
           <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;