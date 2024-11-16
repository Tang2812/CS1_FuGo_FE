import Chatbot from "../components/chatbot";
import HomePageBanner from "../components/Home_components/HomePageBanner";
import HomePageNews from "../components/Home_components/HomePageNews";
import HomePagePartnersJob from "../components/Home_components/HomePagePartnersJob";
import HomePagePartnersStudy from "../components/Home_components/HomePagePartnersStudy";
import HomeSuggestJob from "../components/Home_components/HomeSuggestJob";
import HomeSuggestStudy from "../components/Home_components/HomeSuggestStudy";
import HomeReview from "../components/Home_components/HomeReview";
import { motion, useScroll } from "framer-motion";

const HomePage = () => {
    const { scrollYProgress } = useScroll();
    return (
        <div >
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <HomePageBanner />
            <HomePageNews />
            <HomePagePartnersJob />
            <HomeSuggestJob />
            <HomePagePartnersStudy />
            <HomeSuggestStudy />
            <HomeReview />
            <Chatbot />
        </div>
    );
};

export default HomePage;