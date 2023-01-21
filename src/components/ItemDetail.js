import React, { useState } from "react";
import './style.css'

const Detail = ({ product, onSelect, descreaseQty, increaseQty, numberOfItem }) => {
    const { id, description, image, name, price, stock } = product || {};
    const {cart, setCart} = useState

    const addToCart = (product) => {
        setCart([...cart,product]);
    };

    return (
        <div className="detail" onClick={() => onSelect(product)}>
            <div>
                <img className="detail-image" src={image} alt={name} />
            </div>
            <div className="detail-content">
                <h3 className="detail-name">{name}</h3>
                <p className="detail-description">{description}</p>
                <div className="price-buttons-container">
                    <div className="container-detail-price">
                        <p className="detail-price">${price}</p>
                        { stock >= 1 ? <span>En stock</span> : <span>Sin stock</span>}
                    </div>
                    <div className="buttons-container">
                        <div className="count-container">
                            <button
                                className='count-container-button'
                                onClick={() => descreaseQty(id)}
                                disabled={numberOfItem === 0}
                            >-</button>
                            <input
                                disabled
                                className='count-container-quantity'
                                type='text'
                                value={numberOfItem}
                            />
                            <button
                                className='count-container-button'
                                onClick={() => increaseQty(id)}
                                disabled={numberOfItem === stock}
                            >+</button>
                        </div>
                    </div>
                    <button className="add-to-cart-button"
                    onClick={()=> addToCart(product)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;