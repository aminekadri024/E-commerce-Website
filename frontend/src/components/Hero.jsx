import Logo from './Logo.jsx';

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 min-h-screen">
            <Logo />
            {/* Call-to-action Buttons */}
            <div className="flex items-center justify-between gap-4 h-[120px] mx-auto w-[350px]">
                <button className="cursor-pointer flex flex-col justify-around rounded-4xl h-full p-6 w-2/3 bg-white shadow-md transition-transform transform hover:scale-105">
                    <h1 className="text-sm text-gray-700">NEW ARRIVALS</h1>
                    <p className="text-lg font-bold text-black">Shop Now</p>
                </button>
                <button className="cursor-pointer bg-gradient-to-r bg-grad flex items-center justify-center rounded-4xl h-full p-6 shadow-md transition-transform transform hover:scale-105">
                    <h1 className="font-bold text-white">OUR BESTSELLERS</h1>
                </button>
            </div>

            {/* Hero Image */}
            <div className="w-[350px] h-[359px] rounded-4xl px-8 bg-grad flex items-center justify-center">
                <img className="w-full h-full object-cover" src="/pngegg.png" alt="Hero Product" />
            </div>
        </div>
    );
};

export default Hero;