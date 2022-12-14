import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getProduct } from '../utils/products';
import ItemDetail from "./ItemDetail"

const ItemDetailCointainer = () => {

    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        getProduct(id)
            .then((data) => {
                setProduct(data)
            })
            .catch(error => console.warn(error))
    }, [id])

    console.log(product);

    return (
        <>
            <ItemDetail product={product} />
        </>
    );
}

export default ItemDetailCointainer;