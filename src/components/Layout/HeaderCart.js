import React, { useContext } from "react";
import classes from './HeaderCart.module.css'
import CartIcon from './CartIcon'
import { CartContext } from "../../store/cart-context";


export const HeaderCart = (props) =>{
    
    let cartCtx = useContext(CartContext)

    const [totalMeals,setTotalMeals] = React.useState(0)
    const [animate,setAnimate] = React.useState(0)
    
    function totalItems(arr) {
        let sum=0
        for (let i = 0; i < arr.length; i++){
            sum += +arr[i].quantity
            }
        
        return sum;
    }

    React.useEffect(()=>{
        setTotalMeals(totalItems(cartCtx.items))
        return ()=>{setAnimate(1)}
    },[cartCtx.items]);

    return(
        <React.Fragment>
            
            <button className={`${classes.button} ${classes.bump}`} bump = {animate} onAnimationEnd={() => setAnimate(0)} onClick={props.onCart}>
             <span className={classes.icon}><CartIcon/></span>
             <span>Your Cart</span>
             <span className={classes.badge}>{totalMeals}</span>
            
            </button>
        </React.Fragment>
    )
}

export default HeaderCart