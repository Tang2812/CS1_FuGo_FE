import tagHeader from "../../img/tagImg.jpg";
import { motion } from "framer-motion";

const HomePageNews = () => {
    return (
        <div className="homePageNews-container bg-[#F6F6F6] w-full pb-[20px]"
        >
            <h1 className="text-xl font-semibold flex justify-start p-3 pl-[80px]">
                Tin tức xuất khẩu lao động - du học
            </h1>
            <motion.div className="homePageNews-content grid grid-cols-12 mt-2 w-fit mx-[60px]"
                initial={{ x: 60 }}
                whileInView={{ x: 20, transition: { duration: 0.75 } }}
            >
                <div className="content-tag mx-5 col-span-12 mb-5 md:col-span-6 lg:col-span-4 bg-white rounded-[10px] shadow-2xl p-[12px] w-full sm:w-[90%] hover:mt-[-4px]">
                    <div className="content-tag-header flex">
                        <div className="tag-header-img ml-3 w-40 border-black border-2 border-solid">
                            <img src={tagHeader} alt="" className="w-[100%] h-[100%]" />
                        </div>
                        <div className="tag-header ml-3">
                            <p className="tag-header-title text-[20px] font-semibold">Vệ sinh tòa nhà</p>
                            <p className="tag-header-date text-[#555]">3/10/2024</p>
                        </div>
                    </div>
                    <div className="tag-content mt-3 ml-3 text-base font-normal">
                        <p>Vệ sinh tòa nhà, văn phòng, sân bay tại các thành phố lớn</p>
                    </div>
                </div>

                <div className="content-tag mx-5 col-span-12 mb-5 md:col-span-6 lg:col-span-4 bg-white rounded-[10px] shadow-2xl p-[12px] w-full sm:w-[90%] hover:mt-[-4px]">
                    <div className="content-tag-header flex">
                        <div className="tag-header-img ml-3 w-40 border-black border-2 border-solid">
                            <img src={tagHeader} alt="" className="w-[100%] h-[100%]" />
                        </div>
                        <div className="tag-header ml-3">
                            <p className="tag-header-title text-[20px] font-semibold">Vệ sinh tòa nhà</p>
                            <p className="tag-header-date text-[#555]">3/10/2024</p>
                        </div>
                    </div>
                    <div className="tag-content mt-3 ml-3 text-base font-normal">
                        <p>Vệ sinh tòa nhà, văn phòng, sân bay tại các thành phố lớn</p>
                    </div>
                </div>

                <div className="content-tag mx-5 col-span-12 mb-5 md:col-span-6 lg:col-span-4 bg-white rounded-[10px] shadow-2xl p-[12px] w-full sm:w-[90%] hover:mt-[-4px]">
                    <div className="content-tag-header flex">
                        <div className="tag-header-img ml-3 w-40 border-black border-2 border-solid">
                            <img src={tagHeader} alt="" className="w-[100%] h-[100%]" />
                        </div>
                        <div className="tag-header ml-3">
                            <p className="tag-header-title text-[20px] font-semibold">Vệ sinh tòa nhà</p>
                            <p className="tag-header-date text-[#555]">3/10/2024</p>
                        </div>
                    </div>
                    <div className="tag-content mt-3 ml-3 text-base font-normal">
                        <p>Vệ sinh tòa nhà, văn phòng, sân bay tại các thành phố lớn</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default HomePageNews;