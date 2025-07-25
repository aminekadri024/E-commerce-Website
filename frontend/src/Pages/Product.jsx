import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../context/GlobalProductsContext'

const Stars = () => {
    return (
        <div className='flex items-center gap-1'>
            <i className="fa-solid fa-star text-yellow-600"></i>
            <i className="fa-solid fa-star text-yellow-600"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
        </div>
    )
}

const Product = () => {
    const [size, setSize] = useState();
    const { products, addToCart } = useContext(ProductsContext);
    const { id } = useParams();
    const product = products.find(product => product._id === id);
    return (
        <div className='conainer mt-30 mx-auto px-4 py-8'>
            <div className='flex flex-col sm:flex-row items-center sm:items-start gap-10 justify-start mb-8'>
                <div className='w-9/10 flex justify-center md:w-1/2'>
                    <img src={product.image} className='rounded-3xl shadow-2xl max-w-full' />
                </div>
                <div className='flex flex-col gap-y-4 md:w-1/2 w-full'>
                    <h1 className='text-2xl md:text-3xl font-bold'>{product.name}</h1>
                    <Stars />
                    <h1 className='text-color font-bold text-3xl'>${product.price}</h1>
                    <p className='text-sm text-gray-700'>{product.description}</p>
                    <p className='text-md font-semibold'>Select Size</p>
                    <div className='flex justify-center sm:justify-start gap-x-1'>
                        {
                            product.sizes.map((sizesItem, index) => <button key={index} className='size-btn' onClick={() => setSize(sizesItem)} >
                                {sizesItem}
                            </button>)
                        }
                    </div>
                    <button className=' my-4 cursor-pointer bg-grad text-white p-2 text-sm rounded-xl font-bold w-1/3 sm:ml-0 sm:w-2/3 mx-auto'
                        onClick={() => addToCart(product._id, size)}
                    >ADD TO CART</button>
                    <span className='h-0.5 w-2/3 bg-gray-600 my-2.5 sm:ml-0 mx-auto'></span>
                    <p className='text-sm text-gray-700'>
                        100% Original product.Cash on delivery is available on this product.
                        Easy return and exchange policy within 7 days
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Product
