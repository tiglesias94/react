import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import cartContext from '../context/cartContext';

const CartWidget = () => {
    const { totalQuantity } = useContext(cartContext);
    return ( 
        <>
        <Link to="/cart"> 
            <FontAwesomeIcon icon="shopping-cart" size="1x" color="whitesmoke"/>
        </Link>
        {totalQuantity > 0 && (
        <Badge pill bg="danger">{totalQuantity}</Badge>
      )}
        </>
     );
}
 
export default CartWidget;