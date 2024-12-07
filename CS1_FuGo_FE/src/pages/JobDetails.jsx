import React, { useEffect, useState } from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Clock, MapPin, Share2 } from 'lucide-react';
import { FaMoneyBillWave } from "react-icons/fa";
import tagImg from "../img/tagImg.jpg";
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const JobDetails = () => {

    const [job, setJob] = useState([]);
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const jobId = params.id;

    const getJobData = (id) => {
        return axios.get(`http://localhost:3000/api/v1/jobs/${id}`)
    };

    useEffect(() => {
        fetchJobData();
    }, [jobId])

    const fetchJobData = async () => {
        try {
            const res = await getJobData(jobId);
            setJob(res?.data?.data);
        } catch (error) {
            if (error.response && !error.response.data.success) {
                toast(error.response.data.error);
            }
        }

    };

    return (
        <div className="min-h-screen bg-gray-50">


            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Job Details */}
                    <div className="md:col-span-2">
                        {/* Company Header */}
                        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                            <div className="sm:flex sm:items-start sm:justify-between">
                                <div className="flex space-x-4">
                                    <div>
                                        <img src={tagImg} alt="Company Logo" className="w-32 h-32 object-cover" />
                                        <h2 className=' text-green-600 font-semibold text-lg flex justify-center my-3 shadow-md'>{job.jobStatus}</h2>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold mb-2">{job.title}</h2>
                                        <p className="text-gray-600 mb-2">{job.company}</p>
                                        <div className="flex items-center space-x-2 text-gray-500">
                                            <Clock className="w-4 h-4" />
                                            <span>Dự kiến xuất cảnh: 12/2024</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-gray-500">
                                            <MapPin className="w-4 h-4" />
                                            <span>{job.location}, {job.country}</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-gray-500">
                                            <FaMoneyBillWave className="w-4 h-4" />
                                            <span>{job.minSalary} - {job.maxSalary}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <button className="w-full bg-green-500 text-white px-4 py-2 rounded-md"
                                        onClick={() => navigate(`/application/job/${jobId}`)}>
                                        Ứng tuyển ngay
                                    </button>
                                    <button className="w-full border border-green-500 text-green-500 px-4 py-2 rounded-md">
                                        Lưu tin
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Job Information Sections */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            {/* Chi tiết thông tin */}
                            <div className="border-b">
                                <div className="bg-[#95c11f] px-4 py-2">
                                    <h2 className="text-white font-semibold">CHI TIẾT THÔNG TIN</h2>
                                </div>
                                <div className="p-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-semibold mb-2">Hình thức:</p>
                                            <p>Xuất khẩu lao động</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold mb-2">Ngành</p>
                                            <p>{job.profession}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold mb-2">Kinh Nghiệm</p>
                                            <p>{job.experience}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold mb-2">Đối tượng:</p>
                                            <p>Xuất khẩu lao động trọn gói</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Yêu cầu ứng viên */}
                            <div className="border-b">
                                <div className="bg-[#95c11f] px-4 py-2">
                                    <h2 className="text-white font-semibold">YÊU CẦU ỨNG VIÊN</h2>
                                </div>
                                <div className="p-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-semibold mb-2">Giới tính:</p>
                                            <p>Nam</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold mb-2">Số lượng thi tuyển:</p>
                                            <p>10</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold mb-2">Yêu cầu:</p>
                                            <p>{job.requirements}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold mb-2">Trình độ học vấn</p>
                                            <p>{job.educationalLevel}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div>
                                <div className="bg-[#95c11f] px-4 py-2">
                                    <h2 className="text-white font-semibold">THÔNG TIN LIÊN HỆ</h2>
                                </div>
                                <div className="p-4">
                                    <div className="space-y-2">
                                        <p><span className="font-semibold">Họ tên:</span> Nguyễn Hoàng</p>
                                        <p><span className="font-semibold">Chức vụ:</span> Nhân viên</p>
                                        <p><span className="font-semibold">Điện thoại:</span> 0903367182</p>
                                        <p><span className="font-semibold">Email:</span> huongquyen.tuyendung@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Related Jobs */}
                    <div className="space-y-6">
                        {/* Share Section */}
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <h3 className="font-semibold text-green-600 mb-4">CHIA SẺ TIN TUYỂN DỤNG</h3>
                            <div className="flex space-x-4">
                                <Facebook className="w-6 h-6 text-blue-600" />
                                <Twitter className="w-6 h-6 text-blue-400" />
                                <Linkedin className="w-6 h-6 text-blue-700" />
                                <Share2 className="w-6 h-6 text-gray-600" />
                            </div>
                        </div>

                        {/* Similar Jobs */}
                        <div className="bg-white rounded-lg shadow-sm">
                            <h3 className="font-semibold bg-green-600 text-white mb-4 py-2 px-5 rounded-t-lg">VIỆC LÀM CÙNG CÔNG TY</h3>
                            <div className="space-y-4">
                                {[1, 2, 3, 4]?.map((job) => (
                                    <div key={job} className="border-b px-4 pt-2 last:border-b-4 last:pb-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-medium">XKLD - Nam Đóng Gói Thực Phẩm</h4>
                                                <p className="text-sm text-gray-500">CÔNG TY CỔ PHẦN T-GROUP VIỆT</p>
                                                <p className="text-sm text-gray-600">$ 167,120 JPY / tháng</p>
                                            </div>
                                            <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm">
                                                Nhật Bản
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Related Jobs */}
                        <div className="bg-white rounded-lg shadow-sm">
                            <h3 className="font-semibold bg-green-600 text-white mb-4 py-2 px-5 rounded-t-lg">VIỆC LÀM ĐỀ XUẤT</h3>
                            <div className="space-y-4">
                                {[1, 2, 3, 4]?.map((job) => (
                                    <div key={job} className="border-b px-4 pt-2 last:border-b-4 last:pb-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-medium">XKLD - Nam Đóng Gói Thực Phẩm</h4>
                                                <p className="text-sm text-gray-500">CÔNG TY CỔ PHẦN T-GROUP VIỆT</p>
                                                <p className="text-sm text-gray-600">$ 167,120 JPY / tháng</p>
                                            </div>
                                            <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm">
                                                Nhật Bản
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default JobDetails;