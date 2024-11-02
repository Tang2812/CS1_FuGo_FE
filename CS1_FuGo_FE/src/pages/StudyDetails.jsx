import tagImg from "../img/tagImg.jpg";
import { FaShoppingBag } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { LuPackage } from "react-icons/lu";

const StudyDetail = () => {
    return (
        <div className="job-detail__container container p-10 flex gap-10">
            <div className="job-detail-right">
                <img src={tagImg} alt="" className="w-[600px]" />
                <button className="bg-emerald-500 text-white mt-5 w-[600px] py-4 rounded-md hover:bg-emerald-400 font-semibold text-lg" type="submit">Ứng tuyển</button>
            </div>
            <div className="job-detail-right">
                <div className="job-detail__header">
                    <h2 className="font-semibold text-3xl mb-5">Vệ sinh tòa nhà</h2>
                    <div className="job-detail__info flex gap-8">
                        <div className="job-detail-market flex gap-2 items-center">
                            <FaShoppingBag />
                            <h3 className="font-semibold mr-2">Thị trường:</h3>
                            <p>Nhật bản</p>
                        </div>
                        <div className="job-detail-location flex gap-2 items-center">
                            <MdPlace />
                            <h3 className="font-semibold mr-2">Nơi làm việc:</h3>
                            <p>Aichi</p>
                        </div>
                        <div className="job-detail-job flex gap-2 items-center">
                            <FaShoppingBag />
                            <h3 className="font-semibold mr-2">Ngành nghề:</h3>
                            <p>Vệ sinh tòa nhà</p>
                        </div>
                    </div>
                </div>

                <div className="job-detail-content mt-3">
                    <div className="job-content">
                        <div className="job-content__header flex gap-2 items-center">
                            <MdEditNote className="text-xl" />
                            <h3 className="font-semibold mr-2">Nội dung công việc:</h3>
                        </div>
                        <div className="job-content__content">
                            <p>
                                Làm vệ sinh, dọn dẹp tòa nhà, văn phòng sân bay.
                            </p>
                            <p>
                                Làm trong nhà 100%
                            </p>
                            <p>
                                Tuyển 4 bạn sẽ chia làm 3 xí nghiệp: sân bay Haneda, Tokyo, Kanagawa
                            </p>
                            <p>

                                Xí nghiệp đã có 33 lao động Việt nam, đang làm ở cả 3 xí nghiệp
                            </p>
                        </div>
                    </div>
                    <div className="job-salary mt-2 flex gap-2 items-center">
                        <FaMoneyBillWave className="text-xl mr-2" />
                        <p>100,000,000</p>
                    </div>
                    <div className="job-due mt-2 flex gap-2 items-center">
                        <IoCalendarNumber className="text-xl mr-2" />
                        <p>14/10/2024</p>
                    </div>

                    <div className="job-request mt-2">
                        <div className="job-request-quantity mt-2 flex gap-2 items-center">
                            <IoPersonOutline />
                            <h3 className="font-semibold mr-2">Số lượng</h3>
                            <p>3</p>
                        </div>
                        <div className="job-request-age mt-2 flex gap-2 items-center">
                            <IoPersonOutline />
                            <h3 className="font-semibold mr-2">Độ tuổi: </h3>
                            <p>19-33</p>
                        </div>
                        <div className="job-request-study mt-2 flex gap-2 items-center">
                            <FaRegLightbulb />
                            <h3 className="font-semibold mr-2">Trình độ học vấn: </h3>
                            <p>Không yêu cầu</p>
                        </div>
                        <div className="job-request-study mt-2 flex gap-2 items-center">
                            <LuPackage />
                            <h3 className="font-semibold mr-2">Trình độ tay nghề: </h3>
                            <p>Không yêu cầu</p>
                        </div>
                        <div className="job-request-request">
                            <div className="job-request-required-header mt-2 flex gap-2 items-center">
                                <MdEditNote />
                                <h3 className="font-semibold mr-2">Yêu cầu: </h3>
                            </div>
                            <div className="job-request-required-content">
                                <p>Giới tính: Nam</p>
                                <p>Độ tuổi: 19-33 tuổi</p>
                                <p>Trình độ: Không yêu cầu</p>
                                <p>Sức khỏe: Tốt, chịu được cường độ làm việc cao</p>
                                <p>Kỹ năng: Khéo léo, tỉ mỉ, có khả năng làm việc nhóm</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyDetail;