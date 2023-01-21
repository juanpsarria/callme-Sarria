import React, { useContext} from "react";
import './style.css';
import { Link } from "react-router-dom";
import { CartContext } from "../../context";
import CartItem from "../CartItem";

const Sidebar = ({children, onClose, isOpen}) => {
    const { cart, total, onRemoveItem } = useContext(CartContext);
    return (
        <div 
        className="sidebar"
        style={{
            transform: isOpen ? 'translateX(0)' : 'translateX(100%)'
        }}
        >
            <div className="close-button-container">
                <button onClick={onClose} className="close-button">X</button>
            </div>
            <div  className='cart-container'>
                {cart.length === 0 ? (
                <p className='empty-cart'>El carrito está vacío</p>
                ) : (
                    cart.map((item) => (
                        <CartItem key={item.id} {...item} onRemoveItem={onRemoveItem} />
                    )
                ))}
                <p>Total:</p>
                <h2>${total}</h2>
            <Link to='/cart' className='button-cart'>FINALIZAR COMPRA</Link>
            </div>
        </div>
    )
}
export default Sidebar;