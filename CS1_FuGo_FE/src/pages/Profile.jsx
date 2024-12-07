import { Link, useNavigate } from "react-router-dom";
import { MdOutlinePerson } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { SiReaddotcv } from "react-icons/si";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
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
              name="fullName"
              className="w-full mt-1 p-2 border rounded-lg"
              placeholder="Nhập họ và tên"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Ngày sinh</label>
            <input
              type="date"
              name="dob"
              className="w-full mt-1 p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Số điện thoại</label>
            <input
              type="text"
              name="phoneNumber"
              className="w-full mt-1 p-2 border rounded-lg"
              placeholder="Vui lòng nhập số điện thoại"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Nhập Email</label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 p-2 border rounded-lg"
              placeholder="Vui lòng nhập email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Giới tính</label>
            <select name="gender" className="w-full mt-1 p-2 border rounded-lg">
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
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium">Ảnh đại diện</label>
          <input type="file" className="text mt-1  border " />
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
