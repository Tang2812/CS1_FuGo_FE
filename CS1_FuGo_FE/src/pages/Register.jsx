import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';

const Register = () => {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRole = (role) => {
    setRole(role);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const registerURL = `http://localhost:3000/api/v1/auth/register`;
      const data = {
        role,
        username,
        email,
        password,
      };
      if (confirmPassword !== data.password) {
        return toast.error(
          "Password and confirm password do not match!"
        );
      }

      const res = await axios.post(registerURL, data);
      if (res.data.success === true) {
        // console.log(">> Check res: ", res);
        navigate("/login")
      }
      else {
        toast.error("Failed to register");
      }

    } catch (error) {
      if (!error.response.data.success) {
        const message = error.response.data.message;
        toast.error(message);
      } else {
        toast.error("Failure Registation!");
      }
    }
  }



  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>FuGo - Đăng ký tài khoản mới</title>
      <link rel="stylesheet" href="/src/stylesheet/dang_ky.css" />
      <div className="container">
        <div className="form-section">
          <img src="/src/img/logo.png" alt="FuGo Logo" className="logo mb-5" />
          <h2>Đăng ký tài khoản mới</h2>

          <form className="form-dang-ky">
            <p>Chọn vai trò bạn muốn đăng ký <span className='font-semibold'>(bắt buộc)</span></p>
            <div className="role-buttons">
              <button
                className={`role-button ${role === 'user' ? 'active' : ''} hover:bg-[#2196f3] hover:text-white`}
                onClick={() => handleRole('user')}
              >Ứng viên</button>
              <button className={`role-button ${role === 'partner' ? 'active' : ''} hover:bg-[#2196f3] hover:text-white`}
                onClick={() => handleRole('partner')}
              >Nhà tuyển dụng
              </button>
            </div>
            <input type="text" placeholder="Tên đăng nhập" required id="username" onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" required id="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Mật khẩu" required id="password" onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Nhập lại mật khẩu" required id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />

            <div className="checkbox-container">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                Tôi đồng ý với các điều khoản dịch vụ
              </label>
            </div>
            <button type="submit" className="signup-button" onClick={handleSubmit}>
              Đăng ký
            </button>
          </form>
          <div className="login-link">
            <p>
              Bạn đã có tài khoản? <a href="/login">Đăng nhập</a>
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

export default Register;
