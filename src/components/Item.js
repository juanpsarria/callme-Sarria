import React from "react";
import './style.css';

const Card = ({ product, onSelect }) => {
    const { description, image, name, price } = product || {};
    return (
        <div className="card" onClick={() => onSelect(product)}>
            <h3 className="card-name">{name}</h3>
            <img className="card-image" src={image} alt={name} />
            <div className="card-content">
                <p className="card-description">{description}</p>
                <p className="card-price">${price}</p>
            </div>
        </div>
        )
    }


export default Card;