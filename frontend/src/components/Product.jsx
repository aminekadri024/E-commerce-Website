import { useContext } from "react";
import { ProductsContext } from "../context/GlobalProductsContext";
import { Link } from "react-router-dom";

const Product = ({ id, image, name, description, price }) => {
    const { currency } = useContext(ProductsContext);

    return (
        <Link to={`/product/${id}`} className="p-4 mx-2 flex flex-col bg-white items-center justify-center rounded-2xl cursor-pointer transition duration-300 ease-in-out shadow-lg hover:shadow-xl hover:-translate-y-2">
            {/* Product Image */}
            <img
                className="w-full h-40 object-cover border border-gray-200 rounded-2xl"
                src={image}
                alt={name}
            />

            {/* Product Info */}
            <div className="p-3 w-full">
                <h2 className="text-sm font-bold">{name}</h2>
                <p className="text-xs text-gray-600 line-clamp-2">{description}</p>
                <p className="text-violet-700 font-semibold">{currency} {price}</p>
            </div>
        </Link>
    );
};

export default Product;
