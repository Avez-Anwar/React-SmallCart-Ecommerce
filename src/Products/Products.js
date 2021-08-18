import React, { useState } from 'react'
import data from "../data"
import Content from '../Container/Content'
import "./Products.css"
import Cart from '../Cart/Cart'
import Header from '../Header/Header'

function Products() {
    const [cartItem, setCartItem] = useState([])
    console.log(data.products)

    const onAdd = (product) => {
        const exist = cartItem.find((x) => x.id === product.id)

        if (exist) {
            setCartItem(cartItem.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
            ))
        }
        else {
            setCartItem([...cartItem, { ...product, qty: 1 }])
        }
    }

    const onRemove = (product) => {
        const exist = cartItem.find((x) => x.id === product.id)
        if (exist.qty === 1) {
            setCartItem(cartItem.filter((x) => x.id !== product.id))
        } else {
            setCartItem(cartItem.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            ))
        }
    }

    return (
        <div>
            <Header countCartItem={cartItem.length} />
            <div className="grid__main">
                <div className="grid-item"> {data.products.map((product) => {
                    return (
                        <div key={product.id} >
                            <Content onAdd={onAdd} onRemove={onRemove} items={product} />
                        </div>
                    )
                })
                }
                </div>
                <div className="cart-items">
                    <Cart onAdd={onAdd} onRemove={onRemove} cartItem={cartItem} />

                </div>

            </div>
        </div>
    )
}

export default Products
