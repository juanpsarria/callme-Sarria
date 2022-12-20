import React from "react";
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from "../constants/data/products";
import Card from "./Item";
import "./style.css";

const ItemListContainer = () => {
    const navigate = useNavigate();
    const onHandlerSelect = (product) => {
        navigate(`/product/${product.id}`, { state: product })
    }
    return (
        <>
            <div>
                <h1 className="new-products">NUEVOS INGRESOS</h1>
            </div>
            <div className='products-container'>
                {PRODUCTS.map((product) => (
                    <Card product={product} key={product.id} onSelect={onHandlerSelect}/>
                ))}
            </div>
        </>
    );
};

export default ItemListContainer;