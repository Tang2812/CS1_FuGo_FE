import { Link, useNavigate } from "react-router-dom";
import { MdOutlinePerson } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { SiReaddotcv } from "react-icons/si";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import countries from "world-countries";
import dayjs from "dayjs";

const countryOptions = countries.map((country) => ({
  value: country.cca2, // Mã quốc gia (ISO Alpha-2 code)
  label: country.name.common, // Tên quốc gia
}));

const Profile = () => {
  const [profileData, setProfileData] = useState({
    accountId: "",
    username: "",
    phone: "",
    birthday: "",
    gender: "",
    status_to_go: "",
    country: "",
    address: "",
    height: "",
    weight: "",
    bio: "", // added bio
    user_img: null,
  });

  const [isNewProfile, setIsNewProfile] = useState(false); // Check if it's a new profile

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => {
      if (name === "birthday") {
        return {
          ...prevData,
          [name]: dayjs(value, "YYYY-MM-DD").format("DD/MM/YYYY"), // Chuyển từ `yyyy-mm-dd` sang `dd/mm/yyyy`
        };
      }
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  // Handle file input change for avatar
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileData((prevData) => ({
        ...prevData,
        user_img: file, // Add file to state
      }));
    }
  };

  // Fetch user profile data from the backend
  useEffect(() => {
    console.log("Profile data updated:", profileData);
    const fetchProfileData = async () => {
      try {
        const authData = JSON.parse(localStorage.getItem("auth"));
        if (!authData || !authData.user || !authData.token) {
          alert("Không tìm thấy thông tin xác thực người dùng");
          return;
        }
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
        console.log("API Response:", response.data);

        if (response.data && response.data.success) {
          const userData = response.data.data;

          setProfileData({
            accountId: userData.accountId || "",
            username: userData.username || "",
            phone: userData.phone || "", // Nếu `phone` có trong backend
            birthday: userData.birthday
              ? dayjs(userData.birthday).format("YYYY-MM-DD") // Chuyển thành `dd-mm-yyyy`
              : "",
            gender: userData.gender || "",
            status_to_go: userData.status_to_go || "",
            country: userData.country || "",
            address: userData.address || "",
            height: userData.height || "",
            weight: userData.weight || "",
            bio: userData.bio || "",
            user_img: userData.user_img || null,
          });
        } else {
          // If no data, set the profile as new
          setIsNewProfile(true);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setIsNewProfile(true); // Mark the profile as new if error occurs
      }
    };
    fetchProfileData();
  }, []);

//   Hao
    const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    const parsedAuth = storedAuth ? JSON.parse(storedAuth) : null;
    if (!parsedAuth || !parsedAuth.user) {
      toast.warning("Không xác thực");
      navigate('/login');
      window.scrollTo(0, 0);
    }
  }, [auth, navigate]);

  // Handle form submission to create or update profile
  const handleSubmit = async (e) => {
    e.preventDefault();

    const authData = JSON.parse(localStorage.getItem("auth"));
    if (!authData || !authData.user || !authData.token) {
      alert("Không tìm thấy thông tin xác thực người dùng");
      return;
    }
    const userId = authData.user._id;
    const token = authData.token;

    const formData = new FormData();
    Object.entries(profileData).forEach(([key, value]) => {
      if (key === "user_img" && value) {
        formData.append("user_img", value); // Send file as `user_img`
      } else if (value && value !== "") {
        // Only send non-empty fields
        formData.append(key, value); // Send other user data
      }
    });
    formData.append("accountId", userId);

    try {
      if (isNewProfile) {
        // If it's a new profile, create it
        const response = await axios.post(
          `http://localhost:3000/api/v1/users/insert`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Profile created successfully:", response.data);
        alert("Tạo thông tin cá nhân thành công");
        setIsNewProfile(false);
      } else {
        // If the profile exists, update it
        const response = await axios.put(
          `http://localhost:3000/api/v1/users/update/${userId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Profile updated successfully:", response.data);
        alert("Cập nhật thông tin thành công");
      }
    } catch (error) {
      console.error("Error submitting profile:", error);
      alert("Không thể cập nhật thông tin");
    }
  };

  return (
    <div className="flex flex-col gap-5 lg:flex-row px-12 py-16 md:py-20 xl:px-40">
      <button
        className="lg:hidden p-3 bg-gray-100 rounded-md shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiBoxList className="text-2xl" />
      </button>
      {/* Sidebar */}
      <div className={`lg:flex lg:w-1/4 h-1/3 lg:justify-center mr-14 w-full bg-gray-50 shadow-lg rounded-lg p-4 sm:mb-0 ${isOpen ? "flex" : "hidden"}`}>
        <div className="w-full">
          <ul className="space-y-4 flex flex-col w-full">
            <li className=" flex items-center hover:bg-blue-50 hover:w-full rounded-lg">
              <MdOutlinePerson />
              <Link className="block p-2">
                Thông tin cá nhân
              </Link>
            </li>
            <li className=" flex items-center hover:bg-blue-50 hover:w-full rounded-lg">
              <MdLockOutline />
              <Link className="block p-2">
                Đặt lại mật khẩu
              </Link>
            </li>
            <li className=" flex items-center hover:bg-blue-50 hover:w-full rounded-lg">
              <SiReaddotcv />
              <Link className="block p-2" to="/list-cv">
                Quản lý CV
              </Link>
            </li>
            <li className=" flex items-center hover:bg-blue-50 hover:w-full rounded-lg">
              <IoMdNotificationsOutline />
              <Link className="block p-2">
                Thông báo
              </Link>
            </li>
            <li className=" flex items-center hover:bg-blue-50 hover:w-full rounded-lg">
              <FaRegHeart />
              <Link className="block p-2">
                Yêu thích
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Form */}
      <form className="lg:w-3/4 space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900">
          Thông tin cá nhân
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium">Họ và Tên</label>
            <input
              type="text"
              name="username"
              className="w-full mt-1 p-2 border rounded-lg"
              placeholder="Nhập họ và tên"
              value={profileData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Ngày sinh</label>
            <input
              type="date"
              name="birthday"
              className="w-full mt-1 p-2 border rounded-lg"
              value={profileData.birthday || ""} // Đảm bảo không lỗi khi chưa có dữ liệu
              onChange={(e) => {
                const { value } = e.target; // `value` sẽ ở dạng `yyyy-MM-dd`
                setProfileData((prevData) => ({
                  ...prevData,
                  birthday: value, // Lưu thẳng `yyyy-MM-dd` vào state
                }));
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Số điện thoại</label>
            <input
              type="text"
              name="phone"
              className="w-full mt-1 p-2 border rounded-lg"
              placeholder="Vui lòng nhập số điện thoại"
              value={profileData.phone || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Quốc gia</label>
            <Select
              options={countryOptions} // Danh sách quốc gia
              placeholder="Chọn quốc gia"
              className="mt-1"
              value={countryOptions.find(
                (option) => option.value === profileData.country
              )} // Lấy giá trị hiện tại từ profileData
              onChange={(selectedOption) => {
                setProfileData((prevData) => ({
                  ...prevData,
                  country: selectedOption.value, // Lưu giá trị quốc gia được chọn
                }));
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Giới tính</label>
            <select
              name="gender"
              className="w-full mt-1 p-2 border rounded-lg"
              value={profileData.gender} // Đảm bảo không lỗi khi gender chưa có giá trị
              onChange={handleChange}
            >
              <option value="" disabled>
                Chọn giới tính
              </option>{" "}
              {/* Placeholder */}
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Địa chỉ</label>
            <input
              type="text"
              name="address"
              className="w-full mt-1 p-2 border rounded-lg"
              placeholder="Vui lòng nhập địa chỉ của bạn"
              value={profileData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">
            Mô tả sơ lược bản thân
          </label>
          <textarea
            name="bio"
            className="w-full mt-1 p-2 border rounded-lg"
            placeholder="Mô tả bản thân bạn"
            rows="4"
            value={profileData.bio || ""}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium">Ảnh đại diện</label>
          {profileData.user_img && typeof profileData.user_img === "string" && (
            <div className="mb-2">
              <img
                src={profileData.user_img}
                alt="Avatar"
                className="w-20 h-20 object-cover rounded-full"
              />
            </div>
          )}
          <input
            type="file"
            className="text mt-1 border"
            onChange={handleFileChange}
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            {isNewProfile ? "Tạo mới" : "Cập nhật"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
