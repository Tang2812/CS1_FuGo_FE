import userReviewAvatar from "../../../assets/img/userReviewAvatar.jpg";
import "./HomeReview.scss";

const HomeReview = () => {
    return (
        <div className="homeReview-container">
            <h1 className="homeReview-title">
                Reviews
            </h1>
            <div className="reviews-contents grid grid-cols-3">
                <div className="review-tag">
                    <div className="tag-header">
                        <img src={userReviewAvatar} className="tag-header-img" alt="" />
                        <div className="tag-header-info">
                            <p className="tag-header-name">Đinh Viết Nhật Tân</p>
                            <p className="tag-header-work">Du học CNTT - Nhật Bản</p>
                        </div>
                    </div>
                    <div className="tag-content">
                        <p>
                            Hiện tại em rất hài lòng với sự lựa chọn của mình. Nhờ có Fugo - một nền tảng đáng tin cậy,
                            em đã có thể tìm thấy trường đại học phù hợp với mình để có thể tiếp bước đam mê
                        </p>
                    </div>
                </div>

                <div className="review-tag">
                    <div className="tag-header">
                        <img src={userReviewAvatar} className="tag-header-img" alt="" />
                        <div className="tag-header-info">
                            <p className="tag-header-name">Đinh Viết Nhật Tân</p>
                            <p className="tag-header-work">Du học CNTT - Nhật Bản</p>
                        </div>
                    </div>
                    <div className="tag-content">
                        <p>
                            Hiện tại em rất hài lòng với sự lựa chọn của mình. Nhờ có Fugo - một nền tảng đáng tin cậy,
                            em đã có thể tìm thấy trường đại học phù hợp với mình để có thể tiếp bước đam mê
                        </p>
                    </div>
                </div>

                <div className="review-tag">
                    <div className="tag-header">
                        <img src={userReviewAvatar} className="tag-header-img" alt="" />
                        <div className="tag-header-info">
                            <p className="tag-header-name">Đinh Viết Nhật Tân</p>
                            <p className="tag-header-work">Du học CNTT - Nhật Bản</p>
                        </div>
                    </div>
                    <div className="tag-content">
                        <p>
                            Hiện tại em rất hài lòng với sự lựa chọn của mình. Nhờ có Fugo - một nền tảng đáng tin cậy,
                            em đã có thể tìm thấy trường đại học phù hợp với mình để có thể tiếp bước đam mê
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeReview;