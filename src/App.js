import React from "react";
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Modal from './components/UI/Modal'
import Cart from './components/Cart/Cart'
import CartProvider from './store/cart-context'

function App() {

  
    const [cartModal,setCartModal] = React.useState(false)

    const ShowCartHandler = () =>{
        setCartModal(true);
        
    }

    const CloseCartHandler = () =>{
        setCartModal(false)
    } 

  return (
    <CartProvider>
      {cartModal && <Modal onConfirm={CloseCartHandler} ModalBox={<Cart onClose={CloseCartHandler}/>}/> }
      <Header onCart={ShowCartHandler}/>

      <main>
      <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
