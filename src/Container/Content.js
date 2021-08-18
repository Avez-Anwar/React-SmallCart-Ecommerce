import React from 'react'
import Products from '../Products/Products'
import "./Content.css"


function Content(props) {
    console.log(props.items)
    return (
        <div className="display-data">
            <img src={props.items.img} alt="img" />
            <p>{props.items.name}</p>
            <p>${props.items.price}</p>
            <button onClick={() => props.onAdd(props.items)}>Add To Cart</button>
        </div>
    )
}

export default Content
