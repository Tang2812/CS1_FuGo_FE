import Chatbot from "../components/chatbot";
import HomePageBanner from "../components/Home_components/HomePageBanner";
import HomePageNews from "../components/Home_components/HomePageNews";
import HomePagePartners from "../components/Home_components/HomePagePartners";
import HomeReview from "../components/Home_components/HomeReview";
import HomeSuggest from "../components/Home_components/HomeSuggest";

const HomePage = () => {
    return (
        <div>
            <HomePageBanner />
            <HomePageNews />
            <HomePagePartners />
            <HomeSuggest />
            <HomeReview />
            <Chatbot />
        </div>
    );
};

export default HomePage;