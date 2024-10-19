import phong from "../../../assets/img/phong.png";
import hero_image from "../../../assets/img/hero-content.png";
import book from "../../../assets/img/book_store.png";
import camnangduhoc from "../../../assets/img/camnangduhoc.png";
import "./DetailNews.scss";

const DetailNews = () => {
    return (
        <div className="detailNews-container">
            <main>
                <section class="hero">
                    <img
                        src={phong}
                        alt="section image"
                        class="section__background"
                    />
                </section>

                <div class="content__container">
                    <section class="main-content">
                        <article>
                            <h2>3 Điều Cha Mẹ Bắt Buộc Ghi Nhớ Khi Có Con Đang Học Trung Học Phổ Thông</h2>
                            {/* <!-- Article content --> */}
                            <p class="content__info">08/07/2024 - 02:28 391 views</p>
                            <div class="line"></div>
                            <p>Cha mẹ luôn mong muốn con đạt được điều tốt nhất. Con càng lớn nỗi lo cha mẹ ngày một tăng, nhất là khi con đang ở độ tuổi chập chững vào đời_tuổi 18. Vậy cha mẹ đã nắm được những nguyên tắc giúp con thêm phần tự tin, đóng góp một phần vào việc xây dựng sự thành công của các con thân yêu hay chưa? Hãy cùng AMEC tìm hiểu 3 nguyên tắc vàng đảm bảo sự thành công của con tương lai nhé.</p>
                            <div class="hero__image">
                                <img src={hero_image} alt="" />
                            </div>

                            <p>Có những cha mẹ muốn tốt cho con cái mà vô tình bắt con làm theo ý mình. Ví dụ có cha mẹ làm doanh nhân, thì mong con học kinh doanh để kế nghiệp. Nhưng lại không biết rằng công việc con thực sự muốn làm là trở thành một người “gõ đầu trẻ”. Hoặc như cha mẹ làm bác sĩ và mong con sẽ theo nghề mình. Nhưng con lại có một khao khát trở thành một đầu bếp. <br />
                                Trong những trường hợp này, nếu không khéo léo gỡ mối tơ rối rắm, những mong muốn trái chiều, gượng ép, áp lực và gánh nặng từ bề trên đôi khi lại đem lại kết quả đáng buồn. Một cách hay nhất đó chính là cha mẹ nên đưa ra lời khuyên cho con. Chỉ rõ cho con biết điểm mạnh, điểm yếu khi con đến với lựa chọn A,B, hoặc C. Và hãy để con tự lựa chọn tương lai của con. Khi đó, con bạn sẽ không tiếc nuối và biết tự chịu trách nhiệm trước quyết định của chính mình.
                            </p>

                            <p><b> Học gì cũng được, nhưng ngoại ngữ là bắt buộc</b></p>
                            <p>Thời đại toàn cầu hóa, đi đâu người ta cũng yêu cầu ngoại ngữ. Ngay cả khi muốn ứng tuyển vào một vị trí bình thường như tiếp tân, phục vụ hoặc bán hàng thì nhà tuyển dụng cũng đòi hỏi ứng viên phải đạt được trình độ IELTS hay TOEFL nhất định. Vì thế cho nên, cha mẹ cần khuyến khích và hỗ trợ con trong việc học ngôn ngữ thứ 2-3. Cha mẹ nên nhớ rằng hiện nay càng sở hữu nhiều ngoại ngữ bao nhiêu, các con càng dễ tìm kiếm cơ hội và thành công bấy nhiêu.</p>
                            <p>Lấy ví dụ như tiếng Đức một ngôn ngữ nổi lên như cồn tại các điểm thành phố lớn. Người ta cố gắng sắp xếp thời gian để đi học để tìm kiếm cơ hội học tập miễn phí và định cư lâu dài tại Đức. Chính sách Đức đưa ra quá rõ ràng: chỉ cần biết tiếng (trình độ chỉ B1 thôi), là có việc làm và có lương ngay lập tức, mọi chi phí đào tạo và học phí đều được các tập đoàn hỗ trợ, miễn phí. Trong khi, thời gian để người bắt đầu chưa biết gì về tiếng đến trình độ B1 chỉ mất từ 7-8 tháng</p>
                        </article>
                        <div class="line"></div>
                    </section>

                    <aside>
                        <div class="sidebar">
                            <div class="sidebar-buttons">
                                <div class="sidebae-buttons__primary">
                                    <button>Du học Đài Loan</button>
                                    <button>Du học Nhật Bản</button>
                                    <button>Du học Hàn Quốc</button>
                                </div>
                                <div class="sidebae-buttons__secondary">
                                    <button>Du học Đài Loan</button>
                                    <button>Du học Nhật Bản</button>
                                    <button>Du học Hàn Quốc</button>
                                </div>
                                <div class="sidebar-content">
                                    <h3>CẨM NANG DU HỌC</h3>
                                    {/* <!-- Repeat this structure for each handbook item --> */}
                                    <div class="handbook-item">
                                        <img src={camnangduhoc} alt="Handbook image" />
                                        <p>
                                            Workshop Du Học: Canada Và Úc - Lựa chọn Nào Có Lợi Hơn Cho Du
                                            Học Sinh Việt...
                                        </p>
                                    </div>
                                    <div class="handbook-item">
                                        <img src={camnangduhoc} alt="Handbook image" />
                                        <p>
                                            Workshop Du Học: Canada Và Úc - Lựa chọn Nào Có Lợi Hơn Cho Du
                                            Học Sinh Việt...
                                        </p>
                                    </div>
                                    <div class="handbook-item">
                                        <img src={camnangduhoc} alt="Handbook image" />
                                        <p>
                                            Workshop Du Học: Canada Và Úc - Lựa chọn Nào Có Lợi Hơn Cho Du
                                            Học Sinh Việt...
                                        </p>
                                    </div>
                                    <div class="handbook-item">
                                        <img src={camnangduhoc} alt="Handbook image" />
                                        <p>
                                            Workshop Du Học: Canada Và Úc - Lựa chọn Nào Có Lợi Hơn Cho Du
                                            Học Sinh Việt...
                                        </p>
                                    </div>
                                    <div class="handbook-item">
                                        <img src={camnangduhoc} alt="Handbook image" />
                                        <p>
                                            Workshop Du Học: Canada Và Úc - Lựa chọn Nào Có Lợi Hơn Cho Du
                                            Học Sinh Việt...
                                        </p>
                                    </div>
                                    {/* <!-- Repeat for other handbook items --> */}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

            </main>
            <div class="quang-cao">
                <article class="quang-cao__news-item">
                    <img
                        src={book}
                        alt="News image"
                        class="news-item__img"
                    />
                    <div class="news__content">
                        <p>Workshop Du học: Canada Và Úc- Lựa Chọn Nào Có Lợi Hơn Cho Du Học Sinh...
                        </p>
                        <div class="news-meta">
                            <span class="date">05/01/2024</span>
                            <span class="views">338 views</span>
                        </div>
                    </div>
                </article>
                <article class="quang-cao__news-item">
                    <img
                        src={book}
                        alt="News image"
                        class="news-item__img"
                    />
                    <div class="news__content">
                        <p>Workshop Du học: Canada Và Úc- Lựa Chọn Nào Có Lợi Hơn Cho Du Học Sinh...
                        </p>
                        <div class="news-meta">
                            <span class="date">05/01/2024</span>
                            <span class="views">338 views</span>
                        </div>
                    </div>
                </article>
                <article class="quang-cao__news-item">
                    <img
                        src={book}
                        alt="News image"
                        class="news-item__img"
                    />
                    <div class="news__content">
                        <p>Workshop Du học: Canada Và Úc- Lựa Chọn Nào Có Lợi Hơn Cho Du Học Sinh...
                        </p>
                        <div class="news-meta">
                            <span class="date">05/01/2024</span>
                            <span class="views">338 views</span>
                        </div>
                    </div>
                </article>
                <article class="quang-cao__news-item">
                    <img
                        src={book}
                        alt="News image"
                        class="news-item__img"
                    />
                    <div class="news__content">
                        <p>Workshop Du học: Canada Và Úc- Lựa Chọn Nào Có Lợi Hơn Cho Du Học Sinh...
                        </p>
                        <div class="news-meta">
                            <span class="date">05/01/2024</span>
                            <span class="views">338 views</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default DetailNews;