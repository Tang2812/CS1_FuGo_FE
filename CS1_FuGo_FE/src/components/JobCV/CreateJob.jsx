import React from 'react';

const CreateJob = (props) => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 py-6">
            <form form
                className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md grid gap-4 sm:grid-cols-1 md:grid-cols-2"
            // onSubmit={handleSubmit}
            >
                <h2 className="col-span-full text-2xl font-bold mb-4 text-center">
                    Tạo công việc
                </h2>

                {/* Họ và tên */}
                <div>
                    <label className="block mb-2">Tên công ty</label>
                    <input
                        type="text"
                        name="company"
                        placeholder="Tên công ty"
                        // onChange={handleChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2">Tên công việc</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Tên công việc"
                        // onChange={handleChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        required
                    />
                </div>

                {/* Số điện thoại */}
                <div>
                    <label className="block mb-2">Số điện thoại liên hệ</label>
                    <input
                        type="tel"
                        name="partnerPhone"
                        placeholder="0123456789"
                        required
                        // onChange={handleChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-2">Email liên hệ</label>
                    <input
                        type="email"
                        name="partnerEmail"
                        placeholder="examples@example.com"
                        // onChange={handleChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div className="col-span-full">
                    <label className="block text-sm font-medium mb-2">
                        Mô tả
                    </label>
                    <textarea
                        name="description"
                        className="w-full mt-1 p-2 border rounded-lg"
                        placeholder="Mô tả"
                        rows="4"
                    // onChange={handleChange}
                    ></textarea>
                </div>

                <div className="col-span-full">
                    <label className="block text-sm font-medium mb-2">
                        Yêu cầu
                    </label>
                    <textarea
                        name="requirements"
                        className="w-full mt-1 p-2 border rounded-lg"
                        placeholder="Yêu cầu"
                        rows="4"
                    // onChange={handleChange}
                    ></textarea>
                </div>

                <div>
                    <label className="block mb-2">Đất nước</label>
                    <input
                        type="text"
                        name="country"
                        placeholder="Đất nước"
                        // onChange={handleChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2">Thành phố</label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Thành phố"
                        // onChange={handleChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2">Kinh nghiệm</label>
                    <input
                        type="text"
                        name="experience"
                        placeholder="Kinh nghiệm"
                        // onChange={handleChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2">Ngành</label>
                    <input
                        type="text"
                        name="profession"
                        placeholder="Ngành"
                        // onChange={handleChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        required
                    />
                </div>

                {/* Trình độ học vấn */}
                <div>
                    <label className="block mb-2">Trình độ học vấn</label>
                    <select
                        name="educationalLevel"
                        required
                        // onChange={handleChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    >
                        <option value="">Chọn trình độ học vấn</option>
                        <option value="Cấp 3">Cấp 3</option>
                        <option value="Cao đẳng">Cao đẳng</option>
                        <option value="Đại học">Đại học</option>
                        <option value="Khác">Khác</option>
                    </select>
                </div>

                {/* Kỹ năng ngoại ngữ */}
                <div>
                    <label className="block mb-2">Kỹ năng ngoại ngữ</label>
                    <input
                        type="text"
                        name="language"
                        required
                        // onChange={handleChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        placeholder="Ví dụ: Tiếng Nhật N4"
                    />
                </div>

                <div>
                    <label className="block mb-2">Mức lương thấp nhất</label>
                    <input
                        type="text"
                        name="minSalary"
                        placeholder="Mức lương cao nhất"
                        // onChange={handleChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2">Mức lương cao nhất</label>
                    <input
                        type="text"
                        name="maxSalary"
                        placeholder="Mức lương thấp nhất"
                        // onChange={handleChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div className="col-span-full">
                    <label className="block mb-2">Ảnh CV</label>
                    <input
                        type="file"
                        name="image"
                        // onChange={handleChange}
                        className="mb-4 border border-gray-300 rounded"
                        accept="image/*"
                    />
                </div>

                {/* Nút Nộp hồ sơ */}
                <div className="col-span-full">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                    >
                        Nộp hồ sơ
                    </button>
                </div>
            </form >
        </div >
    );
}

export default CreateJob;