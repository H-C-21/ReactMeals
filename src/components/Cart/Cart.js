import Modal from '../UI/Modal';
import CartItem from './CartItem'
import Checkout from './Checkout';
import classes from './Cart.module.css';
import { CartContext } from '../../store/cart-context';
import React,{useContext, useEffect, useState} from 'react'


const calculateTotalPrice = (Cart) =>{
    
  let totalSum = 0
  for (let i = 0; i < Cart.length; i++){
    totalSum += Cart[i].cost*Cart[i].quantity
  }

  return totalSum.toFixed(2)
}

const Cart = (props) => {

  let cartCtx = useContext(CartContext)
  const [totalPrice,setTotalPrice] = useState(0)
  const [ordered,setOrdered] = useState(false)
  const [isSubmitting,setIsSubmitting] = useState(false)

  useEffect(()=>{
    if(cartCtx.items.length > 0){
    setTotalPrice(calculateTotalPrice(cartCtx.items))
    }
    else{
      setTotalPrice(0)
    }
    },[cartCtx.items])

    
  function OrderHandler(){
    setOrdered(true);
  }

  function CancelHandler(){
    setOrdered(false)
  }

  async function confirmHandler(data){

    setIsSubmitting(true);
    let OrderedData = {CartItem: cartCtx.items,
                       UserInfo: data}

    const response = await fetch('https://orderfood-a823c-default-rtdb.firebaseio.com/order.json',{ 
                          method: 'POST',
                          body: JSON.stringify(OrderedData),
                          headers:{'Content-Type': 'application/json'}})
  
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    setOrdered(false)
    cartCtx.EmptyCart()
    setIsSubmitting(false)
  }

 
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((dish) => (
        <CartItem item={dish} key = {dish.id}></CartItem>
      ))}
    </ul>
  );

  const cartDef = (<div>
    {totalPrice>0 && cartItems}
    {totalPrice == 0 && <p>No Dishes Added</p>}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>${totalPrice}</span>
    </div>
    {!ordered &&
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
      <button className={classes.button} onClick={OrderHandler}>Order</button>
    </div>}
    {ordered && <Checkout onCancel={CancelHandler} onOrder = {confirmHandler}/>}
  </div>)

  return (
    <React.Fragment>
    {!isSubmitting && cartDef}
    {isSubmitting && <h2 className={classes.loading}>Your Order is Being Placed...</h2>}
    </React.Fragment>
  );
};

export default Cart;