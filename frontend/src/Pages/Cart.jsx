import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/GlobalProductsContext";
import Text from "../components/Text";
import { assets } from "../assets/frontend_assets/assets";

export default function Cart() {
    const { getCartCount, products, currency, cartItem, updateQuantity } = useContext(ProductsContext)
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        let tempData = []
        for (let items in cartItem) {
            for (let item in cartItem[items]) {
                if (cartItem[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItem[items][item],
                    })
                }
            }
        }
        setCartData(tempData);
    }, [cartItem]);
    return (
        <div className="flex flex-col items-center gap-4 text-center px-6 md:gap-6 py-12">
            <Text text1='Your Orders' text2={getCartCount() > 0 ? `You have ${getCartCount()} products in your card` : 'You have no products in your card'} />
            {
                cartData && cartData.length > 0 ?
                    cartData.map((item, index) => {
                        const productData = products.find(product => product._id === item._id);
                        return (
                            <div key={index} className="py-4 text-gray-700 rounded-lg shadow grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                                <div className="flex items-start gap-6">
                                    <img className="w-16 sm:w-20" src={productData.image[0]} alt={productData.name} />
                                    <div>
                                        <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                                        <div className="flex items-center gap-5 mt-2">
                                            <p>{currency}{productData.price}</p>
                                            <p className="px-1 sm:px-2 text-xs sm:text-lg sm:py-1 border bg-slate-50">{item.size}</p>
                                        </div>
                                    </div>
                                </div>
                                <input className="border rounded-lg max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 bg-slate-50" type="number" min={1} defaultValue={item.quantity} />
                                <img onClick={() => updateQuantity(item._id, item.size, 0)} className="w-4 mr-4 sm:w-5 cursor-pointer" src={assets.bin_icon} alt="" />
                            </div>
                        )
                    })
                    : null
            }
        </div>
    );
}



