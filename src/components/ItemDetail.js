import Item from "./Item";
import  ItemCount from "./ItemCount";
import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import cartContext from "../context/cartContext";


const ItemDetail = ({ product }) => {
    const { addItem } = useContext(cartContext);
    const [count, setCount] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true);
  
    const handleAdd = (value) => {
      setCount(value);
      setShowItemCount(false);
      addItem(product, value);
    };
  
    return (
      <div className='itemDetailContainer'>
        <Item product={product} />
        {showItemCount && (<ItemCount
            initial={1}
            stock={999}
            onAdd={handleAdd}
          />)}
        {!showItemCount && (
            <Link to='/cart'>
              <Button variant="success">
                  Ir al Carrito
              </Button>
            </Link>
        )}
      </div>
    );
  }

  export default ItemDetail;