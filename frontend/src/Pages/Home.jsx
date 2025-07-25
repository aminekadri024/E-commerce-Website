import BestSellers from "../components/BestSellers";
import Hero from "../components/Hero";
import LatestCollections from "../components/LatestCollections";
import NewsLetter from "../components/NewsLetter";
import OurPolicy from "../components/OurPolicy";
import { memo } from "react";

const Home = () => {
    return (
        <main className="flex flex-col min-h-screen space-y-16">
            <Hero />
            <LatestCollections />
            <BestSellers />
            <OurPolicy />
            <NewsLetter />
        </main>
    );
};

export default memo(Home);