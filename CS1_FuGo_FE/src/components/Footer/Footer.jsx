const Footer = () => {
  return (
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FuGo - Đăng ký tài khoản mới</title>
        <link rel="stylesheet" href="/src/stylesheet/footer.css" />
        <footer className="bg-white text-gray-800 py-8 px-4">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="company-info">
              <div className="logo-footer flex items-center mb-4">
                <img src="/src/img/logo.png" alt="FuGo" className="h-12 w-12 mr-2" />
                <label className="logo-name text-2xl font-bold">Fugo</label>
              </div>
              <p className="mb-2">
                Công ty của chúng tôi luôn cố gắng đem đến cho bạn những công việc,
                những lựa chọn du học lí tưởng nhất.
              </p>
              <p className="mb-4">Hãy bắt đầu giấc mơ của bạn ngay hôm nay!!!</p>
              <div className="social-icons flex space-x-4">
                <img src="/src/img/facebook.png" alt="facebook icon" className="h-8 w-8" />
                <img src="/src/img/twiter.png" alt="twitter icon" className="h-8 w-8" />
                <img src="/src/img/instagram.png" alt="instagram icon" className="h-8 w-8" />
                <img src="/src/img/youtube.png" alt="youtube icon" className="h-8 w-8" />
              </div>
            </div>
            <div className="footer-links">
              <div className="mb-4 md:mb-0">
                <h5 className="text-xl font-bold mb-2">Công ty</h5>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-500">Về chúng tôi</a></li>
                  <li><a href="#" className="hover:text-blue-500">Sự nghiệp</a></li>
                  <li><a href="#" className="hover:text-blue-500">Điện thoại</a></li>
                  <li><a href="#" className="hover:text-blue-500">Blog</a></li>
                </ul>
              </div>
              <div className="mb-4 md:mb-0">
                <h5 className="text-xl font-bold mb-2">Liên hệ</h5>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-500">Tại sao lại chọn chúng tôi</a></li>
                  <li><a href="#" className="hover:text-blue-500">Hợp tác với chúng tôi</a></li>
                  <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className="contact-info">
              <h5 className="text-xl font-bold mb-2">Gặp chúng tôi</h5>
              <p className="mb-2">0376363141</p>
              <p className="mb-2">info@traviog.com</p>
              <p>205, R Street, New York BD23200</p>
            </div>
          </div>
        </footer>
      </>
  )
};

export default Footer;
