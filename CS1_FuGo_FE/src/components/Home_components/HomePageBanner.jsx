import { FaPlayCircle } from "react-icons/fa";
import { BsFillHandbagFill } from "react-icons/bs";
import heroImg from '../../img/banner1.jpg';
import heroImg02 from '../../img/banner4.jpg';
import heroImg03 from '../../img/banner2.jpg';
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const HomePageBanner = () => {
    const navigate = useNavigate();

    return (
        <section>
            <div className="container bg-[#EEEEEE] pt-5 pb-14">
                <div className="grid grid-cols-12">
                    <motion.div initial={{ x: 0 }} whileInView={{ x: 20, transition: { duration: 1 } }} className="hero__content col-span-6 py-8 px-32">
                        <div className="hero__subtitle flex gap-2 items-center text-pink-500 p-3 rounded-3xl shadow-xl w-fit bg-white mt-4 mb-8">
                            <h2 className="font-semibold text-2xl">Quyết định tương lai của bạn</h2>
                            <BsFillHandbagFill className="text-2xl" />
                        </div>
                        <h2 className="text-4xl font-semibold mt-4 mb-4"> Lựa chọn
                            <span className="text-pink-500"> công việc và du học </span>
                            phù hợp với chính bạn.
                        </h2>
                        <p className="text-lg text-[#666] mb-4">
                            Chúng tôi luôn cố gắng làm bạn hạnh phúc bằng nhiều lựa chọn nhất có thể
                        </p>
                        <div className="hero__btn flex gap-4 text-base font-semibold">
                            <button
                                className="hero__get-started p-3 rounded-2xl bg-[#5D50C6] text-white"
                                onClick={() => navigate("/login")}
                            >Bắt đầu</button>
                            <button className="hero__watch-more flex gap-2 items-center border-solid border-[3px] border-[#5D50C6] p-3 rounded-2xl text-[#5D50C6]">
                                <FaPlayCircle className="" />
                                Xem thêm
                            </button>
                        </div>
                    </motion.div>
                    <motion.div initial={{ y: 0 }} whileInView={{ y: 10, transition: { duration: 1 } }} className="hero__img-box col-span-2 pt-8 mx-4 mt-3">
                        <img src={heroImg} alt="" className="w-100% h-[350px] rounded-3xl border-solid border-[2px] border-[#5D50C6] object-cover" />
                    </motion.div>
                    <motion.div initial={{ y: 0 }} whileInView={{ y: 20, transition: { duration: 1 } }} className="hero__img-box col-span-2 pt-8 mr-4 mt-5">
                        <img src={heroImg03} alt="" className="w-100% h-[350px] rounded-3xl border-solid border-[2px] border-[#5D50C6] object-cover mt-5" />
                    </motion.div>
                    <motion.div initial={{ y: 0 }} whileInView={{ y: 30, transition: { duration: 1 } }} className="hero__img-box col-span-2 pt-8 mr-4 mt-5">
                        <img src={heroImg02} alt="" className="w-100% h-[350px] rounded-3xl border-solid border-[2px] border-[#5D50C6] object-cover mt-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomePageBanner;