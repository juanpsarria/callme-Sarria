import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { getProducts } from "../constants/data/products";
import Card from "./Item";
import "./style.css";

const ItemListContainer = () => {
    const {id}= useParams();
    const navigate = useNavigate();
    const [products, setProducts]= useState([])
    const onHandlerSelect = (product) => {
        navigate(`/product/${product.id}`, { state: product })
    }

    useEffect(()=>{
        getProducts()
        .then((res)=> {
            if(id){
                setProducts(res.filter((item)=> item.category === id))
            }else{
                setProducts(res)
            }
        })
    },[id])
    
    return (
        <>
            <div>
                <h1 className="new-products">NUEVOS INGRESOS</h1>
            </div>
            <div className='products-container'>
                {products.map((product) => (
                    <Card product={product} key={product.id} onSelect={onHandlerSelect}/>
                ))}
            </div>
        </>
    );
};

export default ItemListContainer;