import Item from "./Item";
import { ItemCount } from "./ItemCount";

const ItemDetail = ({product}) => {
    return ( 
        <div>
            <div className="item__card">  
                <h1 className="card__title">{product.title}</h1>
                <img src={product.pictureURL} className="card__img"></img>
                <p>{product.description}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula suscipit mauris. Fusce egestas id odio luctus convallis. Ut at congue odio. In nec velit faucibus metus suscipit facilisis. Sed volutpat tincidunt odio, ac laoreet arcu ultrices at. </p>
                <h3>PRECIO POR CAJA: ${product.price}</h3>
                <h3>CANTIDAD</h3>
                <ItemCount />
                <button className='card__addToCart'>AGREGAR AL CARRITO</button>
            </div>           
        </div>
     );
}
 
export default ItemDetail;