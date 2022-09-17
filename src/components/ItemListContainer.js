import './ItemListContainer.css'

const ItemListContainer = ({greeting}) =>{
    return(
        <div>
           <h1>Tienda EntreEspigas</h1> 
           <h3 className="greeting">{greeting}</h3>
        </div>
    );
}

export default ItemListContainer;