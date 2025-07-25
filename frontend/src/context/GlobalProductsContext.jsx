import { useState, createContext, useEffect } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const ProductsContext = createContext();


export default function GlobalProductsContext({ children }) {
    const [cartItem, setCartItem] = useState({});
    const currency = '$';
    const delevery_fee = 10;
    const addToCart = async (id, size) => {
        if (!size) {
            toast.error('Please select a size');
            return;
        }

        const cartData = structuredClone(cartItem);

        if (cartData[id]) {
            if (cartData[id][size]) {
                cartData[id][size] += 1;
            }
            else {
                cartData[id][size] = 1;
            }
        }
        else {
            cartData[id] = {};
            cartData[id][size] = 1;
        }
        setCartItem(cartData);
    }
    const getCartCount = () => {
        let totalCount = 0;
        for (let items in cartItem) {
            for (let item in cartItem[items]) {
                if (cartItem[items][item] > 0) {
                    totalCount += cartItem[items][item];
                }
            }
        }
        return totalCount;
    }
    const updateQuantity = (id, size, quantity) => {
        const cartData = structuredClone(cartItem);
        cartData[id][size] = quantity
    }
    useEffect(() => {
        console.log(cartItem);
    }, [cartItem])
    const value = {
        currency,
        delevery_fee,
        products, addToCart,
        cartItem, getCartCount,
        updateQuantity
    }

    return (
        <div>
            <ProductsContext.Provider value={value}>
                {children}
            </ProductsContext.Provider>
        </div>
    )
}
