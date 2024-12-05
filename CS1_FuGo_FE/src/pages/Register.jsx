import { useEffect, useState } from 'react';
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
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleRole = (role) => {
    setRole(role);
  }

  useEffect(() => {
    if (!role) {
      setRole('user');
    }
  });

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      toast.warning("Vui nhập đầy đủ!");
      return;
    }
    if (username.length < 3 || username.length > 20) {
      toast.warning("Vui nhập tên người dùng nhiều hơn 3 ký tự và ít hơn 20 kí tự!");
      return;
    }
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error('Email không hợp lệ')
      return;
    }
    if (password.length < 3) {
      toast.warning('Vui lòng nhập mật khẩu nhiều hơn 3 kí tự')
      return;
    }
    if (!isChecked) {
      toast.warning("Vui lòng đồng ý với các điều khoản dịch vụ!");
      return;
    }
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
          "Mật khẩu không khớp!"
        );
      }

      const res = await axios.post(registerURL, data);
      if (res.data.success === true) {
        // console.log(">> Check res: ", res);
        toast.success("Đăng ký thành công !");
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
      <link rel="stylesheet" href="/src/stylesheet/register.css" />
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
            <input type="text" placeholder="Tên người dùng (3-20 kí tự)" required id="username" onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Email (example@gmail.com)" required id="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Mật khẩu" required id="password" onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Nhập lại mật khẩu" required id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />

            <div className="checkbox-container">
              <input type="checkbox" id="terms" required checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
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
