const Header = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <div className="logo">
          <img src="/src/img/logo.png" alt="FuGo Logo" className="h-10" />
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Trang chủ
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Lịch sử
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Việc làm
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Tin tức
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Hỗ trợ
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Chia sẻ
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Quản lí CV
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <img
            src="/src/img/Notification - Bell.png"
            alt="Notification"
            className="h-6 w-6"
          />
          <img
            src="/src/img/avatar.png"
            alt="User profile"
            className="h-10 w-10 rounded-full"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
