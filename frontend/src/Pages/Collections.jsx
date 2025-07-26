import { useContext, useState, useMemo } from "react";
import Text from "../components/Text";
import Product from "../components/Product";
import { ProductsContext } from "../context/GlobalProductsContext";
import { assets } from "../assets/frontend_assets/assets";

const Collections = () => {
    const { products } = useContext(ProductsContext);

    const [showFilter, setShowFilter] = useState(false);
    const [categorys, setCategorys] = useState([]);
    const [subCategorys, setSubCategorys] = useState([]);
    const [sortType, setSortType] = useState("relevant");

    // Toggle categories
    const handleCategoryToggle = (value) => {
        setCategorys((prev) =>
            prev.includes(value) ? prev.filter((cat) => cat !== value) : [...prev, value]
        );
    };

    // Toggle subcategories
    const handleSubCategoryToggle = (value) => {
        setSubCategorys((prev) =>
            prev.includes(value) ? prev.filter((sub) => sub !== value) : [...prev, value]
        );
    };

    // Memoized Filtering and Sorting
    const filteredProducts = useMemo(() => {
        let filtered = products.slice();

        if (categorys.length > 0) {
            filtered = filtered.filter((product) => categorys.includes(product.category));
        }
        if (subCategorys.length > 0) {
            filtered = filtered.filter((product) => subCategorys.includes(product.subCategory));
        }

        switch (sortType) {
            case "low-high":
                return [...filtered].sort((a, b) => a.price - b.price);
            case "high-low":
                return [...filtered].sort((a, b) => b.price - a.price);
            default:
                return filtered;
        }
    }, [products, categorys, subCategorys, sortType]);

    return (
        <div className="mt-30 flex flex-col items-center justify-center">
            <Text text1="Collections" text2="" />

            {/* Filter and Sort Section */}
            <div className="flex flex-wrap w-full justify-between gap-2">
                <button
                    onClick={() => setShowFilter((prev) => !prev)}
                    className="flex ml-2 px-4 py-2 rounded-full bg-white items-center gap-2 text-2xl font-bold text-color"
                >
                    Filter <img className={`h-4 transition-transform ${showFilter ? "rotate-90" : ""}`} src={assets.dropdown_icon} alt="Dropdown" />
                </button>

                <select
                    onChange={(e) => setSortType(e.target.value)}
                    className="mr-4 bg-white rounded-full font-bold text-black px-4 py-2"
                >
                    <option value="relevant">Sort by: Relevant</option>
                    <option value="low-high">Sort by: Low To High</option>
                    <option value="high-low">Sort by: High To Low</option>
                </select>
            </div>

            {/* Filter Panel */}
            <div className="mt-4 flex flex-col sm:flex-row gap-6">
                {
                    showFilter ?
                        <div
                            className={`mx-auto flex flex-col gap-8 p-8 border h-fit border-gray-300 rounded-2xl bg-white transition-all duration-300 ${showFilter ? "w-full md:w-1/3 opacity-100" : "w-0 opacity-0 overflow-hidden"
                                }`}
                        >
                            {/* Categories Filter */}

                            <div>
                                <p className="text-xl font-medium">Categories</p>
                                <hr className="w-1/3 my-4" />
                                {["Men", "Women", "Kids"].map((category) => (
                                    <div key={category} className="flex gap-2">
                                        <input
                                            type="checkbox"
                                            onChange={() => handleCategoryToggle(category)}
                                            checked={categorys.includes(category)}
                                        />
                                        {category}
                                    </div>
                                ))}
                            </div>

                            {/* Subcategories Filter */}
                            <div>
                                <p className="text-xl font-medium">Type</p>
                                <hr className="w-1/3 my-4" />
                                {["Topwear", "Bottomwear", "Winterwear"].map((subCategory) => (
                                    <div key={subCategory} className="flex gap-2">
                                        <input
                                            type="checkbox"
                                            onChange={() => handleSubCategoryToggle(subCategory)}
                                            checked={subCategorys.includes(subCategory)}
                                        />
                                        {subCategory}
                                    </div>
                                ))}
                            </div>
                        </div>
                        : null
                }

                {/* Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {filteredProducts.length > 0
                        ? filteredProducts.map((product, index) => (
                            <Product
                                key={index}
                                id={product._id}
                                image={product.image}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                            />
                        ))
                        : "No Products"}
                </div>
            </div>
        </div>
    );
};

export default Collections;
