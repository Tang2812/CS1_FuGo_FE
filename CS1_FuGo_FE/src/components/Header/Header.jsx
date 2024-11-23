import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import {
  AiFillTag,
  AiFillTool,
  AiOutlineAudit,
  AiOutlineLock,
  AiOutlineMail,
  AiTwotoneWarning,
} from "react-icons/ai";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logout Successfully");
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>FuGo - Đăng ký tài khoản mới</title>
      <link rel="stylesheet" href="/src/stylesheet/header.css" />
      <header>
        <nav>
          <div className="logo">
            <Link to="/home">
              <img src="/src/img/logo.png" alt="FuGo" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/home" className="font-semibold hover:text-blue-700">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to="/" className="font-semibold hover:text-blue-700">
                Lịch sử
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="font-semibold hover:text-blue-700">
                Việc làm
              </Link>
            </li>
            <li>
              <Link to="/study" className="font-semibold hover:text-blue-700">
                Du học
              </Link>
            </li>
            <li>
              <Link to="/news" className="font-semibold hover:text-blue-700">
                Tin tức
              </Link>
            </li>
            <li>
              <Link to="/" className="font-semibold hover:text-blue-700">
                Hỗ trợ
              </Link>
            </li>
            <li>
              <Link to="/" className="font-semibold hover:text-blue-700">
                Chia sẻ
              </Link>
            </li>
            <li>
              <Link to="/list-cv" className="font-semibold hover:text-blue-700">
                Quản lí CV
              </Link>
            </li>
          </ul>
          {auth.user ? (
            <div className="user-controls">
              <button
                className=" header-right__notification"
                type="button"
                title="notification"
              >
                <img
                  src="/src/img/Notification - Bell.png"
                  alt="Notification"
                />
              </button>

              <div className="header__notification">
                <h2>Notification</h2>
                <div className="notification__container">
                  <div className="notification__message">
                    <AiOutlineMail size={50} />
                    <div className="message">
                      <span className="message__user-name">
                        Hồ sơ của bạn đã được duyệt!!!{" "}
                      </span>
                      <span className="message__content">
                        Công ty TNHH The King
                      </span>
                      <span className="message__time">1 phút trước</span>
                    </div>
                  </div>
                  <div className="notification__active"></div>
                </div>
                <div className="notification__container">
                  <div className="notification__message">
                    <AiTwotoneWarning size={50} />
                    <div className="message">
                      <span className="message__user-name">
                        Hồ sơ của bạn đã bị từ chối!!!
                      </span>
                      <span className="message__content">
                        Công ty dệt may kawashaki
                      </span>
                      <span className="message__time">30 phút trước</span>
                    </div>
                  </div>
                  <div className="notification__active"></div>
                </div>
              </div>

              <button
                className="header-right__avt-info"
                type="button"
                title="avt button"
              >
                <img
                  src="/src/img/avatar.png"
                  alt="User profile"
                  className="user-avatar"
                />
              </button>
              <>
                {/* avt function */}
                <div className="header__list-property">
                  <div className="property__primary">
                    <Link to="/profile" className="property__choice">
                      <img
                        src="/src/img/icon_ca_nhan.svg"
                        alt="Thông tin cá nhân"
                      />
                      <span>Thông tin cá nhân</span>
                    </Link>
                    <Link to="#" className="property__choice">
                      <AiFillTag />
                      <span>Liên kết tài khoản</span>
                    </Link>
                    <Link to="#" className="property__choice">
                      <AiOutlineAudit />
                      <span>Chỉnh sửa trang các nhân</span>
                    </Link>
                  </div>
                  <div className="property-line" />
                  <div className="property__primary">
                    <Link to="#" className="property__choice">
                      <AiFillTool />
                      <span>Cài đặt</span>
                    </Link>
                    <Link to="#" className="property__choice">
                      <AiOutlineLock />
                      <span>Đổi mật khẩu</span>
                    </Link>
                  </div>
                  <div className="property__list-fc">
                    <button className="btn btn--outline property__btn">
                      Đổi tài khoản
                    </button>
                    <button
                      className="btn btn--outline property__btn"
                      onClick={() => handleLogout()}
                    >
                      Đăng Xuất
                    </button>
                  </div>
                </div>
              </>
            </div>
          ) : (
            <div className="login-signup flex gap-4 font-semibold items-center">
              <Link to="/login" className="login__btn hover:text-blue-700">
                Đăng nhập
              </Link>
              <span className="text-xl">/</span>
              <Link to="/register" className="signup__btn hover:text-blue-700">
                Đăng ký
              </Link>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
