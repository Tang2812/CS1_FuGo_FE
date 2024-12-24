import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import axios from "axios";
import {toast} from 'react-toastify';

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
    const navigate = useNavigate();

    const sendEmail = async (mail) => {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/auth/password/email',mail);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    const handleSendEmail = async (e) => {
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
        try {

            sendEmail(email)
        } catch (error) {
            console.log(error);
        }

        toast.info("Vui lòng kiểm tra email để xác nhận");
        // toast.info(email);
        // navigate("/")
    }

    return (
        <>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>FuGo - Quên mật khẩu</title>
            <link rel="stylesheet" href="/src/stylesheet/forgot_password.css"/>
            <div className="container">
                <div className="form-section">
                    <div className="logo-login">
                        <img src="/src/img/logo.png" alt="FuGo Logo" className="mb-5"/>
                        <label className="logo-name-login">Fugo</label>
                    </div>
                    <h2 className="text-xl font-semibold">Quên mật khẩu</h2>


                    <form className="form-dang-ky" onSubmit={(e) => handleSendEmail(e)}>
                        <input type="email" aria-label="Email" placeholder="Email"
                               onChange={(event) => setEmail(event.target.value)} value={email}/>
                        <button type="submit" className="login-button">
                            Gửi
                        </button>
                    </form>


                    <div className="signup-link">
                        <p>
                            Trở lại <a href="/login">Đăng nhập</a>
                        </p>
                    </div>
                </div>
                <div className="image-section">
                    <img src="/src/img/banner.png" alt="banner"/>
                </div>
            </div>
        </>
    );
};

export default ForgotPasword;
