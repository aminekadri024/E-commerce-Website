import Text from "./Text";
import { policies } from "../assets/frontend_assets/assets"; // Import assets properly


export default function OurPolicy() {
    return (
        <div className="mb-16">
            <Text
                text1="Our Policy"
                text2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quam repudiandae id commodi dicta sunt!"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {policies && policies.length > 0 ? policies.map((policy, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-6 transition-transform transform hover:scale-105"
                    >
                        <img src={policy.icon} alt={policy.title} className="w-16 h-16" />
                        <p className="text-2xl my-4 font-bold">{policy.title}</p>
                        <p className="text-lg text-center text-gray-600">{policy.description}</p>
                    </div>
                )) : null}
            </div>
        </div>
    );
}