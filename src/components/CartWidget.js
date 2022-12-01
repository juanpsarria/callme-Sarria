import React from "react";
//SE IMPORTA IMAGEN DE CARRITO
import cartWidget from './img/cart-widget.png';
import './style.css';

//SE CREA COMPONENTE, IMPORTADO EN NavBar.js
const CartWidget = () => {
    return(
    <div className="cart-container">
        <img src={cartWidget} className="cart-img" alt="Carrito de compras"/>
        <span>0</span>
    </div>
    )
};

export default CartWidget;