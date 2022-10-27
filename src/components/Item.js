import { ItemCount } from "./ItemCount";
import './Item.css'
import {Link} from 'react-router-dom';


const Item = ({product}) => {

    return ( 
        <div className="item__card">  
            <h1 className="card__title">{product.title}</h1>
            <img src={product.pictureURL} className="card__img"></img>
            <p className="card__desc">{product.description}</p>
            <Link to={`/item/${product.id}`}>
                <button className='card__seeDetails'>VER DETALLES</button>
            </Link>
        </div>
     );
}
 
export default Item;