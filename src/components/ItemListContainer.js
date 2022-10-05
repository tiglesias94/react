import './ItemListContainer.css'
import ItemList from './ItemList';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

import { getAllProducts, getProductsByCategory } from '../utils/products';
    
const ItemListContainer = ({greeting}) =>{

    const [products, setProducts] = useState([])


    const{categoryId} = useParams();

    useEffect(()=>{
        if(categoryId){
            getProductsByCategory(categoryId)
            .then((data)=>setProducts(data))
            .catch((error)=> console.warn(error))
        } 
        else {
            getAllProducts()
            .then((data)=>setProducts(data))
            .catch((error)=> console.warn(error))
        }
    },[categoryId]);

    return(
        <div>
           <h1>Tienda EntreEspigas</h1> 
           <h3 className="greeting">{greeting}</h3>
           <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;