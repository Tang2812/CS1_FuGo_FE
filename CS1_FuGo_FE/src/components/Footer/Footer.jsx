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
          Our company always tries our best to help you get closer to your
          dream. Contact us now to get the best job.
        </p>
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
          <h5>Company</h5>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Mobile</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li>
              <a href="#">Why choose us?</a>
            </li>
            <li>
              <a href="#">Partner with us</a>
            </li>
            <li>
              <a href="#">FAQ's</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Meet Us</h5>
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
