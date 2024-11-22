import partnerImg from "../../img/work_avt.png";

const HomePagePartners = () => {
    return (
        <div className="homePagePartners-container mx-6 pb-4 pt-2">
            <h1 className="text-lg font-semibold ml-16">Top đối tác xuất khẩu lao động</h1>
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