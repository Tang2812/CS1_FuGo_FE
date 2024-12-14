import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [contactName, setContactName] = useState({});
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Đăng xuất thành công");
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    navigate("/login");
  };
  useEffect(() => {
    const fetchData = async () => {
      const authData = JSON.parse(localStorage.getItem("auth"));
      // console.log("check auth: ", authData);
      if (!authData || !authData.user || !authData.token) {
        toast.error("Không tìm thấy thông tin xác thực người dùng");
        return;
      }
      const userId = authData.user._id; // Get _id from user
      const token = authData.token;
      // console.log("check userId and token: ", userId, token);
      const response = await axios.get(
        `http://localhost:3000/api/v1/partners/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setContactName(response.data.data[0]);
      }
      // console.log(contactName);
    };
    fetchData();
  }, []);

  return (
    <div className="flex items-center text-white justify-between h-12 bg-teal-600 px-5">
      <p>Xin chào, {contactName.contact_person} </p>
      <button className="px-4 py-1 bg-teal-700 hover:bg-teal-800 rounded" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Navbar