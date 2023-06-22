import React from "react";

import HeaderCart  from "./HeaderCart";
import style from './Header.module.css';
import mealsImage from '../../assets/meals.jpg'


const Header = (props) =>{
    return(
        <React.Fragment>
            <header className = {style.header}>
                <h1>ReactMeals</h1>
                <HeaderCart onCart = {props.onCart}/>
            </header>
            <div className={style['main-image']}>
                <img src = {mealsImage}></img>
            </div>
        </React.Fragment>
    )
}

export default Header