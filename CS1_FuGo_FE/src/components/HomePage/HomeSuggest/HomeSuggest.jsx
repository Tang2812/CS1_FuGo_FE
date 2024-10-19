import { FaMedal } from "react-icons/fa";
import suggestTag from "../../../assets/img/tagImg.jpg";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import "./HomeSuggest.scss";

const HomeSuggest = () => {
    return (
        <div className="homeSuggest-container">
            <div className="suggest-header">
                <div className="suggest-title-container flex gap-2">
                    <FaMedal className="suggest-icon" />
                    <h1 className="suggest-title">
                        Đề xuất
                    </h1>
                </div>
                <div className="suggest-all">
                    <a href="" className="text-yellow-500">Xem tất cả &gt;</a>
                </div>
            </div>
            <div className="suggest-categories space-x-4">
                <a href="#" className="category-item">
                    Tất cả
                </a>
                <a href="#" className="category-item">
                    Nhật Bản
                </a>
                <a href="#" className="category-item">
                    Hàn Quốc
                </a>
                <a href="#" className="category-item">
                    Đài Loan
                </a>
            </div>
            <div className="suggest-content grid grid-cols-4">
                <a href="#" className="suggest-tag">
                    <img src={suggestTag} alt="" className="tag-img" />
                    <div className="tag-content">
                        <p className="text-lg font-medium">Vệ sinh tòa nhà</p>
                        <div className="flex gap-2 items-center">
                            <FaMoneyBillWave className="suggest-salary-icon" />
                            <p>100,000,000</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <MdPlace className="suggest-place-icon" />
                            <p>Aichi</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaClock className="suggest-due-icon" />
                            <p>14/10/2024</p>
                        </div>
                    </div>
                </a>

                <a href="#" className="suggest-tag">
                    <img src={suggestTag} alt="" className="tag-img" />
                    <div className="tag-content">
                        <p className="text-lg font-medium">Vệ sinh tòa nhà</p>
                        <div className="flex gap-2 items-center">
                            <FaMoneyBillWave className="suggest-salary-icon" />
                            <p>100,000,000</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <MdPlace className="suggest-place-icon" />
                            <p>Aichi</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaClock className="suggest-due-icon" />
                            <p>14/10/2024</p>
                        </div>
                    </div>
                </a>

                <a href="#" className="suggest-tag">
                    <img src={suggestTag} alt="" className="tag-img" />
                    <div className="tag-content">
                        <p className="text-lg font-medium">Vệ sinh tòa nhà</p>
                        <div className="flex gap-2 items-center">
                            <FaMoneyBillWave className="suggest-salary-icon" />
                            <p>100,000,000</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <MdPlace className="suggest-place-icon" />
                            <p>Aichi</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaClock className="suggest-due-icon" />
                            <p>14/10/2024</p>
                        </div>
                    </div>
                </a>

                <a href="#" className="suggest-tag">
                    <img src={suggestTag} alt="" className="tag-img" />
                    <div className="tag-content">
                        <p className="text-lg font-medium">Vệ sinh tòa nhà</p>
                        <div className="flex gap-2 items-center">
                            <FaMoneyBillWave className="suggest-salary-icon" />
                            <p>100,000,000</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <MdPlace className="suggest-place-icon" />
                            <p>Aichi</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaClock className="suggest-due-icon" />
                            <p>14/10/2024</p>
                        </div>
                    </div>
                </a>


            </div>
        </div>
    );
};

export default HomeSuggest;