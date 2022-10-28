import './ItemCount.css'
import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';


const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const handleSubtract = () => {
    setCount(count - 1)
  }

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleClick = () => {
    onAdd(count);
  }

  useEffect(() => {
      setCount(parseInt(initial));
  },[initial])

  return (
    <div className='itemCountContainer'>
        <div className='itemCountButtons'>
          <Button   variant="light" disabled={count <= 1} onClick={handleSubtract} className="SumButton">
            -
          </Button>
          <h5 className="countNumber">{count}</h5>
          <Button  variant="light" disabled={count >= stock} onClick={handleAdd} className="SumButton">
            +
          </Button>
        </div>
      <div>
      <Button variant="danger" disabled={stock <= 0} onClick={handleClick} className="addButton">
        Agregar al  Carrito
      </Button>
      </div>
    </div>
  )
}

export default ItemCount