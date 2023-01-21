import React, {useContext} from "react";
import { CartContext } from "../../context";
//SE IMPORTA IMAGEN DE CARRITO
import cartWidget from './img/cart-widget.png';
import './style.css';

//SE CREA COMPONENTE, IMPORTADO EN NavBar.js
const CartWidget = ({onHandlerCart}) => {
    const { cart } = useContext(CartContext);

    return (
        <div className="cart-container" onClick={onHandlerCart}>
            <img src={cartWidget} className="cart-img" />
            <div className="cart-quantity-container">
                <span className="cart-quantity">{cart.length}</span>
            </div>
        </div>
    )
};

export default CartWidget;