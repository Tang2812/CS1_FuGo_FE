import { Link } from "react-router-dom";

const Header = () => {
  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>FuGo - Đăng ký tài khoản mới</title>
  <link rel="stylesheet" href="/src/stylesheet/header.css" />
  <header>
    <nav>
      <div className="logo">
        <img src="/src/img/logo.png" alt="FuGo" />
      </div>
      <ul>
        <li>
          <Link to="/home">Trang chủ</Link>
        </li>
        <li>
          <Link to="/">Lịch sử</Link>
        </li>
        <li>
          <Link to="/">Việc làm</Link>
        </li>
        <li>
          <Link to="/news">Tin tức</Link>
        </li>
        <li>
          <Link to="/">Hỗ trợ</Link>
        </li>
        <li>
          <Link to="/">Chia sẻ</Link>
        </li>
        <li>
          <Link to="/">Quản lí CV</Link>
        </li>
      </ul>
      <div className="user-controls">
        <img src="/src/img/Notification - Bell.png" alt="Notification" />
        <img
          src="/src/img/avatar.png"
          alt="User profile"
          className="user-avatar"
        />
      </div>
    </nav>
  </header>
</>

  );
};

export default Header;
