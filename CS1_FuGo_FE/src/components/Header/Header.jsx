const Header = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>FuGo - Header</title>
      <link rel="stylesheet" href="/src/stylesheet/header.css" />
      <header>
        <nav>
          <div className="logo">
            <a href="/"><img src="/src/img/logo.png" alt="FuGo" /></a>
          </div>
          <ul>
            <li>
              <a href="/" className="font-semibold hover:text-blue-700">Trang chủ</a>
            </li>
            <li>
              <a href="#" className="font-semibold hover:text-blue-700">Lịch sử</a>
            </li>
            <li>
              <a href="/find-jobs" className="font-semibold hover:text-blue-700">Việc làm</a>
            </li>
            <li>
              <a href="/find-jobs" className="font-semibold hover:text-blue-700">Du học</a>
            </li>
            <li>
              <a href="/news" className="font-semibold hover:text-blue-700">Tin tức</a>
            </li>
            <li>
              <a href="#" className="font-semibold hover:text-blue-700">Hỗ trợ</a>
            </li>
            <li>
              <a href="#" className="font-semibold hover:text-blue-700">Chia sẻ</a>
            </li>
            <li>
              <a href="#" className="font-semibold hover:text-blue-700">Quản lí CV</a>
            </li>
          </ul>
          {/* <div className="user-controls">
            <img src="/src/img/Notification - Bell.png" alt="Notification" />
            <img
              src="/src/img/avatar.png"
              alt="User profile"
              className="user-avatar"
            />
          </div> */}

          <div className="login-signup flex gap-4 font-semibold items-center">
            <a href="/login" className="login__btn hover:text-blue-700">Đăng nhập</a>
            <span className="text-xl">/</span>
            <a href="/register" className="signup__btn hover:text-blue-700">Đăng ký</a>
          </div>
        </nav>
      </header>
    </>

  );
};

export default Header;
