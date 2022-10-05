import { useEffect, useState } from 'react';
import { ModalTitle } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { getProduct } from '../utils/products';
import Item from './Item';
import ItemList from './ItemList';

const ItemDetailCointainer = () => {

    const [product, setProduct] = useState({})
    const {id} = useParams();
    
    useEffect(()=>{
        getProduct(id)
            .then((data)=>{
                setProduct(data)
            })
            .catch(error => console.warn(error))
    }, [id])

    console.log(product);

        return ( 
            <>
            <h1>Detalle del Producto</h1>
            <Item product={product} />
            </>
        );
}
 
export default ItemDetailCointainer;