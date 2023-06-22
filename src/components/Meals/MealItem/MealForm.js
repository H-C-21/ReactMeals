import React, { useContext } from "react";
import classes from './MealForm.module.css'
import { CartContext } from "../../../store/cart-context";

const MealForm = (props)=>{

    const quant = React.useRef(2)
    let cartCtx = useContext(CartContext)
    const [warning,setWarning] = React.useState(false)

    function turnOff(){
        setWarning(false)
    }
    function addToCartHandler(event){        
        if(quant.current.value != 0){
        props.OnAdd(quant.current.value)
        setWarning(false)
        }
        else{
            setWarning(true)
            }
        
        event.preventDefault()
    }    

    return(
    <div>
        <form className={classes.form} onSubmit={addToCartHandler}>
            <div className={classes.input}>

            <label htmlFor ="orders">Amount</label>
            <input type="number" min='0' defaultValue='0' name ="orders" ref={quant} onChange={turnOff}></input>
            </div>
            {warning && <div className = {classes.warn}>Please Enter A Valid Amount</div>}
            <button type="submit">+ Add</button>
        </form>
    </div>
    )
}

export default MealForm;