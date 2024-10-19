import logo from "../../assets/img/logo.png";
import banner from "../../assets/img/banner.png";
import "./Signup.scss";


const Signup = () => {
    return (
        <div className="signup-container">
            <div className="form-section">
                <a href="/">
                    <img src={logo} alt="FuGo Logo" className="logo" />
                </a>
                <h2>Đăng ký tài khoản mới</h2>
                <p>Chọn vai trò bạn muốn đăng ký</p>
                <div className="role-buttons">
                    <button className="role-button active">Ứng viên</button>
                    <button className="role-button">Nhà tuyển dụng</button>
                </div>
                <form className="form-dang-ky">
                    <input type="text" placeholder="Tên đăng nhập" required />
                    <input type="email" placeholder="Gmail" required />
                    <input type="password" placeholder="Mật khẩu" required />
                    <input type="password" placeholder="Nhập lại mật khẩu" required />
                    <div className="checkbox-container">
                        <input type="checkbox" id="terms" required />
                        <label for="terms">Tôi đồng ý với các điều khoản dịch vụ</label>
                    </div>
                    <button type="submit" className="signup-button">Đăng ký</button>
                </form>
                <div className="login-link">
                    <p>Bạn đã có tài khoản? <a href="/login">Đăng nhập</a></p>
                </div>
            </div>
            <div className="image-section">
                <img src={banner} alt="banner" />
            </div>
        </div>
    );
};

export default Signup;