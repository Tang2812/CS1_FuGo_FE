import HomePageBanner from "./Home_components/HomePageBanner";
import HomePageNews from "./Home_components/HomePageNews";
import HomePagePartnersJob from "./Home_components/HomePagePartnersJob";
import HomePagePartnersStudy from "./Home_components/HomePagePartnersStudy";
import HomeSuggestJob from "./Home_components/HomeSuggestJob";
import HomeSuggestStudy from "./Home_components/HomeSuggestStudy";
import HomeReview from "./Home_components/HomeReview";

const HomePage = () => {
    return (
        <div>
            <HomePageBanner />
            <HomePageNews />
            <HomePagePartnersJob />
            <HomeSuggestJob />
            <HomePagePartnersStudy />
            <HomeSuggestStudy />
            <HomeReview />
        </div>
    );
};

export default HomePage;