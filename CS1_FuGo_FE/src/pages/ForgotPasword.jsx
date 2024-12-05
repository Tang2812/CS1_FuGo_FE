import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { toast } from 'react-toastify';
const ForgotPasword = () => {

  const [isSent, setIsSent] = useState(false);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!email || "") {
      toast.warning("Vui lòng nhập email của bạn!");
      return;
    }
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error('Email không hợp lệ')
      return;
    }
    toast.info("Vui lòng kiểm tra email để xác nhận");
    // toast.info(email);
    setIsSent(true);


  }

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>FuGo - Quên mật khẩu</title>
      <link rel="stylesheet" href="/src/stylesheet/login.css" />
      <div className="container">
        <div className="form-section">
          <img src="/src/img/logo.png" alt="FuGo Logo" className="logo mb-5" />
          <h2 className="text-xl font-semibold">Quên mật khẩu</h2>

          {isSent
            ?
            <form className="form-dang-ky">
              <input type="password" aria-label="new password" placeholder="Mật khẩu mới"
                onChange={(event) => setNewPassword(event.target.value)} value={newPassword} />
              <input type="password" aria-label="confirm new password" placeholder="Xác nhận mật khẩu mới"
                onChange={(event) => setConfirmNewPassword(event.target.value)} value={confirmNewPassword} />
              <button type="submit" className="login-button">
                Xác nhận
              </button>
            </form>
            :
            <form className="form-dang-ky" onSubmit={(e) => handleSendEmail(e)}>
              <input type="email" aria-label="Email" placeholder="Email"
                onChange={(event) => setEmail(event.target.value)} value={email} />
              <button type="submit" className="login-button">
                Gửi
              </button>
            </form>
          }

          <div className="signup-link">
            <p>
              Trở lại <a href="/login">Đăng nhập</a>
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

export default ForgotPasword;
