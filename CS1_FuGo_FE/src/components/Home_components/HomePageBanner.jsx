import { FaPlayCircle } from "react-icons/fa";
import { BsFillHandbagFill } from "react-icons/bs";
import heroImg from '../../img/hero-img01.jpg';
import heroImg02 from '../../img/hero-img02.jpg';
import heroVideo from '../../img/hero-video.mp4';
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
                            <h2 className="font-semibold text-3xl">Explore the world!</h2>
                            <BsFillHandbagFill className="text-2xl" />
                        </div>
                        <h2 className="text-4xl font-semibold mt-4 mb-4">Travel to
                            <span className="text-pink-500"> top destination </span>
                            of the world
                        </h2>
                        <p className="text-lg text-[#666] mb-4">
                            We always make our customer happy by providing
                            as many choices as possible
                        </p>
                        <div className="hero__btn flex gap-4 text-base font-semibold">
                            <button
                                className="hero__get-started p-3 rounded-2xl bg-[#5D50C6] text-white"
                                onClick={() => navigate("/login")}
                            >Get Started</button>
                            <button className="hero__watch-more flex gap-2 items-center border-solid border-[3px] border-[#5D50C6] p-3 rounded-2xl text-[#5D50C6]">
                                <FaPlayCircle className="" />
                                Watch More
                            </button>
                        </div>
                    </motion.div>
                    <motion.div initial={{ y: 0 }} whileInView={{ y: 10, transition: { duration: 1 } }} className="hero__img-box col-span-2 pt-8 mx-4 mt-3">
                        <img src={heroImg} alt="" className="w-100% h-[350px] rounded-3xl border-solid border-[2px] border-[#5D50C6] object-cover" />
                    </motion.div>
                    <motion.div initial={{ y: 0 }} whileInView={{ y: 20, transition: { duration: 1 } }} className="hero__img-box col-span-2 pt-8 mr-4 mt-5">
                        <video src={heroVideo} alt="" controls className="w-100% h-[350px] rounded-3xl border-solid border-[2px] border-[#5D50C6] object-cover mt-5" />
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