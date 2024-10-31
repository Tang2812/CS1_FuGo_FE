import partnerImg from "../../img/anh_cong_viec.png";

const HomePagePartners = () => {
    return (
        <div className="homePagePartners-container mx-6 pb-4 pt-2">
            <h1 className="text-lg font-semibold ml-16">Top đối tác Du học - XKLĐ</h1>
            <div className="partner-content grid grid-cols-6">
                <div className="partner-tag">
                    <a href="#">
                        <img src={partnerImg} alt="" />
                    </a>
                </div>
                <div className="partner-tag">
                    <a href="#">
                        <img src={partnerImg} alt="" />
                    </a>
                </div>
                <div className="partner-tag">
                    <a href="#">
                        <img src={partnerImg} alt="" />
                    </a>
                </div>
                <div className="partner-tag">
                    <a href="#">
                        <img src={partnerImg} alt="" />
                    </a>
                </div>
                <div className="partner-tag">
                    <a href="#">
                        <img src={partnerImg} alt="" />
                    </a>
                </div>
                <div className="partner-tag">
                    <a href="#">
                        <img src={partnerImg} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomePagePartners;