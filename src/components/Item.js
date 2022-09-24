import { ItemCount } from "./ItemCount";
import './Item.css'

const Item = ({name, key}) => {
    return ( 
        <div className="item__card">  
            <h1 className="card__title">{name}</h1>
            <ItemCount />
        </div>
     );
}
 
export default Item;