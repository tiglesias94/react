import { ItemCount } from "./ItemCount";
import './Item.css'
import {Link} from 'react-router-dom';

const Item = ({title, pictureURL, description, id}) => {
    return ( 
        <div className="item__card">  
            <h1 className="card__title">{title}</h1>
            <img src={pictureURL} className="card__img"></img>
            <p>{description}</p>
            <ItemCount />
            <button className='card__seeDetails'>VER DETALLES</button>
            <button className='card__addToCart'>
                <Link to={`/item/${id}`}>"AGREGAR CARRITO"</Link>
            </button>
        </div>
     );
}
 
export default Item;