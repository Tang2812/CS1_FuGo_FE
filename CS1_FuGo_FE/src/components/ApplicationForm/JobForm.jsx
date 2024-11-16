import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const JobForm = () => {
  const [formData, setFormData] = useState({});
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!auth || !auth.user) {
      toast.warning("You must login before applying!");
      navigate('/login');
      window.scrollTo(0, 0);
    }
  }, [auth]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-6">
      <form form
        className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md grid gap-4 sm:grid-cols-1 lg:grid-cols-2"
        onSubmit={handleSubmit}
      >
        <h2 className="col-span-full text-2xl font-bold mb-4 text-center">
          Ứng tuyển CV của bạn
        </h2>

        {/* Họ và tên */}
        <div>
          <label className="block mb-2">Họ và tên</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            placeholder="Họ và tên"
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Giới tính */}
        <div>
          <label className="block mb-2">Giới tính</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          >
            <option value="">Chọn giới tính</option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </select>
        </div>

        {/* Số điện thoại */}
        <div>
          <label className="block mb-2">Số điện thoại</label>
          <input
            type="tel"
            name="phone"
            placeholder="**********"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="examples@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Trình độ học vấn */}
        <div>
          <label className="block mb-2">Trình độ học vấn</label>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
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
            value={formData.language}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="Ví dụ: Tiếng Nhật N4"
          />
        </div>

        {/* Mô tả bản thân */}
        <div className="col-span-full">
          <label className="block text-sm font-medium mb-2">
            Mô tả bản thân
          </label>
          <textarea
            name="bio"
            className="w-full mt-1 p-2 border rounded-lg"
            placeholder="Mô tả bản thân bạn"
            rows="4"
          ></textarea>
        </div>

        {/* Ảnh CV */}
        <div className="col-span-full">
          <label className="block mb-2">Ảnh CV</label>
          <input
            type="file"
            name="passportPhoto"
            onChange={handleChange}
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
};

export default JobForm;
