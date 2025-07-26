import { Link } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ProductsContext } from '../context/GlobalProductsContext';
export default function Navbar() {
    const [isOn, setIsOn] = useState(false);
    const [searchOn, setSearchOn] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const { menu_icon, cross_icon } = assets;
    const { products } = useContext(ProductsContext);

    function handleClick() {
        setSearchOn(prev => !prev);
    }
    function handleSearchChange(e) {
        setSearchValue(e.target.value);
    }
    useEffect(() => {
        const searchLength = searchValue.length;
        if (searchLength > 0) {
            let filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()));
            setSearchResults(filteredProducts);
        } else {
            setSearchResults([]);
        }
    }, [searchValue]);


    return (
        <div className={`fixed navbar z-10 top-10 left-1/2 -translate-x-1/2 px-6 bg-white rounded-full shadow-md h-[50px] w-auto ${searchOn ? 'w-[600px]' : ""}`}>
            {
                !searchOn ? <div className='flex h-full items-center gap-2 '>
                    <nav className="flex items-center gap-x-1">
                        <Link to="/" className="text-sm font-bold p-2" aria-label="Home">
                            <i className="fa-solid fa-house"></i>
                        </Link>
                        <Link to="/collections" className="text-sm font-bold p-2">Collections</Link>
                        <Link to="/about" className="text-sm font-bold p-2">About</Link>
                        <Link to="/contacts" className="text-sm font-bold p-2">Contact</Link>
                    </nav>
                    <div className="flex items-center gap-1 relative ml-0">
                        <button onClick={handleClick} className="p-0 rounded-full cursor-pointer hover:bg-gray-100 transition" aria-label="Search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <div className='size-[18px] ml-1 mt-1 cursor-pointer' onClick={() => setIsOn(prev => !prev)} aria-label="Menu">
                            {
                                isOn ?
                                    <img src={cross_icon} className='size-4' />
                                    :
                                    <img src={menu_icon} />
                            }
                        </div>
                        {
                            isOn ?
                                <div className='absolute top-10 -left-4 w-20 h-5 bg-gray-100 rounded-full shadow-md flex items-center justify-between gap-2 p-4'>
                                    <Link to="/cart" className="" aria-label="Cart">
                                        <i className="fa-solid fa-bag-shopping"></i>
                                    </Link>
                                    <Link to="/login" className="" aria-label="Login">
                                        <i className="fa-solid fa-right-to-bracket"></i>
                                    </Link>
                                </div>
                                : null
                        }
                    </div>
                </div>
                    :
                    <div className='flex relative h-full items-center gap-2 '>
                        <input type="text" value={searchValue} onChange={(e) => handleSearchChange(e)} className='px-2 h-2/3 text-lg min-w-[250px] font-bold focus:outline-none focus:border-none rounded-2xl ' />
                        {
                            searchValue === "" ?
                                null
                                : <i onClick={handleClick} className="fa-solid cursor-pointer fa-magnifying-glass"></i>
                        }
                        <img onClick={handleClick} src={cross_icon} className='cursor-pointer size-3' />
                        <div>
                            {
                                searchResults && searchResults.length > 0 ?
                                    <div className='absolute top-10 left-0 w-full bg-white shadow-md rounded-lg max-h-[300px] overflow-y-auto'>
                                        {searchResults.map((product) => (
                                            <Link onClick={() => {
                                                handleClick();
                                                setSearchValue("");
                                            }}
                                                to={`/product/${product._id}`} key={product._id} className='block p-2 hover:bg-gray-100'>
                                                {product.name}
                                            </Link>
                                        ))}
                                    </div>
                                    : searchValue !== "" ? <div className='absolute top-10 left-0 w-full bg-white shadow-md rounded-lg p-2'>No results found</div> : null
                            }
                        </div>
                    </div>
            }
            {/* Navigation Links */}
        </div>
    );
}
