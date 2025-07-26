import Text from "../components/Text";

const About = () => {
    return (
        <div className="flex flex-col items-center text-center px-6 py-12">
            <Text text1="About Us" text2="Learn more about our story and mission." />

            <div className="max-w-4xl">
                <p className="text-lg text-gray-600 leading-relaxed">
                    We are a passionate team dedicated to providing high-quality fashion products. Our mission is to make stylish and affordable clothing accessible to everyone.
                    With a commitment to sustainability and innovation, we continue to push boundaries in the fashion industry.
                </p>
            </div>

            <button className="mt-8 text-white bg-gradient-to-r bg-grad py-2 px-4 rounded-2xl shadow-lg">About Us</button>
        </div>
    );
};

export default About;

