import Item from "./Item";
import "./ItemList.css"


const ItemList = ({products}) => {
    return ( 
        <div className="itemList"> 
        {products.map((item) => (
            <Item key={item.id} product={item}/>
        ))}
        </div>
    );
}
 
export default ItemList;