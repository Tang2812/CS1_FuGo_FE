import logo from "../../assets/img/logo.png";
import banner from "../../assets/img/banner.png";
import "./Login.scss";


const Login = () => {
    return (
        <div className="login-container">
            <div className="form-section">
                <a href="/">
                    <img src={logo} alt="FuGo Logo" className="logo" />
                </a>
                <h2 className="text-3xl font-bold">Đăng nhập</h2>
                <div className="role-buttons">
                    <button className="role-button active">Ứng viên</button>
                    <button className="role-button">Nhà tuyển dụng</button>
                </div>
                <form className="form-dang-nhap">
                    <input type="text" placeholder="Tên đăng nhập" required />
                    <input type="password" placeholder="Mật khẩu" required />
                    <button type="submit" className="login-button">Đăng nhập</button>
                </form>
                <div className="signup-link">
                    <p>Bạn chưa có tài khoản? <a href="/signup">Đăng kí</a></p>
                </div>
            </div>
            <div className="image-section">
                <img src={banner} alt="banner" />
            </div>
        </div>
    );
};

export default Login;