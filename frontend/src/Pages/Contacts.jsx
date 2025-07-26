import Text from "../components/Text";

export default function Contacts() {
    return (
        <div className="flex flex-col items-center text-center px-6 py-12">
            <Text text1="Contact Us" text2="We’d love to hear from you! Reach out to us anytime." />

            <div className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-6">
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="border border-gray-300 rounded-lg p-3 w-full"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="border border-gray-300 rounded-lg p-3 w-full"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        className="border border-gray-300 rounded-lg p-3 w-full h-32 resize-none"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-grad text-white font-bold py-3 rounded-lg hover:opacity-90 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <div className="mt-8 text-gray-600">
                <p className="font-bold">📍 Address: 123 Fashion St, New York, NY</p>
                <p>📧 Email: support@fashionhub.com</p>
                <p>📞 Phone: +1 (123) 456-7890</p>
            </div>
        </div>
    );
};


