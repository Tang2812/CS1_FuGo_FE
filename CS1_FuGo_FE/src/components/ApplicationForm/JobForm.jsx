import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const JobForm = () => {
  const params = useParams();
  const [formData, setFormData] = useState({});
  const [auth, setAuth] = useAuth();
  const [accountId, setAccountId] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const jobId = params.id;


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const validatePhoneNumber = (phone) => {
    const regex = /^(0|\+84)(3|5|7|8|9)\d{8}$/;
    return regex.test(phone);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    if (!formData.fullName || !formData.gender || !formData.phone 
      || !formData.email || !formData.education || !formData.language
      || !formData.bio) {
      toast.warning('Vui lòng nhập đầy đủ thông tin');
      return;
    }    
    const isValidEmail = validateEmail(formData.email);
    if (!isValidEmail) {
      toast.error('Email không hợp lệ')
      return;
    }

    const isPhoneNumber = validatePhoneNumber(formData.phone);
    if (isPhoneNumber == false) {
      toast.error('Số điện thoại không hợp lệ.')
      return;
    }
    const formDataObj = new FormData();
    formDataObj.append("jobId", jobId);
    formDataObj.append("accountId", accountId);

    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    })

    formDataObj.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });


    try {
      const response = await axios.post("http://localhost:3000/api/v1/jobs/apply", formDataObj)

      if (response.data.success) {
        toast.success("Nộp CV thành công.");
        navigate('/home');
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    const parsedAuth = storedAuth ? JSON.parse(storedAuth) : null;
    if (!parsedAuth || !parsedAuth.user) {
      toast.warning("Bạn cần đăng nhập trước khi nộp CV!");
      navigate('/login');
      window.scrollTo(0, 0);
    }
    else {
      const userId = auth?.user?._id || parsedAuth?.user?._id;
      setAccountId(userId);
    }
  }, [auth, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-6">
      <form form
        className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md grid gap-4 sm:grid-cols-1 md:grid-cols-2"
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
            required
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
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
            required
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="examples@example.com"
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
            required
            onChange={handleChange}
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
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Ảnh CV */}
        <div className="col-span-full">
          <label className="block mb-2">Ảnh CV</label>
          <input
            type="file"
            name="image"
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
