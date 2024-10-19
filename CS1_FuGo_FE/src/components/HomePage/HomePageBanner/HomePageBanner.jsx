import HomePageBannerImg from "../../../assets/img/HomePageBanner-1.jpg";
import { FaPlayCircle } from "react-icons/fa";
import "./HomePageBanner.scss";

const HomePageBanner = () => {
    return (
        <div className="homeBanner-container mb-12">
            <img src={HomePageBannerImg} className="homeBanner-img" alt="" />
            <div className="homeBanner-content">
                <div className="text-5xl font-bold text-blue-900">
                    Choose <p className="text-[#1a96de]">study aboard or job aboard</p> suit for you
                </div>
                <div className="text-2xl font-medium text-blue-900 text-wrap w-1/2 mt-6 mb-6">
                    We always make our customer happy by providing
                    as many choices as possible
                </div>
                <div className="btn-container">
                    <a href="/login">
                        <button className="btn-get-started">Get started</button>
                    </a>
                    <a href="#">
                        <button className="btn-watch-demo">
                            <FaPlayCircle className="watch-demo-btn" />
                            Watch Demo
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomePageBanner;