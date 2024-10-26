
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import {useParams, useNavigate, Link} from "react-router-dom";
const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const { idUser, setIdUser } = useState;
  const navigate = useNavigate()
  useEffect(() => {
    getIdUser();
  }, []);

  const getIdUser = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };


  const onSubmit = async (data) => {
    try {
      navigate(`/home`)
    } catch (error) {
        console.log(error);
    }
};


  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>FuGo - Đăng ký tài khoản mới</title>
      <link rel="stylesheet" href="/src/stylesheet/dang_ky.css" />
      <div className="container">
        <div className="form-section">
          <img src="/src/img/logo.png" alt="FuGo Logo" className="logo" />
          <h2>Đăng ký tài khoản mới</h2>
          <p>Chọn vai trò bạn muốn đăng ký</p>
          <div className="role-buttons">
            <button className="role-button active">Ứng viên</button>
            <button className="role-button">Nhà tuyển dụng</button>
          </div>
          <form className="form-dang-ky">
            <input type="text" {...register("tenDangNhap",{required:'Tên đăng nhập không được để trống'})} placeholder="Tên đăng nhập"/>
            <input type="email" placeholder="Gmail"  {...register("gmail",{required:'Gmail không được để trống'})} />
            <input type="password" placeholder="Mật khẩu" {...register("MatKhau",{required:'Mật khẩu  không được để trống'})} />

            {/*onChange xử lí so sánh mật khẩu  */}
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              required=""
            />

            {/* disable nút đăng ký cho tới khi check nút này? */}
            <div className="checkbox-container">
              <input type="checkbox" id="terms" required="" />
              <label htmlFor="terms">
                Tôi đồng ý với các điều khoản dịch vụ
              </label>
            </div>
            <button type="submit" className="signup-button">
              Đăng ký
            </button>
          </form>
          <div className="login-link">
            <p>
              Bạn đã có tài khoản? <a href="#">Đăng nhập</a>
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
