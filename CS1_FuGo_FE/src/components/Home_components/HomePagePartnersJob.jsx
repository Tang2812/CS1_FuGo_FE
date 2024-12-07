import partnerImg from "../../img/work_avt.png";

const HomePagePartners = () => {
    return (
        <div className="homePagePartners-container mx-6 pb-4 pt-2">
            <h1 className="text-lg font-semibold ml-16">Top đối tác xuất khẩu lao động</h1>
            <div className="partner-content grid grid-cols-12">
                <div className="partner-tag col-span-6 sm:col-span-4 lg:col-span-2">
                    <a href="#">
                        <img src={partnerImg} alt="" />
                    </a>
                </div>
                <div className="partner-tag col-span-6 sm:col-span-4 lg:col-span-2">
                    <a href="#">
                        <img src={partnerImg} alt="" />
                    </a>
                </div>
                <div className="partner-tag col-span-6 sm:col-span-4 lg:col-span-2">
                    <a href="#">
                        <img src={partnerImg} alt="" />
                    </a>
                </div>
                <div className="partner-tag col-span-6 sm:col-span-4 lg:col-span-2">
                    <a href="#">
                        <img src={partnerImg} alt="" />
                    </a>
                </div>
                <div className="partner-tag col-span-6 sm:col-span-4 lg:col-span-2">
                    <a href="#">
                        <img src={partnerImg} alt="" />
                    </a>
                </div>
                <div className="partner-tag col-span-6 sm:col-span-4 lg:col-span-2">
                    <a href="#">
                        <img src={partnerImg} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomePagePartners;