import Item from "./Item";
import  ItemCount from "./ItemCount";
import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import cartContext from "../context/cartContext";
import "./ItemDetail.css"


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
        
        <div className="itemDetail__card">  
            <h1 className="detailCard__title">{product.title}</h1>
            <img src={product.pictureURL} className="detailCard__img"></img>
        </div>

        <div className="productDetail">
          <p className="productDetail__info">{product.detail}</p> 
          <div className="productDetail__buttons">
          {showItemCount && (<ItemCount
            initial={1}
            stock={999}
            onAdd={handleAdd}
          />)}
          {!showItemCount && (
            <div className="cartButton__container">
              <Link to='/cart'>
                <Button variant="success" className="cartButton">
                    Ir al Carrito
                </Button>
              </Link>
            </div>
          )}
          </div>
        </div>
          
      </div>
         
    );
  }

  export default ItemDetail;