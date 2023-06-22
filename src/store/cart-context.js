import React from "react";

export const CartContext = React.createContext({
    items:[{
        meal: '',
        quantity: 0,
        cost: 0,
        id: ''
    }],
    AddToCart: (meal,quantity,cost)=>{},
    RemoveFromCart: (id)=>{},
    EmptyCart: ()=>{}
})


function cartReducer(state,action){

    console.log(state)
    if(action.type === "AddToCart"){
    console.log("here")
    const i = state.findIndex(e => e.meal === action.meal);
    if (i > -1) {
        const copy = [...state];
        copy[i].quantity = +state[i].quantity + +action.quantity
        return copy
    }

    let updatedCart = state.concat({
        meal: action.meal,
        quantity: +action.quantity,
        cost: action.cost,
        id: Math.random()
    })
    return updatedCart;
    }

    if(action.type === "RemoveFromCart"){
        const copy = [...state]
        const i = copy.findIndex(e => e.meal === action.meal);
        if (i > -1) {
        copy[i].quantity = +state[i].quantity - 1
        if (copy[i].quantity == 0){
            copy.splice(i, 1)
        }
        return copy
    }
        return copy
    }

    if(action.type === 'EmptyCart'){
        return []
    }

    return state;
}

const CartProvider = (props)=>{
    
    const [cart,CartDispatch] = React.useReducer(cartReducer,[
    ])


    const AddToCart = (Meal,Quantity,Cost)=>{
        CartDispatch({type:"AddToCart",meal:Meal,quantity:Quantity,cost:Cost})
    }
    const RemoveFromCart = (Meal)=>{
        CartDispatch({type:"RemoveFromCart",meal:Meal})
    }

    const EmptyCart = () =>{
        CartDispatch({type:"EmptyCart"})
    }

    return(
    <CartContext.Provider
        value = {{
                items:cart,
                AddToCart: AddToCart,
                RemoveFromCart: RemoveFromCart,
                EmptyCart: EmptyCart
    }}>
        {props.children}
    </CartContext.Provider>)

    }

export default CartProvider;