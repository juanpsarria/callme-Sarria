import React, {useState, useEffect} from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getProducts } from "../constants/data/products";
import Detail from "./ItemDetail";
import "./style.css";

const ItemDetailContainer = () => {
    const [products, setProducts]= useState([])

    useEffect(() => {
        getProducts()
        .then((res) => setProducts(res))
    },[])

    const {id}= useParams();
    const { state } = useLocation() || {};
    const [cart, setCart] = useState([]);

    const onDecreaseItem = (id) => {
        setCart(currentCart => {
            if(currentCart?.find((product) => product.id === id)?.quantity === 1){
                return currentCart.filter((product) => product.id !== id);
            } else {
                return currentCart?.map((product) => {
                    if(product.id === id) {
                        return {
                            ...product,
                            quantity: product.quantity - 1
                        }
                    } else {
                        return product;
                    }
                })
            }
        })
    }
    const onIncreaseItem = (id) => {
        const item = products.find((product) => product.id === id);
        if(cart?.find((product) => product.id === id)?.quantity === item.stock) return;
        if(cart?.length === 0) {
            setCart([{...item, quantity: 1}])
        } else if(cart?.length > 0 && !cart?.find((product) => product.id === id)){
            setCart([...cart, {...item, quantity: 1}]);
        } else {
            setCart(currentCart => {
                return currentCart.map((product) => {
                    if(product.id === id) {
                        return { ...product, quantity: product.quantity + 1 }
                    } else {
                        return product;
                    }
                })
            })
        }
    }

    const getItemQuantity = (id) => {
        return cart?.find((product) => product.id === id)?.quantity || 0;
    }

    return (
        <div className="detail-container">
            {state ? (
            <Detail 
                id={id}
                product={state} 
                key={state?.name} 
                onSelect={() => {}} type='card' 
                descreaseQty={onDecreaseItem} 
                increaseQty={onIncreaseItem} 
                numberOfItem={getItemQuantity(state?.id)}
                />
            ) : <Link to="/" className="button-cart">Go Home</Link>}
        </div>
    )
};

export default ItemDetailContainer;