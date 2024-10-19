import phong from "../../assets/img/phong.png";
import jobImg from "../../assets/img/anh_cong_viec.png";
import incon_money from "../../assets/svg/incon_money.svg";
import dia_chi from "../../assets/svg/dia_chi.svg";
import thoi_gian from "../../assets/svg/thoi_gian.svg";
import "./Search.scss";

const Search = () => {
    return (
        <div className="search-container">
            <section class="hero">
                <img
                    src={phong}
                    alt="section image"
                    class="section__background"
                />
            </section>
            <main class="search-results">
                <div class="search__header">
                    <h1 className="text-xl font-semibold">Kết quả tìm kiếm</h1>
                    <div class="input__box">
                        <input
                            type="text"
                            class="input__string"
                            placeholder="nhập thông tin bạn muốn tìm kiếm"
                        />
                    </div>
                    <div class="filters">
                        <select class="filter">
                            <option>Quốc gia</option>
                        </select>
                        <select class="filter">
                            <option>Mức lương</option>
                        </select>
                        <select class="filter">
                            <option>Học vấn</option>
                        </select>
                        <select class="filter">
                            <option>Ngành nghề</option>
                        </select>
                        <select class="filter">
                            <option>Kinh nghiệm</option>
                        </select>
                    </div>
                </div>

                <div class="job-list">
                    {/* <!-- Repeat this structure for each job listing --> */}
                    <div class="job-card">
                        <img src={jobImg} alt="" />
                        <div class="job-card__content">
                            <h3>Lắp ráp linh kiện điện tử</h3>
                            <div class="job-card__info">
                                <img src={incon_money} alt="icon tien" />
                                <p>25-30 triệu</p>
                            </div>
                            <div class="job-card__info">
                                <img src={dia_chi} alt="icon dia chi" />
                                <p>NAGASAKI</p>
                            </div>
                            <div class="job-card__info">
                                <img src={thoi_gian} alt="icon thoi gian" />
                                <p>Hạn cuối: 06/09/2025</p>
                            </div>
                            <div class="card__fc">
                                <button class="btn--outline">Xem chi tiết</button>
                                <button class="btn--outline">Ứng tuyển</button>
                            </div>
                        </div>

                    </div>
                    <div class="job-card">
                        <img src={jobImg} alt="" />
                        <div class="job-card__content">
                            <h3>Lắp ráp linh kiện điện tử</h3>
                            <div class="job-card__info">
                                <img src={incon_money} alt="icon tien" />
                                <p>25-30 triệu</p>
                            </div>
                            <div class="job-card__info">
                                <img src={dia_chi} alt="icon dia chi" />
                                <p>NAGASAKI</p>
                            </div>
                            <div class="job-card__info">
                                <img src={thoi_gian} alt="icon thoi gian" />
                                <p>Hạn cuối: 06/09/2025</p>
                            </div>
                            <div class="card__fc">
                                <button class="btn--outline">Xem chi tiết</button>
                                <button class="btn--outline">Ứng tuyển</button>
                            </div>
                        </div>

                    </div>
                    <div class="job-card">
                        <img src={jobImg} alt="" />
                        <div class="job-card__content">
                            <h3>Lắp ráp linh kiện điện tử</h3>
                            <div class="job-card__info">
                                <img src={incon_money} alt="icon tien" />
                                <p>25-30 triệu</p>
                            </div>
                            <div class="job-card__info">
                                <img src={dia_chi} alt="icon dia chi" />
                                <p>NAGASAKI</p>
                            </div>
                            <div class="job-card__info">
                                <img src={thoi_gian} alt="icon thoi gian" />
                                <p>Hạn cuối: 06/09/2025</p>
                            </div>
                            <div class="card__fc">
                                <button class="btn--outline">Xem chi tiết</button>
                                <button class="btn--outline">Ứng tuyển</button>
                            </div>
                        </div>

                    </div>
                    <div class="job-card">
                        <img src={jobImg} alt="" />
                        <div class="job-card__content">
                            <h3>Lắp ráp linh kiện điện tử</h3>
                            <div class="job-card__info">
                                <img src={incon_money} alt="icon tien" />
                                <p>25-30 triệu</p>
                            </div>
                            <div class="job-card__info">
                                <img src={dia_chi} alt="icon dia chi" />
                                <p>NAGASAKI</p>
                            </div>
                            <div class="job-card__info">
                                <img src={thoi_gian} alt="icon thoi gian" />
                                <p>Hạn cuối: 06/09/2025</p>
                            </div>
                            <div class="card__fc">
                                <button class="btn--outline">Xem chi tiết</button>
                                <button class="btn--outline">Ứng tuyển</button>
                            </div>
                        </div>

                    </div>
                    <div class="job-card">
                        <img src={jobImg} alt="" />
                        <div class="job-card__content">
                            <h3>Lắp ráp linh kiện điện tử</h3>
                            <div class="job-card__info">
                                <img src={incon_money} alt="icon tien" />
                                <p>25-30 triệu</p>
                            </div>
                            <div class="job-card__info">
                                <img src={dia_chi} alt="icon dia chi" />
                                <p>NAGASAKI</p>
                            </div>
                            <div class="job-card__info">
                                <img src={thoi_gian} alt="icon thoi gian" />
                                <p>Hạn cuối: 06/09/2025</p>
                            </div>
                            <div class="card__fc">
                                <button class="btn--outline">Xem chi tiết</button>
                                <button class="btn--outline">Ứng tuyển</button>
                            </div>
                        </div>

                    </div>
                    <div class="job-card">
                        <img src={jobImg} alt="" />
                        <div class="job-card__content">
                            <h3>Lắp ráp linh kiện điện tử</h3>
                            <div class="job-card__info">
                                <img src={incon_money} alt="icon tien" />
                                <p>25-30 triệu</p>
                            </div>
                            <div class="job-card__info">
                                <img src={dia_chi} alt="icon dia chi" />
                                <p>NAGASAKI</p>
                            </div>
                            <div class="job-card__info">
                                <img src={thoi_gian} alt="icon thoi gian" />
                                <p>Hạn cuối: 06/09/2025</p>
                            </div>
                            <div class="card__fc">
                                <button class="btn--outline">Xem chi tiết</button>
                                <button class="btn--outline">Ứng tuyển</button>
                            </div>
                        </div>

                    </div>
                    <div class="job-card">
                        <img src={jobImg} alt="" />
                        <div class="job-card__content">
                            <h3>Lắp ráp linh kiện điện tử</h3>
                            <div class="job-card__info">
                                <img src={incon_money} alt="icon tien" />
                                <p>25-30 triệu</p>
                            </div>
                            <div class="job-card__info">
                                <img src={dia_chi} alt="icon dia chi" />
                                <p>NAGASAKI</p>
                            </div>
                            <div class="job-card__info">
                                <img src={thoi_gian} alt="icon thoi gian" />
                                <p>Hạn cuối: 06/09/2025</p>
                            </div>
                            <div class="card__fc">
                                <button class="btn--outline">Xem chi tiết</button>
                                <button class="btn--outline">Ứng tuyển</button>
                            </div>
                        </div>

                    </div>
                    <div class="job-card">
                        <img src={jobImg} alt="" />
                        <div class="job-card__content">
                            <h3>Lắp ráp linh kiện điện tử</h3>
                            <div class="job-card__info">
                                <img src={incon_money} alt="icon tien" />
                                <p>25-30 triệu</p>
                            </div>
                            <div class="job-card__info">
                                <img src={dia_chi} alt="icon dia chi" />
                                <p>NAGASAKI</p>
                            </div>
                            <div class="job-card__info">
                                <img src={thoi_gian} alt="icon thoi gian" />
                                <p>Hạn cuối: 06/09/2025</p>
                            </div>
                            <div class="card__fc">
                                <button class="btn--outline">Xem chi tiết</button>
                                <button class="btn--outline">Ứng tuyển</button>
                            </div>
                        </div>

                    </div>
                    {/* <!-- More job cards... --> */}
                </div>

                <div class="pagination">
                    <button>&lt;</button>

                    <button>&gt;</button>
                </div>
            </main>
        </div>
    );
};

export default Search;