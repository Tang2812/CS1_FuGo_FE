import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
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
  return (
    <div className="flex items-center text-white justify-between h-12 bg-teal-600 px-5">
        <p>Welcom, `Tên partner` </p>
        <button className="px-4 py-1 bg-teal-700 hover:bg-teal-800 rounded" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Navbar