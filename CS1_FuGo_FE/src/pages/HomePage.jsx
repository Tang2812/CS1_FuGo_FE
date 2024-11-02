import HomePageBanner from "../components/Home_components/HomePageBanner";
import HomePageNews from "../components/Home_components/HomePageNews";
import HomePagePartnersJob from "../components/Home_components/HomePagePartnersJob";
import HomePagePartnersStudy from "../components/Home_components/HomePagePartnersStudy";
import HomeSuggestJob from "../components/Home_components/HomeSuggestJob";
import HomeSuggestStudy from "../components/Home_components/HomeSuggestStudy";
import HomeReview from "../components/Home_components/HomeReview";

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