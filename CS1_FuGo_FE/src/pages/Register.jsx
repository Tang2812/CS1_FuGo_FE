
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
  // const { idUser, setIdUser } = useState;
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    console.log(data)
    try {
      // navigate(`/home`)
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
          <form className="form-dang-ky" onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder="Gmail"  {...register("email",{required:'Gmail không được để trống'})} />
            {errors.email && <p>This field is required</p>}
            <input type="password" placeholder="Mật khẩu" {...register("password",{required:'Mật khẩu  không được để trống'})} />
            {errors.password && <p>This field is required</p>}

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
