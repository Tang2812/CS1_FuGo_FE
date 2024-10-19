import tagHeader from "../../../assets/img/tagImg.jpg";
import "./HomePageNews.scss";
const HomePageNews = () => {
    return (
        <div className="homePageNews-container">
            <h1 className="text-xl font-medium flex justify-start">
                Tin tức xuất khẩu lao động - du học
            </h1>
            <div className="homePageNews-content grid grid-cols-3">
                <div className="content-tag">
                    <div className="content-tag-header">
                        <div className="tag-header-img ml-3">
                            <img src={tagHeader} alt="" />
                        </div>
                        <div className="tag-header ml-3">
                            <p className="tag-header-title">Vệ sinh tòa nhà</p>
                            <p className="tag-header-date">3/10/2024</p>
                        </div>
                    </div>
                    <div className="tag-content mt-3 ml-3">
                        <p>Vệ sinh tòa nhà, văn phòng, sân bay tại các thành phố lớn</p>
                    </div>
                </div>

                <div className="content-tag">
                    <div className="content-tag-header">
                        <div className="tag-header-img ml-3">
                            <img src={tagHeader} alt="" />
                        </div>
                        <div className="tag-header ml-3">
                            <p className="tag-header-title">Vệ sinh tòa nhà</p>
                            <p className="tag-header-date">3/10/2024</p>
                        </div>
                    </div>
                    <div className="tag-content mt-3 ml-3">
                        <p>Vệ sinh tòa nhà, văn phòng, sân bay tại các thành phố lớn</p>
                    </div>
                </div>

                <div className="content-tag">
                    <div className="content-tag-header">
                        <div className="tag-header-img ml-3">
                            <img src={tagHeader} alt="" />
                        </div>
                        <div className="tag-header ml-3">
                            <p className="tag-header-title">Vệ sinh tòa nhà</p>
                            <p className="tag-header-date">3/10/2024</p>
                        </div>
                    </div>
                    <div className="tag-content mt-3 ml-3">
                        <p>Vệ sinh tòa nhà, văn phòng, sân bay tại các thành phố lớn</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageNews;