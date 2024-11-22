const Footer = () => {
  return(

    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>FuGo - Đăng ký tài khoản mới</title>
  <link rel="stylesheet" href="/src/stylesheet/footer.css" />
  <footer>
    <div className="footer-content">
      <div className="company-info">
        <img src="/src/img/logo.png" alt="FuGo" />
        <p>
          Công ty của chúng tôi luôn cố gắng đem đến cho bạn
          những công việc,những lựa chọn du học lí tưởng nhất.
        </p>
        <p>Hãy bắt đầu giấc mơ của bạn ngay hôm nay!!!</p>
        <div className="social-icons">
          <img
            src="/src/img/facebook.png"
            alt="facebook icon"
            className="facebook"
          />
          <img
            src="/src/img/twiter.png"
            alt="twiter icon"
            className="twitter"
          />
          <img
            src="/src/img/instagram.png"
            alt="instagram icon"
            className="instagram"
          />
          <img
            src="/src/img/youtube.png"
            alt="youtube icon"
            className="youtube"
          />
        </div>
      </div>
      <div className="footer-links">
        <div>
          <h5>Công ty</h5>
          <ul>
            <li>
              <a href="#">Về chúng tôi</a>
            </li>
            <li>
              <a href="#">Sự nghiệp</a>
            </li>
            <li>
              <a href="#">Điện thoại</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Liên hệ</h5>
          <ul>
            <li>
              <a href="#">Tại sao lại chọn chúng tôi</a>
            </li>
            <li>
              <a href="#">Hợp tác với chúng tôi</a>
            </li>
            <li>
              <a href="#">FAQ's</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Gặp chúng tôi</h5>
          <p>0376363141</p>
          <p>info@traviog.com</p>
          <p>205, R Street, New York BD23200</p>
        </div>
      </div>
    </div>
  </footer>
</>

  )
  

};

export default Footer;
