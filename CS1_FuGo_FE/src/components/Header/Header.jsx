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
import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {

    const [userImg, setUserImg] = useState(null);
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        toast.success("Đăng xuất thành công");
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        navigate("/login");
    };

    // Fetch user profile data from the backend
    useEffect(() => {
        const authData = JSON.parse(localStorage.getItem("auth"));
            if (authData && authData.user && authData.user.user_img) {
                setUserImg(authData.user.user_img);  // Lấy ảnh từ localStorage trước
            } else {
                setUserImg("/src/img/logo.png");
            }

        const fetchProfileData = async () => {
            try {
                const authData = JSON.parse(localStorage.getItem("auth"));
                if (!authData || !authData.user || !authData.token) {
                    toast.warning("Không tìm thấy thông tin xác thực người dùng");
                    return;
                }
                const userId = authData.user._id; // Get _id from user
                const token = authData.token;

                const response = await axios.get(
                    `http://localhost:3000/api/v1/users/${userId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log("API Response:", response.data);

                if (response.data && response.data.success) {
                    const userData = response.data.data;
                    // console.log(userData.user_img);
                    setUserImg(userData.user_img);
                    const updateAuthData = {
                        ...authData,
                        user: {
                            ...authData.user,
                            user_img: userData.user_img,
                        }
                    };
                    localStorage.setItem("auth", JSON.stringify(updateAuthData));
                }
                // console.log(userImg);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };
        fetchProfileData();
    }, []);

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
                        <label className="logo-name">Fugo</label>
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
                        {auth.user && (
                        <li>
                            <Link to="/list-cv" className="font-semibold hover:text-blue-700">
                                Quản lí CV
                            </Link>
                        </li>
                    )}
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
                                    src={userImg}
                                    alt="User profile"
                                    className="user-avatar"
                                />
                            </button>
                            <>
                                {/* avt function */}
                                <div className="header__list-property">
                                    <div className="property__primary">
                                        <Link to="/profile" className="property__choice">
                                            <img src="/src/img/icon_personal.svg" alt="Thông tin cá nhân" />
                                            <span>Thông tin cá nhân</span>
                                        </Link>
                                        <Link to="#" className="property__choice">
                                            <AiFillTag />
                                            <span>Liên kết tài khoản</span>
                                        </Link>
                                        <Link to="#" className="property__choice">
                                            <AiOutlineAudit />
                                            <span>Chỉnh sửa trang cá nhân</span>
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
                                        <button className="btn btn--outline property__btn">Đổi tài khoản</button>
                                        <button className="btn btn--outline property__btn" onClick={handleLogout}>Đăng
                                            Xuất
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <>
                                        <label htmlFor="nav-mobile-input" className="header-right__nav-mobile">
                                            <img src="/src/img/nav_mobile.svg" alt="nav mobile icon" />
                                        </label>
                                        <input
                                            hidden
                                            type="checkbox"
                                            className="nav__input"
                                            id="nav-mobile-input"
                                        />
                                        <label htmlFor="nav-mobile-input" className="nav__overlay" />
                                        <nav className="nav-mobile">
                                            <label htmlFor="nav-mobile-input" className="x-icon">
                                                <img src="/src/img/x_icon.svg" alt="x-icon" />
                                            </label>
                                            <div className="nav-account__avt">
                                                <img
                                                    src={userImg}
                                                    alt=""
                                                    className="nav-mobile__avt"
                                                />
                                                <span className="nav-mobile__name-acount">Tan DVN</span>
                                            </div>

                                            <div className="container-account-function-nav">
                                                <ul className="nav-mobile__list">
                                                    <li>
                                                        <Link to="#"
                                                            className="text--base font-primary nav-mobile__link">
                                                            Trang chủ
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#"
                                                            className="text--base font-primary nav-mobile__link">
                                                            Lịch sử
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#"
                                                            className="text--base font-primary nav-mobile__link">
                                                            Việc làm
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#"
                                                            className="text--base font-primary nav-mobile__link">
                                                            Du học
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#"
                                                            className="text--base font-primary nav-mobile__link">
                                                            tin tức
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#"
                                                            className="text--base font-primary nav-mobile__link">
                                                            Hỗ trợ
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#"
                                                            className="text--base font-primary nav-mobile__link">
                                                            Chia sẻ
                                                        </Link>
                                                        <Link to="#"
                                                            className="text--base font-primary nav-mobile__link">
                                                            Quản lí CV
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="property__list-fc">
                                                    <button className="btn btn--outline property__btn">Đổi tài khoản
                                                    </button>
                                                    <button className="btn btn--outline property__btn"
                                                        onClick={handleLogout}>Đăng Xuất
                                                    </button>
                                                </div>
                                            </div>

                                        </nav>
                                    </>
                                </div>
                            </>
                        </div>
                    ) : (
                        <div className="login-signup flex gap-4 font-semibold items-center">
                            <Link
                                to="/login"
                                className="login__btn hover:text-blue-700 border-2 border-blue-500 rounded-[30px] px-4 py-2"
                            >
                                Đăng nhập
                            </Link>
                            <span className="text-xl">/</span>
                            <Link
                                to="/register"
                                className="signup__btn hover:text-blue-700 border-2 border-blue-500 rounded-[30px] px-4 py-2"
                            >
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
