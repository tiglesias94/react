import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';

const CartWidget = () => {
    return ( 
        <>
        <Link to='/cart'> 
            <FontAwesomeIcon icon="shopping-cart" size="1x" color="whitesmoke"/>
        </Link>
        </>
     );
}
 
export default CartWidget;