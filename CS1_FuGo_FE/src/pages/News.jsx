

const News = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>FuGo - Đăng ký tài khoản mới</title>
      <link rel="stylesheet" href="/src/stylesheet/news.css" />
      <main>
        <section className="hero">
          <img
            src="/src/img/banner3.png"
            alt="section image"
            className="section__background"
          />
        </section>
        <section className="content">
          <h2>TIN TỨC &amp; SỰ KIỆN</h2>
          <div className="news-grid">
            <div className="news-column">
              {/* Repeat this structure for each news item */}
              <article className="news-item">
                <img
                  src="/src/img/book_store.png"
                  alt="News image"
                  className="news-item__img"
                />
                <div className="news__content">
                  <h3>
                    <a href="/news-detail">3 Điều Cha Mẹ Bắt Buộc Ghi Nhớ Khi Có Con Đang Học Trung Học Phổ
                      Thông</a>
                  </h3>
                  <div className="news-meta">
                    <span className="date">05/01/2024</span>
                    <span className="views">338 views</span>
                  </div>
                  <p>
                    Cha mẹ luôn mong muốn con đạt được điều tốt nhất. Con càng lớn
                    nỗi lo cha mẹ ngày một tăng, nhất là khi con đang ở độ tuổi chập
                    chững vào đời tuổi 18. Vậy cha mẹ đã nắm được những nguyên tắc
                    giúp con thêm phần tự tin, đóng...
                  </p>
                </div>
              </article>
              <article className="news-item">
                <img
                  src="/src/img/book_store.png"
                  alt="News image"
                  className="news-item__img"
                />
                <div className="news__content">
                  <h3>
                    <a href="/news-detail">3 Điều Cha Mẹ Bắt Buộc Ghi Nhớ Khi Có Con Đang Học Trung Học Phổ
                      Thông</a>
                  </h3>
                  <div className="news-meta">
                    <span className="date">05/01/2024</span>
                    <span className="views">338 views</span>
                  </div>
                  <p>
                    Cha mẹ luôn mong muốn con đạt được điều tốt nhất. Con càng lớn
                    nỗi lo cha mẹ ngày một tăng, nhất là khi con đang ở độ tuổi chập
                    chững vào đời tuổi 18. Vậy cha mẹ đã nắm được những nguyên tắc
                    giúp con thêm phần tự tin, đóng...
                  </p>
                </div>
              </article>
              <article className="news-item">
                <img
                  src="/src/img/book_store.png"
                  alt="News image"
                  className="news-item__img"
                />
                <div className="news__content">
                  <h3>
                    <a href="/news-detail">3 Điều Cha Mẹ Bắt Buộc Ghi Nhớ Khi Có Con Đang Học Trung Học Phổ
                      Thông</a>
                  </h3>
                  <div className="news-meta">
                    <span className="date">05/01/2024</span>
                    <span className="views">338 views</span>
                  </div>
                  <p>
                    Cha mẹ luôn mong muốn con đạt được điều tốt nhất. Con càng lớn
                    nỗi lo cha mẹ ngày một tăng, nhất là khi con đang ở độ tuổi chập
                    chững vào đời tuổi 18. Vậy cha mẹ đã nắm được những nguyên tắc
                    giúp con thêm phần tự tin, đóng...
                  </p>
                </div>
              </article>
              <article className="news-item">
                <img
                  src="/src/img/book_store.png"
                  alt="News image"
                  className="news-item__img"
                />
                <div className="news__content">
                  <h3>
                    <a href="/news-detail">3 Điều Cha Mẹ Bắt Buộc Ghi Nhớ Khi Có Con Đang Học Trung Học Phổ
                      Thông</a>
                  </h3>
                  <div className="news-meta">
                    <span className="date">05/01/2024</span>
                    <span className="views">338 views</span>
                  </div>
                  <p>
                    Cha mẹ luôn mong muốn con đạt được điều tốt nhất. Con càng lớn
                    nỗi lo cha mẹ ngày một tăng, nhất là khi con đang ở độ tuổi chập
                    chững vào đời tuổi 18. Vậy cha mẹ đã nắm được những nguyên tắc
                    giúp con thêm phần tự tin, đóng...
                  </p>
                </div>
              </article>
              <article className="news-item">
                <img
                  src="/src/img/book_store.png"
                  alt="News image"
                  className="news-item__img"
                />
                <div className="news__content">
                  <h3>
                    <a href="/news-detail">3 Điều Cha Mẹ Bắt Buộc Ghi Nhớ Khi Có Con Đang Học Trung Học Phổ
                      Thông</a>
                  </h3>
                  <div className="news-meta">
                    <span className="date">05/01/2024</span>
                    <span className="views">338 views</span>
                  </div>
                  <p>
                    Cha mẹ luôn mong muốn con đạt được điều tốt nhất. Con càng lớn
                    nỗi lo cha mẹ ngày một tăng, nhất là khi con đang ở độ tuổi chập
                    chững vào đời tuổi 18. Vậy cha mẹ đã nắm được những nguyên tắc
                    giúp con thêm phần tự tin, đóng...
                  </p>
                </div>
              </article>
              {/* Repeat for other news items */}
            </div>
            <div className="sidebar">
              <div className="sidebar-buttons">
                <div className="sidebae-buttons__primary">
                  <button>Du học Đài Loan</button>
                  <button>Du học Nhật Bản</button>
                  <button>Du học Hàn Quốc</button>
                </div>
                <div className="sidebae-buttons__secondary">
                  <button>Du học Đài Loan</button>
                  <button>Du học Nhật Bản</button>
                  <button>Du học Hàn Quốc</button>
                </div>
                <div className="sidebar-content">
                  <h3>CẨM NANG DU HỌC</h3>
                  {/* Repeat this structure for each handbook item */}
                  <div className="handbook-item">
                    <img src="/src/img/study_abroad_handbook.png" alt="Handbook image" />
                    <p>
                      Workshop Du Học: Canada Và Úc - Lựa chọn Nào Có Lợi Hơn Cho Du
                      Học Sinh Việt...
                    </p>
                  </div>
                  <div className="handbook-item">
                    <img src="/src/img/study_abroad_handbook.png" alt="Handbook image" />
                    <p>
                      Workshop Du Học: Canada Và Úc - Lựa chọn Nào Có Lợi Hơn Cho Du
                      Học Sinh Việt...
                    </p>
                  </div>
                  <div className="handbook-item">
                    <img src="/src/img/study_abroad_handbook.png" alt="Handbook image" />
                    <p>
                      Workshop Du Học: Canada Và Úc - Lựa chọn Nào Có Lợi Hơn Cho Du
                      Học Sinh Việt...
                    </p>
                  </div>
                  <div className="handbook-item">
                    <img src="/src/img/study_abroad_handbook.png" alt="Handbook image" />
                    <p>
                      Workshop Du Học: Canada Và Úc - Lựa chọn Nào Có Lợi Hơn Cho Du
                      Học Sinh Việt...
                    </p>
                  </div>
                  <div className="handbook-item">
                    <img src="/src/img/study_abroad_handbook.png" alt="Handbook image" />
                    <p>
                      Workshop Du Học: Canada Và Úc - Lựa chọn Nào Có Lợi Hơn Cho Du
                      Học Sinh Việt...
                    </p>
                  </div>
                  {/* Repeat for other handbook items */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>


  )
}

export default News