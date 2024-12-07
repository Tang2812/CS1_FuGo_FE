import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const List_Cv = () => {
    const { ListCV, setListCV } = useState([]);
    useEffect(() => {
        getALlCv();
    }, []);

    const getALlCv = async () => {
        setListCV(response.content);
        setTotalPages(response.totalPages);
    };
    return (

        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>FuGo - Quản lý CV</title>
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="/src/stylesheet/list_cv.css" />
            <main className="container mx-auto px-4 py-8 flex gap-24">
                {/* Sidebar */}
                <aside className="w-64 rounded-lg shadow-sm h-fit">
                    <div className="list-function">
                        <a className="fc-choice" to="/#">
                            <img src="/src/img/icon_personal.svg" alt="personal info icon" />
                            <span className="text--sm font-primary">Tạo mới CV</span>
                        </a>
                        <a className="fc-choice" href="#">
                            <img src="/src/img/icon_security.svg" alt="login and security icon" />
                            <span className="text--sm font-primary">Đặt lại mật khẩu</span>
                        </a>
                        <a className="fc-choice" href="/profile">
                            <img src="/src/img/icon_personal_info.svg" alt="payment icon" />
                            <span className="text--sm font-primary">Thông tin cá nhân</span>
                        </a>
                        <a className="fc-choice" href="#">
                            <img src="/src/img/icon_notification.svg" alt="notification icon" />
                            <span className="text--sm font-primary">Thông báo</span>
                        </a>
                        <a className="fc-choice" href="#">
                            <img src="/src/img/icon_Cv_service.svg" alt="Quan li Cv icon" />
                            <span className="text--sm font-primary">Quản lí CV </span>
                        </a>
                    </div>
                </aside>
                {/* Main Content */}
                <div className="flex-1">
                    <h1 className="text-2xl font-semibold mb-6">Quản lý CV</h1>
                    {/* CV Cards */}
                    <div className="space-y-6">
                        {/* loop */}
                        {ListCV?.map((Cv) => (
                            // eslint-disable-next-line react/jsx-key
                            <Link to={"/Job_cv_detail"}>
                                <div className="bg-white rounded-lg p-6 shadow-sm">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-8">
                                                <img src="/src/img/icon_personal.svg" alt="" />
                                                {/* name */}
                                                <span className="font-medium">{Cv.ten}</span>
                                                {/* ,type */}
                                                <span className="status-tag">{Cv.loai}</span>
                                            </div>
                                            <div className="text-gray-600 flex items-center gap-8">
                                                <img src="/src/img/icon_phone.svg" alt="" />
                                                <span>{Cv.SoDienThoai}</span>
                                            </div>
                                            <div className="text-gray-600 flex items-center gap-8">
                                                <img src="/src/img/icon_work.svg" alt="" />
                                                <span>{Cv.ngheNghiep}</span>
                                            </div>
                                            <div className="flex items-center gap-8 text-gray-500">
                                                <img src="/src/img/icon_calendar.svg" alt="" />
                                                <span>{Cv.thoiGian}</span>
                                            </div>
                                        </div>
                                        <button className="edit-button">Chỉnh sửa</button>
                                    </div>
                                </div>
                            </Link>

                        ))}

                        {/* CV Card Template */}
                        <Link to={"/Job_cv_detail"}>
                            <div className="bg-white rounded-lg p-6 shadow-sm">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-8">
                                            <img src="/src/img/icon_personal.svg" alt="" />
                                            {/* name */}
                                            <span className="font-medium">Hung</span>
                                            {/* ,type */}
                                            <span className="status-tag">XKLD</span>
                                        </div>
                                        <div className="text-gray-600 flex items-center gap-8">
                                            <img src="/src/img/icon_phone.svg" alt="" />
                                            <span>0905123456</span>
                                        </div>
                                        <div className="text-gray-600 flex items-center gap-8">
                                            <img src="/src/img/icon_work.svg" alt="" />
                                            <span> Kỹ sư IT, Kỹ sư công nghệ máy tính</span>
                                        </div>
                                        <div className="flex items-center gap-8 text-gray-500">
                                            <img src="/src/img/icon_calendar.svg" alt="" />
                                            <span>09-10-2024</span>
                                        </div>
                                    </div>
                                    <button className="edit-button">Chỉnh sửa</button>
                                </div>
                            </div>
                        </Link>

                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <div className="flex justify-between items-start">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-8">
                                        <img src="/src/img/icon_personal.svg" alt="" />
                                        {/* name */}
                                        <span className="font-medium">Hung</span>
                                        {/* ,type */}
                                        <span className="status-tag">XKLD</span>
                                    </div>
                                    <div className="text-gray-600 flex items-center gap-8">
                                        <img src="/src/img/icon_phone.svg" alt="" />
                                        <span>0905123456</span>
                                    </div>
                                    <div className="text-gray-600 flex items-center gap-8">
                                        <img src="/src/img/icon_work.svg" alt="" />
                                        <span> Kỹ sư IT, Kỹ sư công nghệ máy tính</span>
                                    </div>
                                    <div className="flex items-center gap-8 text-gray-500">
                                        <img src="/src/img/icon_calendar.svg" alt="" />
                                        <span>09-10-2024</span>
                                    </div>
                                </div>
                                <button className="edit-button">Chỉnh sửa</button>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <div className="flex justify-between items-start">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-8">
                                        <img src="/src/img/icon_personal.svg" alt="" />
                                        {/* name */}
                                        <span className="font-medium">Hung</span>
                                        {/* ,type */}
                                        <span className="status-tag">XKLD</span>
                                    </div>
                                    <div className="text-gray-600 flex items-center gap-8">
                                        <img src="/src/img/icon_phone.svg" alt="" />
                                        <span>0905123456</span>
                                    </div>
                                    <div className="text-gray-600 flex items-center gap-8">
                                        <img src="/src/img/icon_work.svg" alt="" />
                                        <span> Kỹ sư IT, Kỹ sư công nghệ máy tính</span>
                                    </div>
                                    <div className="flex items-center gap-8 text-gray-500">
                                        <img src="/src/img/icon_calendar.svg" alt="" />
                                        <span>09-10-2024</span>
                                    </div>
                                </div>
                                <button className="edit-button">Chỉnh sửa</button>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Actions */}
                    <div className="mt-8 flex items-center gap-16">
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
                            Tạo mới CV
                        </button>
                        <button className="text-gray-600 flex items-center gap-2">
                            <span>×</span>
                            Xóa tất cả
                        </button>
                    </div>
                </div>
            </main>
        </>

    )
};

export default List_Cv;
