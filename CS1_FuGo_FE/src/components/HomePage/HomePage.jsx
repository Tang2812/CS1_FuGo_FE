import HomePageBanner from "./HomePageBanner/HomePageBanner";
import HomePageNews from "./HomePageNews/HomePageNews";
import HomePagePartners from "./HomePagePartners/HomePagePartners";
import HomeReview from "./HomeReview/HomeReview";
import HomeSuggest from "./HomeSuggest/HomeSuggest";

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