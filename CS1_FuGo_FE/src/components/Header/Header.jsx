import logo from "../../assets/img/logo.png";
import notify_icon from "../../assets/img/header/avatar.png";
import user_avatar from "../../assets/img/header/Notification - Bell.png";
import "./Header.scss";

const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className="logo">
                        <a href="/">
                            <img src={logo} alt="FuGo" />
                        </a>
                    </div>
                    <ul>
                        <li><a href="/">Trang chủ</a></li>
                        <li><a href="#">Lịch sử</a></li>
                        <li><a href="#">Việc làm</a></li>
                        <li><a href="/news">Tin tức</a></li>
                        <li><a href="#">Hỗ trợ</a></li>
                        <li><a href="#">Chia sẻ</a></li>
                        <li><a href="#">Quản lí CV</a></li>
                    </ul>
                    {/* <div className="user-controls">
                        <img src={notify_icon} alt="Notification" className="notification" />
                        <img src={user_avatar} alt="User profile" className="user-avatar" />
                    </div> */}

                    <div className="login-signup">
                        <a href="/login">Đăng nhập</a>
                        <p>/</p>
                        <a href="/signup">Đăng kí</a>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;