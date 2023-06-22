import ReactDom from 'react-dom'
import React from 'react'
import classes from './Modalh.module.css'
import Cart from '../Cart/Cart'


const BackDrop  = (props)=>{
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}

const ModalWindow = (props)=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Modal = (props) =>{

    return(
        <React.Fragment>
            {ReactDom.createPortal(<BackDrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop'))}
            {ReactDom.createPortal(<ModalWindow>{props.ModalBox}</ModalWindow>, document.getElementById('modal'))}
        </React.Fragment>
        
    )
}

export default Modal;