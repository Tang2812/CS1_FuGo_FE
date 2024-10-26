import { Link } from "react-router-dom";
import { MdOutlinePerson } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { SiReaddotcv } from "react-icons/si";
import { IoMdNotificationsOutline } from "react-icons/io";
const Profile = () => {
  return (
    <div className="flex flex-col sm:flex-row py-20 px-40">
      {/* Sidebar */}
      <div className="flex w-full h-1/3 justify-center  mr-14 sm:w-1/4 bg-white shadow-lg rounded-lg p-4 sm:mb-0 ">
        <div>
          <ul className="space-y-4 flex flex-col items-left">
            <li className=" flex items-center">
              <MdOutlinePerson />
              <Link className="block p-2 rounded-lg">Thông tin cá nhân</Link>
            </li>
            <li className=" flex items-center">
              <MdLockOutline />
              <Link className="block p-2 hover:bg-blue-50 rounded-lg">
                Đặt lại mật khẩu
              </Link>
            </li>
            <li className=" flex items-center">
              <SiReaddotcv />
              <Link className="block p-2 hover:bg-blue-50 rounded-lg">
                Quản lý CV
              </Link>
            </li>
            <li className=" flex items-center">
              <IoMdNotificationsOutline />
              <Link className="block p-2 hover:bg-blue-50 rounded-lg">
                Thông báo
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Form */}
      <form className="w-full sm:w-3/4 space-y-6">
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
