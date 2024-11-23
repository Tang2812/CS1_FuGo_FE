import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { toast } from 'react-toastify';
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    if (location.pathname === '/login') {
      setAuth({
        ...auth,
        user: "",
        token: null,
      });
      localStorage.getItem("auth");
      const authToken = {
        user: "",
        token: null,
      };
      localStorage.setItem("auth", JSON.stringify(authToken));
    }
  }, [location.pathname]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warning("Please enter both username and password.");
      return;
    }
    try {
      const loginURL = `http://localhost:3000/api/v1/auth/login`;
      const data = {
        email,
        password,
      };
      const res = await axios.post(loginURL, data);
      console.log(">>Check res: ", res);
      if (res.data.accessToken) {
        toast.success("Login succesfully");
        // set token
        setAuth({
          ...auth,
          user: res?.data?.data,
          token: res?.data?.accessToken,
        });
        localStorage.getItem("auth");
        const authToken = {
          user: res?.data?.data,
          token: res?.data?.accessToken,
        };
        localStorage.setItem("auth", JSON.stringify(authToken));
        navigate("/");
      } else {
        toast.error("Failed to login");
      }

    } catch (error) {
      toast.error("Wrong email or password!!!!");
    }
  }

  console.log(auth);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>FuGo - Đăng nhập</title>
      <link rel="stylesheet" href="/src/stylesheet/login.css" />
      <div className="container">
        <div className="form-section">
          <img src="/src/img/logo.png" alt="FuGo Logo" className="logo mb-5" />
          <h2 className="text-xl font-semibold">Đăng nhập</h2>
          <form className="form-dang-ky">
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className="login-button" onClick={handleSubmit}>
              Đăng nhập
            </button>
          </form>
          <div className="signup-link">
            <p>
              Bạn chưa có tài khoản? <a href="/register">Đăng ký</a>
            </p>
          </div>
        </div>
        <div className="image-section">
          <img src="/src/img/banner.png" alt="banner" />
        </div>
      </div>
    </>
  );
};

export default Login;
