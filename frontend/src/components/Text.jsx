const Text = ({ text1, text2 }) => {
    return (
        <div className="flex flex-col text-center items-center h-fit mx-auto my-16 max-w-lg">
            {/* Gradient Heading */}
            <h1 className="inline-block text-2xl sm:text-3xl lg:text-3xl mb-4 font-bold bg-grad text-transparent bg-clip-text">
                {text1}
            </h1>

            {/* Animated Divider */}
            <hr className="w-1/4 border-[1.5px] border-gray-500 transition-all duration-300 hover:w-1/3" />

            {/* Description */}
            <p className="text-gray-700 md:text-xl mt-4">{text2}</p>
        </div>
    );
};

export default Text;
