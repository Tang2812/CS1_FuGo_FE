import HomePageBanner from "./Home_components/HomePageBanner";
import HomePageNews from "./Home_components/HomePageNews";
import HomePagePartners from "./Home_components/HomePagePartners";
import HomeReview from "./Home_components/HomeReview";
import HomeSuggest from "./Home_components/HomeSuggest";

const HomePage = () => {
    return (
        <div>
            <HomePageBanner />
            <HomePageNews />
            <HomePagePartners />
            <HomeSuggest />
            <HomeReview />
        </div>
    );
};

export default HomePage;