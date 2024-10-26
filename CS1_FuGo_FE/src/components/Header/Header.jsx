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
          <a href="#">Trang chủ</a>
        </li>
        <li>
          <a href="#">Lịch sử</a>
        </li>
        <li>
          <a href="#">Việc làm</a>
        </li>
        <li>
          <a href="#">Tin tức</a>
        </li>
        <li>
          <a href="#">Hỗ trợ</a>
        </li>
        <li>
          <a href="#">Chia sẻ</a>
        </li>
        <li>
          <a href="#">Quản lí CV</a>
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
