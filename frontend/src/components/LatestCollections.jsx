
import { useContext, useMemo } from 'react';
import { ProductsContext } from '../context/GlobalProductsContext';
import Text from './Text';
import Product from './Product';

const LatestCollections = () => {
    const { products } = useContext(ProductsContext);

    // Use useMemo to optimize performance and avoid unnecessary re-renders
    const latestProducts = useMemo(() => products.slice(0, 10), [products]);

    return (
        <div>
            <Text
                text1="Latest Collections"
                text2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quam repudiandae id commodi dicta sunt!"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
                {latestProducts.length > 0 ? (
                    latestProducts.map((product, index) => (
                        <Product
                            key={index}
                            id={product._id}
                            image={product.image[0]}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                        />
                    ))
                ) : (
                    <p>No Products</p>
                )}
            </div>
        </div>
    );
};

export default LatestCollections;