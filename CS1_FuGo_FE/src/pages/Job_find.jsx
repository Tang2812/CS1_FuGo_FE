import { useEffect, useState } from 'react';
import '../stylesheet/tim_kiem.css'
import { useNavigate } from 'react-router-dom';
const Job_find = () => {

    const { jobs, setJobs } = useState([]);
    const [keyWord, setKeyWord] = useState("");
    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        getAllJobs();
    }, [], keyWord);

    const getAllJobs = async () => {
        // const response = await CustomerService.getCustomers(keyWord);
        // setCustomers(response.content);
        // setTotalPages(response.totalPages);
    };

    return (

        <>
            <section className="hero">
                <img
                    src="/src/img/phông.png"
                    alt="section image"
                    className="section__background"
                />
            </section>
            <main className="search-results">
                <div className="search__header">
                    <h1>Kết quả tìm kiếm</h1>
                    <div className="input__box">
                        <input
                            type="text"
                            className="input__string"
                            placeholder="nhập thông tin bạn muốn tìm kiếm"
                        />
                    </div>
                    <div className="filters">
                        <select className="filter">
                            <option>Quốc gia</option>
                        </select>
                        <select className="filter">
                            <option>Mức lương</option>
                        </select>
                        <select className="filter">
                            <option>Học vấn</option>
                        </select>
                        <select className="filter">
                            <option>Ngành nghề</option>
                        </select>
                        <select className="filter">
                            <option>Kinh nghiệm</option>
                        </select>
                    </div>
                </div>
                <div className="job-list">
                    {/* loop for list jobs */}
                    {jobs?.map((job) => (
                        <div className="job-card">
                            {/* image jobs */}
                            <img src="/src/img/anh_cong_viec.png" alt="" />
                            <div className="job-card__content">
                                {/* name job */}
                                <h3>{job.ten_viec_lam}</h3>
                                <div className="job-card__info">
                                    {/*Salary  */}
                                    <img src="/src/img/incon_money.svg" alt="icon tien" />
                                    <p>{job.luong}</p>
                                </div>
                                <div className="job-card__info">
                                    {/* Country */}
                                    <img src="/src/img/dia_chi.svg" alt="icon dia chi" />
                                    <p>{job.dia_chi}</p>
                                </div>
                                <div className="job-card__info">
                                    {/* Deadline */}
                                    <img src="/src/img/thoi_gian.svg" alt="icon thoi gian" />
                                    <p>Hạn cuối: {job.thoi_gian}</p>
                                </div>
                                <div className="card__fc">
                                    <button className="btn--outline">Xem chi tiết</button>
                                    <button className="btn--outline">Ứng tuyển</button>
                                </div>
                            </div>
                        </div>
                    )

                    )}

                    {/* Repeat this structure for each job listing */}
                    <div className="job-card">
                        <img src="/src/img/anh_cong_viec.png" alt="" />
                        <div className="job-card__content">
                            <h3>Lắp ráp linh kiện điện tử</h3>
                            <div className="job-card__info">
                                <img src="/src/img/incon_money.svg" alt="icon tien" />
                                <p>25-30 triệu</p>
                            </div>
                            <div className="job-card__info">
                                <img src="/src/img/dia_chi.svg" alt="icon dia chi" />
                                <p>NAGASAKI</p>
                            </div>
                            <div className="job-card__info">
                                <img src="/src/img/thoi_gian.svg" alt="icon thoi gian" />
                                <p>Hạn cuối: 06/09/2025</p>
                            </div>
                            <div className="card__fc">
                                <button className="btn--outline">Xem chi tiết</button>
                                <button className="btn--outline">Ứng tuyển</button>
                            </div>
                        </div>
                    </div>
                    <div className="job-card">
                        <img src="/src/img/anh_cong_viec.png" alt="" />
                        <div className="job-card__content">
                            <h3>Lắp ráp linh kiện điện tử</h3>
                            <div className="job-card__info">
                                <img src="/src/img/incon_money.svg" alt="icon tien" />
                                <p>25-30 triệu</p>
                            </div>
                            <div className="job-card__info">
                                <img src="/src/img/dia_chi.svg" alt="icon dia chi" />
                                <p>NAGASAKI</p>
                            </div>
                            <div className="job-card__info">
                                <img src="/src/img/thoi_gian.svg" alt="icon thoi gian" />
                                <p>Hạn cuối: 06/09/2025</p>
                            </div>
                            <div className="card__fc">
                                <button className="btn--outline">Xem chi tiết</button>
                                <button className="btn--outline">Ứng tuyển</button>
                            </div>
                        </div>
                    </div>
                    <div className="job-card">
                        <img src="/src/img/anh_cong_viec.png" alt="" />
                        <div className="job-card__content">
                            <h3>Lắp ráp linh kiện điện tử</h3>
                            <div className="job-card__info">
                                <img src="/src/img/incon_money.svg" alt="icon tien" />
                                <p>25-30 triệu</p>
                            </div>
                            <div className="job-card__info">
                                <img src="/src/img/dia_chi.svg" alt="icon dia chi" />
                                <p>NAGASAKI</p>
                            </div>
                            <div className="job-card__info">
                                <img src="/src/img/thoi_gian.svg" alt="icon thoi gian" />
                                <p>Hạn cuối: 06/09/2025</p>
                            </div>
                            <div className="card__fc">
                                <button className="btn--outline">Xem chi tiết</button>
                                <button className="btn--outline">Ứng tuyển</button>
                            </div>
                        </div>
                    </div>
                    <div className="job-card">
                        <img src="/src/img/anh_cong_viec.png" alt="" />
                        <div className="job-card__content">
                            <h3>Lắp ráp linh kiện điện tử</h3>
                            <div className="job-card__info">
                                <img src="/src/img/incon_money.svg" alt="icon tien" />
                                <p>25-30 triệu</p>
                            </div>
                            <div className="job-card__info">
                                <img src="/src/img/dia_chi.svg" alt="icon dia chi" />
                                <p>NAGASAKI</p>
                            </div>
                            <div className="job-card__info">
                                <img src="/src/img/thoi_gian.svg" alt="icon thoi gian" />
                                <p>Hạn cuối: 06/09/2025</p>
                            </div>
                            <div className="card__fc">
                                <button className="btn--outline">Xem chi tiết</button>
                                <button className="btn--outline">Ứng tuyển</button>
                            </div>
                        </div>
                    </div>
                    <div className="job-card">
                        <img src="/src/img/anh_cong_viec.png" alt="" />
                        <div className="job-card__content">
                            <h3>Lắp ráp linh kiện điện tử</h3>
                            <div className="job-card__info">
                                <img src="/src/img/incon_money.svg" alt="icon tien" />
                                <p>25-30 triệu</p>
                            </div>
                            <div className="job-card__info">
                                <img src="/src/img/dia_chi.svg" alt="icon dia chi" />
                                <p>NAGASAKI</p>
                            </div>
                            <div className="job-card__info">
                                <img src="/src/img/thoi_gian.svg" alt="icon thoi gian" />
                                <p>Hạn cuối: 06/09/2025</p>
                            </div>
                            <div className="card__fc">
                                <button className="btn--outline">Xem chi tiết</button>
                                <button className="btn--outline">Ứng tuyển</button>
                            </div>
                        </div>
                    </div>
                    <div className="job-card">
                        <img src="/src/img/anh_cong_viec.png" alt="" />
                        <div className="job-card__content">
                            <h3>Lắp ráp linh kiện điện tử</h3>
                            <div className="job-card__info">
                                <img src="/src/img/incon_money.svg" alt="icon tien" />
                                <p>25-30 triệu</p>
                            </div>
                            <div className="job-card__info">
                                <img src="/src/img/dia_chi.svg" alt="icon dia chi" />
                                <p>NAGASAKI</p>
                            </div>
                            <div className="job-card__info">
                                <img src="/src/img/thoi_gian.svg" alt="icon thoi gian" />
                                <p>Hạn cuối: 06/09/2025</p>
                            </div>
                            <div className="card__fc">
                                <button className="btn--outline">Xem chi tiết</button>
                                <button className="btn--outline">Ứng tuyển</button>
                            </div>
                        </div>
                    </div>
                    <div className="job-card">
                        <img src="/src/img/anh_cong_viec.png" alt="" />
                        <div className="job-card__content">
                            <h3>Lắp ráp linh kiện điện tử</h3>
                            <div className="job-card__info">
                                <img src="/src/img/incon_money.svg" alt="icon tien" />
                                <p>25-30 triệu</p>
                            </div>
                            <div className="job-card__info">
                                <img src="/src/img/dia_chi.svg" alt="icon dia chi" />
                                <p>NAGASAKI</p>
                            </div>
                            <div className="job-card__info">
                                <img src="/src/img/thoi_gian.svg" alt="icon thoi gian" />
                                <p>Hạn cuối: 06/09/2025</p>
                            </div>
                            <div className="card__fc">
                                <button className="btn--outline">Xem chi tiết</button>
                                <button className="btn--outline">Ứng tuyển</button>
                            </div>
                        </div>
                    </div>
                    <div className="job-card">
                        <img src="/src/img/anh_cong_viec.png" alt="" />
                        <div className="job-card__content">
                            <h3>Lắp ráp linh kiện điện tử</h3>
                            <div className="job-card__info">
                                <img src="/src/img/incon_money.svg" alt="icon tien" />
                                <p>25-30 triệu</p>
                            </div>
                            <div className="job-card__info">
                                <img src="/src/img/dia_chi.svg" alt="icon dia chi" />
                                <p>NAGASAKI</p>
                            </div>
                            <div className="job-card__info">
                                <img src="/src/img/thoi_gian.svg" alt="icon thoi gian" />
                                <p>Hạn cuối: 06/09/2025</p>
                            </div>
                            <div className="card__fc">
                                <button className="btn--outline">Xem chi tiết</button>
                                <button className="btn--outline">Ứng tuyển</button>
                            </div>
                        </div>
                    </div>
                    {/* More job cards... */}
                </div>
                <div className="pagination">
                    <button>&lt;</button>
                    <button>&gt;</button>
                </div>
            </main>
        </>

    )
};

export default Job_find;