import { useContext } from "react"
import { ProductsContext } from "../context/GlobalProductsContext"
import Text from "./Text"
const CartTotal = () => {
    const { getTotalPrice, currency, delevery_fee } = useContext(ProductsContext)
    return (
        <div>
            <Text text1='Cart Total' text2='This is the total amount of your cart' />
            <div className="flex flex-col gap-y-3.5">
                <span className="h-0.5 w-full bg-gray-600 mt-2"></span>
                <div className="flex justify-between font-semibold text-sm sm:text-lg">
                    <h1>Subtotal</h1>
                    <h1>{currency}{getTotalPrice()}.00</h1>
                </div>
                <span className="h-0.5 w-full bg-gray-600 mt-2"></span>
                <div className="flex justify-between font-semibold text-sm sm:text-lg">
                    <h1>Shipping Fee</h1>
                    <h1>{currency}{delevery_fee}.00</h1>
                </div>
                <span className="h-0.5 w-full bg-gray-600 mt-2"></span>
                <div className="flex justify-between font-bold text-sm sm:text-lg">
                    <h1>Total</h1>
                    <h1>{currency}{getTotalPrice() === 0 ? '0' : getTotalPrice() + delevery_fee}.00</h1>
                </div>
            </div>
        </div>
    )
}
export default CartTotal