import './ItemCount.css'
import React, { useState } from "react";

export let ItemCount = ()=>{

    let [count, setCount] = useState(0);

    const sum = ()=>{
        setCount(count + 1);
    }

    const sub = ()=>{
        if (count>0){
            setCount(count - 1)
        }else{
            count=0
        }
    }

    return(
        <div className='card__counter'>
            <div className='counter__operators'>
                <button onClick={sub} className='counter__button'>-</button>
                <h4 className='counter__display'>{count}</h4>
                <button onClick={sum} className='counter__button'>+</button>
            </div>
        </div>
    )
}