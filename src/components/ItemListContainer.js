import './css/ItemListContainer.css'
import ItemList from './ItemList';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

import { getAllProducts, getProductsByCategory } from '../utils/products';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])


    const { categoryId } = useParams();

    useEffect(() => {
        if (categoryId) {
            getProductsByCategory(categoryId)
                .then((data) => setProducts(data))
                .catch((error) => console.warn(error))
        }
        else {
            getAllProducts()
                .then((data) => setProducts(data))
                .catch((error) => console.warn(error))
        }
    }, [categoryId]);

    return (
        <div className='mainBanner'>
            <div className='subBanner'><img src="https://firebasestorage.googleapis.com/v0/b/coderhouse-react-tiglesias.appspot.com/o/PNG%20MOD%20BLANCO.png?alt=media&token=94774dfb-9906-41b0-ad57-b47540ff0dd6" className='mainBanner__logo' alt='Imagen de Producto'></img>
                <h1 className="mainTitle">Alfajores de Especialidad</h1>
            </div>
            <ItemList products={products} />
            <footer></footer>
        </div>
    );
}

export default ItemListContainer;