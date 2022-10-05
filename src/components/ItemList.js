import Item from "./Item";


const ItemList = ({products}) => {
    return ( 
        <div> 
        {products.map((item) => (
            <Item key={item.id} title={item.title} pictureURL={item.pictureURL} description={item.description} id={item.id}/>
        ))}
        </div>
    );
}
 
export default ItemList;