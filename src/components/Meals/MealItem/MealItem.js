import React, { useContext } from "react";
import classes from './MealItem.module.css'
import MealForm from "./MealForm";
import { CartContext } from "../../../store/cart-context";

const MealItem = (props) =>{


    const cartCtx = useContext(CartContext)

    function addToCartHandler(quantity){
        cartCtx.AddToCart(props.meal.name,quantity,props.meal.price)
        return false
    }
    
    let price = '$'+props.meal.price.toFixed(2)
    
    return(
            <li className={classes.meal}>
                <div>
                    <h3>{props.meal.name}</h3>
                    <div className={classes.description}>{props.meal.description}</div>
                    <div className = {classes.price}>{price}</div>
                </div>
                
                <div>
                <MealForm OnAdd = {addToCartHandler}/>
                </div>
            </li>
        
    )
}


export default MealItem;