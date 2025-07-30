import { useContext, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import CartTotal from '../components/cartTotal'
import Text from '../components/Text'
import { ProductsContext } from '../context/GlobalProductsContext'

const PlaceOrder = () => {
    const { navigate } = useContext(ProductsContext)
    const [method, setMethod] = useState('cod');
    return (
        <div className='my-10 py-10'>
            <form className='flex justify-around flex-col lg:flex-row gap-4 lg:gap-6'>
                <div className='flex px-1.5 flex-col gap-4 w-full lg:w-1/2'>
                    <Text text1='Place Your Order' text2='Please fill in your details to proceed with the order.' />
                    <div className='flex justify-between gap-2 sm:gap-4'>
                        <input type="text" name='firstName' className='place-order-input' placeholder='First Name' />
                        <input type="text" name='lastName' className='place-order-input' placeholder='Last Name' />
                    </div>
                    <input type="email" name='email' className='place-order-input' placeholder='Email Adress' />
                    <input type="text" name='street' className='place-order-input' placeholder='Street' />
                    <div className='flex justify-between gap-2 sm:gap-4'>
                        <input type="text" name='city' className='place-order-input' placeholder='City' />
                        <input type="text" name='state' className='place-order-input' placeholder='State' />
                    </div>
                    <div className='flex justify-between gap-2 sm:gap-4'>
                        <input type="text" name='zipcode' className='place-order-input' placeholder='Zipcode' />
                        <input type="text" name='country' className='place-order-input' placeholder='Country' />
                    </div>
                    <input type="number" name='phone' className='place-order-input' placeholder='Phone Number' />
                </div>
                <div className='flex flex-col justify-center gap-2 items-center '>
                    <CartTotal />
                    <div className='-mt-6'>
                        <Text text1='Payment Method' />
                        <div className='flex gap-3 flex-col' >
                            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                                <img className='h-6 mx-4' src={assets.stripe_logo} alt="" />
                            </div>
                            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                                <img className='h-6 mx-4' src={assets.razorpay_logo} alt="" />
                            </div>
                            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                                <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                            </div>
                            <button onClick={() => navigate('/orders')} className='bg-grad text-white my-3.5 py-2 px-3 rounded-lg text-sm lg:text-lg cursor-pointer'>PLACE ORDER</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PlaceOrder
