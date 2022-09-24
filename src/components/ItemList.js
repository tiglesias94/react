import Item from "./Item";


const ItemList = ({products}) => {
    return ( 
        <div> 
        {products.map((item) => (
            <Item key={item.id} name={item.name} />
        ))}
        </div>
    );
}
 
export default ItemList;