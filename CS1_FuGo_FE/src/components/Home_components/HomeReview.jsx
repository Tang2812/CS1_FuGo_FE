import userReviewAvatar from "../../img/userReviewAvatar.jpg";
import { motion } from "framer-motion";

const HomeReview = () => {
    return (
        <div className="homeReview-container py-5 ml-8">
            <h1 className="homeReview-title flex justify-center text-xl font-semibold p-3">
                Reviews
            </h1>
            <motion.div className="reviews-contents grid grid-cols-12 mx-5"
                initial={{ x: -60 }}
                whileInView={{ x: 20, transition: { duration: 0.75 } }}>
                <div className="review-tag mt-6 w-[85%] p-3 shadow-2xl rounded-xl hover:mt-[-4px] lg:col-span-4 md:col-span-6 col-span-12">
                    <div className="tag-header flex gap-[10px]">
                        <img src={userReviewAvatar} className="tag-header-img w-32 rounded-full shadow-2xl mb-3 mr-2" alt="" />
                        <div className="tag-header-info my-3">
                            <p className="tag-header-name font-semibold text-base mt-4">Đinh Viết Nhật Tân</p>
                            <p className="tag-header-work">Du học CNTT - Nhật Bản</p>
                        </div>
                    </div>
                    <div className="tag-content text-wrap">
                        <p>
                            Hiện tại em rất hài lòng với sự lựa chọn của mình. Nhờ có Fugo - một nền tảng đáng tin cậy,
                            em đã có thể tìm thấy trường đại học phù hợp với mình để có thể tiếp bước đam mê
                        </p>
                    </div>
                </div>

                <div className="review-tag mt-6 w-[85%] p-3 shadow-2xl rounded-xl hover:mt-[-4px] lg:col-span-4 md:col-span-6 col-span-12">
                    <div className="tag-header flex gap-[10px]">
                        <img src={userReviewAvatar} className="tag-header-img w-32 rounded-full shadow-2xl mb-3 mr-2" alt="" />
                        <div className="tag-header-info my-3">
                            <p className="tag-header-name font-semibold text-base mt-4">Đinh Viết Nhật Tân</p>
                            <p className="tag-header-work">Du học CNTT - Nhật Bản</p>
                        </div>
                    </div>
                    <div className="tag-content text-wrap">
                        <p>
                            Hiện tại em rất hài lòng với sự lựa chọn của mình. Nhờ có Fugo - một nền tảng đáng tin cậy,
                            em đã có thể tìm thấy trường đại học phù hợp với mình để có thể tiếp bước đam mê
                        </p>
                    </div>
                </div>

                <div className="review-tag mt-6 w-[85%] p-3 shadow-2xl rounded-xl hover:mt-[-4px] lg:col-span-4 md:col-span-6 col-span-12">
                    <div className="tag-header flex gap-[10px]">
                        <img src={userReviewAvatar} className="tag-header-img w-32 rounded-full shadow-2xl mb-3 mr-2" alt="" />
                        <div className="tag-header-info my-3">
                            <p className="tag-header-name font-semibold text-base mt-4">Đinh Viết Nhật Tân</p>
                            <p className="tag-header-work">Du học CNTT - Nhật Bản</p>
                        </div>
                    </div>
                    <div className="tag-content text-wrap">
                        <p>
                            Hiện tại em rất hài lòng với sự lựa chọn của mình. Nhờ có Fugo - một nền tảng đáng tin cậy,
                            em đã có thể tìm thấy trường đại học phù hợp với mình để có thể tiếp bước đam mê
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default HomeReview;