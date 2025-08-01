import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../context/GlobalProductsContext'
import Product from '../components/Product'
import Text from '../components/Text'

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

const ProductPage = () => {
    const [size, setSize] = useState();
    const { products, addToCart } = useContext(ProductsContext);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const { id } = useParams();
    const product = products.find(product => product._id === id);
    const [imageIndex, setImageIndex] = useState(0);
    const [btnIsClicked, setBtnIsClicked] = useState(false);

    const getImageIndex = (imgIndex) => {
        setImageIndex(imgIndex);
    }
    useEffect(() => {
        if (product) {
            const filteredProducts = products.filter(p => p.category === product.category && p.subCategory === product.subCategory && p._id !== product._id);
            setRelatedProducts(filteredProducts.slice(0, 4)); // Get up to 4 related products
        }
    }, [product, products]);
    return (
        <div className='conainer mt-30 mx-auto px-4 py-8'>
            <div className='flex flex-col sm:flex-row items-center sm:items-start gap-10 justify-start mb-8'>
                <div className='w-9/10 flex justify-center md:w-1/2'>
                    {/* display images */}
                    {
                        product.image.length > 1 ?
                            (
                                <div className='flex justify-start md:justify-center gap-1.5 w-full'>
                                    <div className='flex justify-center items-start flex-col gap-y-1 w-1/4'>
                                        {product.image.map((img, index) => {
                                            if (index !== imageIndex) {
                                                return <img key={index} onClick={() => getImageIndex(index)} src={img} className='cursor-pointer rounded-xl shadow-2xl w-full' alt={`Product ${index + 1}`} />
                                            }
                                        }
                                        )}
                                    </div>
                                    <div className='flex items-center w-3/4'>
                                        {product.image.map((img, index) => {
                                            if (index === imageIndex) {
                                                return <img key={index} onClick={() => getImageIndex(index)} src={img} className='cursor-pointer h-full rounded-xl shadow-2xl w-full' alt={`Product ${index + 1}`} />
                                            }
                                        }
                                        )}
                                    </div>
                                </div>
                            )
                            : (
                                <img src={product.image[0]} className='rounded-xl shadow-2xl max-w-full' alt="Product" />
                            )
                    }
                </div>
                <div className='flex flex-col gap-y-4 md:w-1/2 w-full'>
                    {/* product information */}
                    <h1 className='text-2xl md:text-3xl font-bold'>{product.name}</h1>
                    <Stars />
                    <h1 className='text-color font-bold text-3xl'>${product.price}</h1>
                    <p className='text-sm text-gray-700'>{product.description}</p>
                    <p className='text-md font-semibold'>Select Size</p>
                    <div className='flex justify-center sm:justify-start gap-x-1'>
                        {
                            product.sizes.map((sizesItem, index) => <button key={index} className={`size-btn ${size === sizesItem ? 'bg-black text-white' : ''}`} onClick={() => setSize(sizesItem)} >
                                {sizesItem}
                            </button>)
                        }
                    </div>
                    <button className={`my-4 cursor-pointer bg-grad text-white p-2 text-sm rounded-xl font-bold w-1/3 sm:ml-0 sm:w-2/3 mx-auto ${btnIsClicked ? 'border-yellow-500 border' : ''}`}
                        onClick={() => { addToCart(product._id, size); setBtnIsClicked(true) }}
                    >ADD TO CART</button>
                    <span className='h-0.5 w-2/3 bg-gray-600 my-2.5 sm:ml-0 mx-auto'></span>
                    <p className='text-sm text-gray-700'>
                        100% Original product.Cash on delivery is available on this product.
                        Easy return and exchange policy within 7 days
                    </p>
                </div>
            </div>
            <Text text1='Related Products' text2='You may also like these products' />
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1'>
                {relatedProducts.length > 0
                    ? relatedProducts.map((product, index) => (
                        <Product
                            key={index}
                            id={product._id}
                            image={product.image[0]}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                        />
                    ))
                    : "No Products"}
            </div>
        </div>
    )
}

export default ProductPage
