import { NavLink } from "react-router-dom";
import { MdWork } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { IoIosCreate, IoMdSettings } from "react-icons/io";
import { FaPlaneDeparture } from "react-icons/fa";
import { useState } from 'react';



const PartnerSidebar = () => {
    
    return (
        <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64 z-40">
            
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
