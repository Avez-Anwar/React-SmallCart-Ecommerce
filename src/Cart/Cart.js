import React from "react";
import "./Cart.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import Header from "../Header/Header";

function Cart(props) {
    const itemPrice = props.cartItem.reduce((a, c) => a + c.price * c.qty, 0)
    const taxPrice = itemPrice * 0.14;
    const shippingPrice = itemPrice > 2000 ? 0 : 50
    const totalPrice = itemPrice + taxPrice + shippingPrice
    return (
        <div className="cart-content">
            <h4>Cart Items</h4>
            <div>
                {props.cartItem.length === 0 && <div>Cart is Empty</div>}
                {props.cartItem.map((item) => {
                    return (
                        <div key={item.id} className="cartId__content">
                            <div className="cartId__name">{item.name}</div>
                            <div className="cartId__buttonOne">
                                <button className="cartId__buttonGreen" onClick={() => props.onAdd(item)}>+</button>
                            </div>
                            <div className="cartId__buttonOne">
                                <button className="cartId__buttonRed" onClick={() => props.onRemove(item)}>-</button>
                            </div>
                            <div>
                                {item.qty}x ${item.price}
                            </div>

                        </div>
                    );
                })}

                {props.cartItem.length !== 0 && (
                    <>
                        <hr />
                        <div>
                            <div>Items Price</div>
                            <div>${itemPrice.toFixed(2)}</div>
                        </div>
                        <div>
                            <div>Tax Price</div>
                            <div>${taxPrice.toFixed(2)}</div>
                        </div>
                        <div>
                            <div>Shipping Price</div>
                            <div>${shippingPrice.toFixed(2)}</div>
                        </div>
                        <div>
                            <div>Total Price</div>
                            <div>${totalPrice.toFixed(2)}</div>
                        </div>
                        <div className="cartId__buttonAlert">
                            <button onClick={() => alert("Chekout Completed")}>Check Out</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;
