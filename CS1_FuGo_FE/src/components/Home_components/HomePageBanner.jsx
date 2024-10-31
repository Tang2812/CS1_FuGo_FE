import HomePageBannerImg from "../../img/HomePageBanner-1.jpg";
import { FaPlayCircle } from "react-icons/fa";

const HomePageBanner = () => {
    return (
        <div className="homeBanner-container mb-12">
            <img src={HomePageBannerImg} className="homeBanner-img w-full absolute z-[1] h-[640px]" alt="" />
            <div className="homeBanner-content relative z-10 pt-[135px] pr-[200px] pb-[200px] pl-[90px]">
                <div className="text-5xl font-bold text-blue-900">
                    Choose <p className="text-[#1a96de]">study aboard or job aboard</p> suit for you
                </div>
                <div className="text-2xl font-medium text-blue-900 text-wrap w-1/2 mt-6 mb-6">
                    We always make our customer happy by providing
                    as many choices as possible
                </div>
                <div className="btn-container flex gap-[10px]">
                    <a href="/login">
                        <button className="btn-get-started border-2 border-solid border-[#1a96de] rounded-[10px] p-[4px] bg-white font-semibold leading-8 text-[#1a96de] text-lg">Get started</button>
                    </a>
                    <a href="#">
                        <button className="btn-watch-demo flex items-center gap-[6px] border-[2px] border-solid border-[#1a96de] rounded-[10px] p-1 font-semibold leading-8">
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