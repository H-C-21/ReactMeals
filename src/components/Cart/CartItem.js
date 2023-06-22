import React from "react";
import classes from './CartItem.module.css'
import { CartContext } from "../../store/cart-context";


const CartItem = (props) =>{

    let cartCtx = React.useContext(CartContext)

    const addItemHandler = ()=>{
        cartCtx.AddToCart(props.item.meal,1,props.item.cost)
    }

    const removeItemHandler = ()=>{
        cartCtx.RemoveFromCart(props.item.meal)
    }

    return(
        
        <li className={classes['cart-item']}>
            
            <div>
                <h2>{props.item.meal}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>${props.item.cost.toFixed(2)}</span>
                    <span className={classes.amount}>x {props.item.quantity}</span>
                </div>
            </div>
            
            <div className={classes.actions}>
                <button onClick= {removeItemHandler}>-</button>
                <button onClick = {addItemHandler}>+</button>
            </div></li>
    )
}

export default CartItem;