import './ItemListContainer.css'
import ItemList from './ItemList';

const products = [
    {id:'alfa-N-6', name:'Alfajor Negro Caja x6u', stock:'0'},
    {id:'alfa-N-12', name:'Alfajor Negro Caja x12u', stock:'0'},
    {id:'alfa-B-6', name:'Alfajor Blanco Caja x6u', stock:'0'},
    {id:'alfa-B-12', name:'Alfajor Blanco Caja x12u', stock:'0'}
    ];

    
const ItemListContainer = ({greeting}) =>{
    return(
        <div>
           <h1>Tienda EntreEspigas</h1> 
           <h3 className="greeting">{greeting}</h3>
           <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;