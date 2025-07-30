import { useContext } from 'react';
import { ProductsContext } from '../context/GlobalProductsContext';
import Text from '../components/Text';
const Orders = () => {
    const { products, currency } = useContext(ProductsContext);
    return (
        <div className="border-t py-15">
            <Text text1='Your Orders' text2='Here you can view your past orders and their details.' />
            {
                products && products.length > 0 ?
                    products.slice(1, 4).map((product, index) => (
                        <div key={index} className="p-4 text-gray-700 rounded-lg shadow grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                            <div className="flex items-start gap-6">
                                <img className="w-16 rounded-sm sm:w-20" src={product.image[0]} alt={product.name} />
                                <div>
                                    <p className="text-xs sm:text-lg font-medium">{product.name}</p>
                                    <div className="flex items-center gap-5 mt-2">
                                        <p>{currency}{product.price}</p>
                                        <p className="px-1 sm:px-2 text-xs sm:text-lg sm:py-1 border rounded-lg bg-slate-50">size: M</p>
                                        <p className="px-1 sm:px-2 text-xs sm:text-lg sm:py-1 border rounded-lg bg-slate-50">quantity: 1</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex md:w-1/2 justify-between'>
                                <div className='flex justify-center gap-2'>
                                    <p className='min-w-2 h-2 bg-green-400 rounded-full border'></p>
                                    <p className='md:text-base text-sm'>Ready To Ship</p>
                                </div>
                                <button className='border px-4 pt-2 text-sm font-medium rounded-sm '>Track Order</button>
                            </div>
                        </div>
                    ))
                    : <p className="text-center text-gray-500">No orders found.</p>
            }
        </div>
    )
}

export default Orders
