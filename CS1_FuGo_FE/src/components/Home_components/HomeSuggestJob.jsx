import { FaMedal } from "react-icons/fa";
import suggestTag from "../../img/tagImg.jpg";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const HomeSuggest = () => {
    return (
        <div className="homeSuggest-container bg-[#F6F6F6] w-full pt-5 pr-[60px] pb-5 pl-[90px]">
            <div className="suggest-header flex justify-between mb-5">
                <div className="suggest-title-container flex gap-2">
                    <FaMedal className="suggest-icon text-[#dbb313] text-[24px]" />
                    <h1 className="suggest-title text-xl font-semibold">
                        Công việc đề xuất
                    </h1>
                </div>
                <div className="suggest-all">
                    <a href="/jobs" className="text-yellow-500">Xem tất cả &gt;</a>
                </div>
            </div>
            <div className="suggest-categories space-x-4 mb-[30px]">
                <a href="#" className="category-item border-2 border-solid border-black rounded-[5px] px-4 py-2">
                    Tất cả
                </a>
                <a href="#" className="category-item border-2 border-solid border-black rounded-[5px] px-4 py-2">
                    Nhật Bản
                </a>
                <a href="#" className="category-item border-2 border-solid border-black rounded-[5px] px-4 py-2">
                    Hàn Quốc
                </a>
                <a href="#" className="category-item border-2 border-solid border-black rounded-[5px] px-4 py-2">
                    Đài Loan
                </a>
            </div>
            <motion.div className="suggest-content grid grid-cols-4"
                initial={{ x: -60 }}
                whileInView={{ x: 20, transition: { duration: 0.75 } }}>
                <a href="/jobs/:id" className="suggest-tag bg-white shadow-2xl rounded-[10px] w-4/5 mb-5 hover:mt-[-4px]">
                    <img src={suggestTag} alt="" className="tag-img rounded-tl-[10px] rounded-tr-[10px] w-fit" />
                    <div className="tag-content p-2">
                        <p className="text-lg font-semibold">Vệ sinh tòa nhà</p>
                        <div className="flex gap-4 items-center">
                            <FaMoneyBillWave className="suggest-salary-icon text-green-500" />
                            <p>100,000,000</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <MdPlace className="suggest-place-icon text-red-600" />
                            <p>Aichi</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaClock className="suggest-due-icon  text-blue-700" />
                            <p>14/10/2024</p>
                        </div>
                    </div>
                </a>

                <a href="/jobs/:id" className="suggest-tag bg-white shadow-2xl rounded-[10px] w-4/5 mb-5 hover:mt-[-4px]">
                    <img src={suggestTag} alt="" className="tag-img rounded-tl-[10px] rounded-tr-[10px] w-fit" />
                    <div className="tag-content p-2">
                        <p className="text-lg font-semibold">Vệ sinh tòa nhà</p>
                        <div className="flex gap-4 items-center">
                            <FaMoneyBillWave className="suggest-salary-icon text-green-500" />
                            <p>100,000,000</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <MdPlace className="suggest-place-icon text-red-600" />
                            <p>Aichi</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaClock className="suggest-due-icon  text-blue-700" />
                            <p>14/10/2024</p>
                        </div>
                    </div>
                </a>

                <a href="/jobs/:id" className="suggest-tag bg-white shadow-2xl rounded-[10px] w-4/5 mb-5 hover:mt-[-4px]">
                    <img src={suggestTag} alt="" className="tag-img rounded-tl-[10px] rounded-tr-[10px] w-fit" />
                    <div className="tag-content p-2">
                        <p className="text-lg font-semibold">Vệ sinh tòa nhà</p>
                        <div className="flex gap-4 items-center">
                            <FaMoneyBillWave className="suggest-salary-icon text-green-500" />
                            <p>100,000,000</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <MdPlace className="suggest-place-icon text-red-600" />
                            <p>Aichi</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaClock className="suggest-due-icon  text-blue-700" />
                            <p>14/10/2024</p>
                        </div>
                    </div>
                </a>

                <a href="/jobs/:id" className="suggest-tag bg-white shadow-2xl rounded-[10px] w-4/5 mb-5 hover:mt-[-4px]">
                    <img src={suggestTag} alt="" className="tag-img rounded-tl-[10px] rounded-tr-[10px] w-fit" />
                    <div className="tag-content p-2">
                        <p className="text-lg font-semibold">Vệ sinh tòa nhà</p>
                        <div className="flex gap-4 items-center">
                            <FaMoneyBillWave className="suggest-salary-icon text-green-500" />
                            <p>100,000,000</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <MdPlace className="suggest-place-icon text-red-600" />
                            <p>Aichi</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaClock className="suggest-due-icon  text-blue-700" />
                            <p>14/10/2024</p>
                        </div>
                    </div>
                </a>

            </motion.div>
        </div>
    );
};

export default HomeSuggest;