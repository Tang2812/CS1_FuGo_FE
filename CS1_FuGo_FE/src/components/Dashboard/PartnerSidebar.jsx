import { NavLink } from "react-router-dom";
import { MdWork } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { IoIosCreate, IoMdSettings } from "react-icons/io";
import { FaPlaneDeparture } from "react-icons/fa";
import { useState } from 'react';

const Modal = ({ showModal, setShowModal }) => {
    if (!showModal) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md z-50">
                <h2 className="text-2xl font-semibold mb-4">Nhập lời nhắn</h2>
                <textarea
                    className="w-full p-2 border rounded-md mb-4"
                    rows="4"
                    placeholder="Viết lời nhắn của bạn ở đây..."
                ></textarea>
                <div className="flex justify-end space-x-2">
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
                        onClick={() => setShowModal(false)}
                    >
                        Đóng
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                        onClick={() => alert('Lời nhắn đã được gửi!')}
                    >
                        Gửi
                    </button>
                </div>
            </div>
        </div>
    );
};

const PartnerSidebar = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64 z-40">
            <div className="p-8">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    onClick={() => setShowModal(true)}
                >
                    Mở Modal
                </button>
                <Modal showModal={showModal} setShowModal={setShowModal} />
            </div>
            <div className="bg-teal-600 h-12 flex items-center justify-center">
                <h3 className="text-2xl text-center font-pacific">Nhà tuyển dụng</h3>
            </div>
            <div className="px-4">
                <NavLink
                    to="/partner/jobCV-application"
                    className={({ isActive }) =>
                        `${isActive ? "bg-teal-500" : ""
                        } flex items-center space-x-4 py-2.5 px-4 rounded`
                    }
                    end
                >
                    <MdWork />
                    <span>Job CV</span>
                </NavLink>
                <NavLink
                    to="/partner/studyAbroad-application"
                    className={({ isActive }) =>
                        `${isActive ? "bg-teal-500" : ""
                        } flex items-center space-x-4 py-2.5 px-4 rounded`
                    }
                    end
                >
                    <FaPlaneDeparture />
                    <span>CV Du Học</span>
                </NavLink>
                <NavLink
                    to="/partner/create-job"
                    className={({ isActive }) =>
                        `${isActive ? "bg-teal-500" : ""
                        } flex items-center space-x-4 py-2.5 px-4 rounded`
                    }
                    end
                >
                    <IoIosCreate />
                    <span>Tạo công việc mới</span>
                </NavLink>
                <NavLink
                    to="/partner/create-studyAbroad"
                    className={({ isActive }) =>
                        `${isActive ? "bg-teal-500" : ""
                        } flex items-center space-x-4 py-2.5 px-4 rounded`
                    }
                    end
                >
                    <PiStudent />
                    <span>Tạo học phần du học mới</span>
                </NavLink>
                <NavLink
                    to="/partner/setting"
                    className={({ isActive }) =>
                        `${isActive ? "bg-teal-500" : ""
                        } flex items-center space-x-4 py-2.5 px-4 rounded`
                    }
                    end
                >
                    <IoMdSettings />
                    <span>Cài đặt</span>
                </NavLink>
            </div>
        </div>
    );
};

export default PartnerSidebar;
