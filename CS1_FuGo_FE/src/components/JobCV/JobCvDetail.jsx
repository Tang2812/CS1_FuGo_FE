
const JobCvDetail = () => {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Chi Tiết Hồ Sơ</title>
            <link
                href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="/src/stylesheet/Cv_detail.css"></link>
            {/* Main Content */}
            <main className="flex p-6 space-x-6">
                {/* Profile Details Section */}
                <section className="flex-1 p-6 rounded-lg">
                    <h2 className="text-2xl ali mb-4 font-semibold">
                        Chi tiết hồ sơ của bạn
                    </h2>
                    {/* General Info */}
                    <div className="mb-6">
                        <h3 className=" tan--bgr__green font-semibold  px-4 py-2 rounded-t-md">
                            Thông tin chung
                        </h3>
                        <table className="w-full border">
                            <tbody>
                            <tr className="border-b">
                                <td className="p-4">Mục đích</td>
                                <td className="p-4">Xuất khẩu lao động</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4">Quốc gia</td>
                                <td className="p-4">Singapore, Đài Loan</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4">Ngành nghề</td>
                                <td className="p-4">Kỹ sư IT, Kỹ sư máy tính</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4">Thời gian</td>
                                <td className="p-4">Sau 6 tháng nữa</td>
                            </tr>
                            <tr>
                                <td className="p-4">Mô tả bản thân</td>
                                <td className="p-4">vui tính dễ gần</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Contact Info */}
                    <div>
                        <h3 className=" tan--bgr__green font-semibold  px-4 py-2 rounded-t-md">
                            Thông tin liên hệ
                        </h3>
                        <p className="p-4">Họ và tên: Nhật Huy</p>
                        <p className="p-4">Quê quán: Quảng Nam</p>
                        <p className="p-4">Số điện thoại: 0905367182</p>
                        <p className="p-4">Email: hananguyen.tuyendung@gmail.com</p>
                        <div className="flex space-x-4 mt-4">
                            <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                                Chỉnh sửa
                            </button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-md">
                                Xóa
                            </button>
                        </div>
                    </div>
                </section>
                {/* Sidebar */}
                <aside className=" w-1/3 space-y-6">
                    {/* Related Jobs Section */}
                    <div className=" rcm__side-bar p-4 rounded-lg">
                        <div className="title--side-bar">
                            <h3 className="text-green-600 font-semibold mb-2">
                                Công việc phù hợp
                            </h3>
                        </div>
                        {/*List Job Item */}
                        <div className="job-item__card p-4 mb-2 border rounded-md">
                            <div className="card__primary-part">
                                <p className="font-semibold">XXLD - 1 Năm Dựnggit Dàn Giáo</p>
                                <p className="text-sm text-gray-600">
                                    CÔNG TY CỔ PHẦN T-GROUP VIỆT
                                </p>
                                <p className="text-sm text-gray-400">Hạn nhận hồ sơ: 22/09/2024</p>
                            </div>
                            <div className="card__secondary-part">
                                <p className="text-green-600">14,1370 JPY / tháng</p>
                                <p className="text-green-600">Nhật Bản</p>
                            </div>
                        </div>
                        <div className="job-item__card p-4 mb-2 border rounded-md">
                            <div className="card__primary-part">
                                <p className="font-semibold">XXLD - 1 Năm Dựnggit Dàn Giáo</p>
                                <p className="text-sm text-gray-600">
                                    CÔNG TY CỔ PHẦN T-GROUP VIỆT
                                </p>
                                <p className="text-sm text-gray-400">Hạn nhận hồ sơ: 22/09/2024</p>
                            </div>
                            <div className="card__secondary-part">
                                <p className="text-green-600">14,1370 JPY / tháng</p>
                                <p className="text-green-600">Nhật Bản</p>
                            </div>
                        </div>
                        <div className="job-item__card p-4 mb-2 border rounded-md">
                            <div className="card__primary-part">
                                <p className="font-semibold">XXLD - 1 Năm Dựnggit Dàn Giáo</p>
                                <p className="text-sm text-gray-600">
                                    CÔNG TY CỔ PHẦN T-GROUP VIỆT
                                </p>
                                <p className="text-sm text-gray-400">Hạn nhận hồ sơ: 22/09/2024</p>
                            </div>
                            <div className="card__secondary-part">
                                <p className="text-green-600">14,1370 JPY / tháng</p>
                                <p className="text-green-600">Nhật Bản</p>
                            </div>
                        </div>
                        <div className="job-item__card p-4 mb-2 border rounded-md">
                            <div className="card__primary-part">
                                <p className="font-semibold">XXLD - 1 Năm Dựnggit Dàn Giáo</p>
                                <p className="text-sm text-gray-600">
                                    CÔNG TY CỔ PHẦN T-GROUP VIỆT
                                </p>
                                <p className="text-sm text-gray-400">Hạn nhận hồ sơ: 22/09/2024</p>
                            </div>
                            <div className="card__secondary-part">
                                <p className="text-green-600">14,1370 JPY / tháng</p>
                                <p className="text-green-600">Nhật Bản</p>
                            </div>
                        </div>
                    </div>
                </aside>
            </main>
        </>

    )
}
export default JobCvDetail;