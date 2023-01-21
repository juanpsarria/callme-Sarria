import PRODUCTS from "../constants/data/products";

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(PRODUCTS);
        }, 500);
    });
};