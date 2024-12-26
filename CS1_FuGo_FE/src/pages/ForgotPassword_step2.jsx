import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';

export const ForgotPassword_step2 = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const navigate = useNavigate();

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmNewPassword) {
            toast.error("Mật khẩu xác nhận không khớp!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/api/v1/auth/password/reset", { newPassword });
            toast.success("Mật khẩu đã được thay đổi thành công!");
            navigate("/login");
        } catch (error) {
            console.error("Error resetting password:", error);
            toast.error("Lỗi khi thay đổi mật khẩu, vui lòng thử lại!");
        }
    }

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>FuGo - Quên mật khẩu</title>
            <link rel="stylesheet" href="/src/stylesheet/forgot_password.css" />
            <div className="container">
                <div className="form-section">
                    <div className="logo-login">
                        <img src="/src/img/logo.png" alt="FuGo Logo" className="mb-5" />
                        <label className="logo-name-login">Fugo</label>
                    </div>
                    <h2 className="text-xl font-semibold">Quên mật khẩu</h2>

                    <form className="form-dang-ky" onSubmit={handleResetPassword}>
                        <input type="password" aria-label="new password" placeholder="Mật khẩu mới"
                               onChange={(event) => setNewPassword(event.target.value)} value={newPassword} />
                        <input type="password" aria-label="confirm new password" placeholder="Xác nhận mật khẩu mới"
                               onChange={(event) => setConfirmNewPassword(event.target.value)}
                               value={confirmNewPassword} />
                        <button type="submit" className="login-button">
                            Xác nhận
                        </button>
                    </form>

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
}
