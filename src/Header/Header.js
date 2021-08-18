import React from 'react'
import Products from '../Products/Products'
import "./Header.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';



function Header(props) {
    return (
        <div className="header__main">
            <h2>Small Shopping Cart</h2>
            <div>
                <span>Cart</span>
                {/*  {props.countCartItem ? (
                    <button>{props.countCartItem}</button>
                ) : ("")} */}
                <span>SignIn</span>
                <Badge color="secondary" badgeContent={props.countCartItem} style={{ fontSize: "20px" }}>
                    <ShoppingCartIcon />
                </Badge>
            </div>

        </div>
    )
}

export default Header
