import Text from "./Text";

export default function NewsLetter() {
    return (
        <div className="mb-20">
            {/* Heading */}
            <Text
                text1="Subscribe now & get 20% off"
                text2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quam repudiandae id commodi dicta sunt!"
            />

            {/* Subscription Form */}
            <div className="flex items-center justify-center mt-4">
                <form className="flex w-[85%] max-w-lg border border-gray-300 rounded-3xl overflow-hidden">
                    {/* Email Input */}
                    <label className="sr-only" htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        className="w-full px-4 py-3 sm:px-6 sm:py-4 text-gray-700 border-none outline-none focus:ring-2 focus:ring-blue-500"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />

                    {/* Subscribe Button */}
                    <button
                        type="submit"
                        className="bg-gradient-to-r bg-grad text-white font-bold text-sm sm:text-lg px-6 py-3 sm:px-8 sm:py-4 transition-transform transform hover:scale-105 focus:ring-2 focus:ring-blue-500">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
}
