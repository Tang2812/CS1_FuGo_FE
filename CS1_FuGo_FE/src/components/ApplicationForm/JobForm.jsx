import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const JobForm = () => {
  const { id: jobId } = useParams();
  const [formData, setFormData] = useState({
    username: "",
    gender: "",
    phone: "",
    email: "",
    education: "",
    language: "",
    bio: "",
    image: null,
  });
  const [auth] = useAuth();
  const [accountId, setAccountId] = useState("");
  const navigate = useNavigate();

  // Xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  // Xác thực email
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());

  // Xác thực số điện thoại
  const validatePhoneNumber = (phone) =>
    /^(0|\+84)(3|5|7|8|9)\d{8}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, gender, phone, email, education, language, bio, image } =
      formData;

    // Kiểm tra thông tin
    if (
      !username ||
      !gender ||
      !phone ||
      !email ||
      !education ||
      !language ||
      !bio ||
      !image
    ) {
      toast.warning("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    // Kiểm tra file ảnh
    if (image && image.size === 0) {
      toast.warning("Hình ảnh không hợp lệ");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Email không hợp lệ");
      return;
    }

    if (!validatePhoneNumber(phone)) {
      toast.error("Số điện thoại không hợp lệ");
      return;
    }

    // Chuẩn bị dữ liệu gửi đi
    const formDataObj = new FormData();
    formDataObj.append("jobId", jobId);
    formDataObj.append("accountId", accountId);
    Object.entries(formData).forEach(([key, value]) =>
      formDataObj.append(key, value)
    );
    formDataObj.forEach((value, key) => console.log(`${key}: ${value}`));

    
    
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/jobs/apply",
        formDataObj
      );

      if (data.success) {
        toast.success("Nộp CV thành công.");
        navigate("/home");
      } else {
        toast.error(data.message || "Đã xảy ra lỗi. Vui lòng thử lại.");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Có lỗi xảy ra, vui lòng thử lại.";
      toast.error(errorMessage);
    }
  };

  // Kiểm tra trạng thái đăng nhập
  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    const parsedAuth = storedAuth ? JSON.parse(storedAuth) : null;

    if (!parsedAuth || !parsedAuth.user) {
      toast.warning("Bạn cần đăng nhập trước khi nộp CV!");
      navigate("/login");
    } else {
      setAccountId(parsedAuth.user._id);
    }
  }, [navigate]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const authData = JSON.parse(localStorage.getItem("auth"));
        const userId = authData.user._id; // Get _id from user
        const token = authData.token;

        const response = await axios.get(
          `http://localhost:3000/api/v1/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log("API Response:", response.data);

        if (response.data && response.data.success) {
          setFormData(response.data.data);
        } else {
          setFormData({});
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchProfileData();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-6">
      <form
        className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md grid gap-4 sm:grid-cols-1 md:grid-cols-2"
        onSubmit={handleSubmit}
      >
        <h2 className="col-span-full text-2xl font-bold mb-4 text-center">
          Ứng tuyển CV của bạn
        </h2>

        <div>
          <label className="block mb-2">Họ và tên</label>
          <input
            type="text"
            name="username"
            placeholder="Họ và tên"
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={formData.username}
          />
        </div>

        <div>
          <label className="block mb-2">Giới tính</label>
          <select
            name="gender"
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={formData.gender}
          >
            <option value="">Chọn giới tính</option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Số điện thoại</label>
          <input
            type="tel"
            name="phone"
            placeholder="**********"
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={formData.phone}
          />
        </div>

        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="examples@example.com"
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={formData.email}
          />
        </div>

        <div>
          <label className="block mb-2">Trình độ học vấn</label>
          <select
            name="education"
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={formData.education}
          >
            <option value="">Chọn trình độ học vấn</option>
            <option value="Cấp 3">Cấp 3</option>
            <option value="Cao đẳng">Cao đẳng</option>
            <option value="Đại học">Đại học</option>
            <option value="Khác">Khác</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Kỹ năng ngoại ngữ</label>
          <input
            type="text"
            name="language"
            placeholder="Ví dụ: Tiếng Nhật N4"
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={formData.language}
          />
        </div>

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
            value={formData.bio}
          ></textarea>
        </div>

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

        <div className="col-span-full">
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          >
            Nộp hồ sơ
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
