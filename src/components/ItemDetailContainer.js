import { useParams } from 'react-router-dom'

const ItemDetailCointainer = () => {

const {id} = useParams();

    return ( 
        <h1>Detalle del Producto</h1>
     );
}
 
export default ItemDetailCointainer;