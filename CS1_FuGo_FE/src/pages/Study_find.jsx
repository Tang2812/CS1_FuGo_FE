import { useEffect, useState } from 'react';
import '../stylesheet/tim_kiem.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { get } from 'react-hook-form';
const Study_find = () => {

    const [jobs, setJobs] = useState([]);
    const [keyWord, setKeyWord] = useState("");
    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/api/v1/jobs/"
                );

                console.log("Response", response.data.data)
                setJobs(response.data.data);

                console.log("Jobs" + jobs);
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.error);
                }
            }
        };
        fetchJob();

    }, []);


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
                    {jobs?.map((job, index) => (
                        <div key={index} className="job-card">
                            {/* image jobs */}
                            <img src="/src/img/anh_cong_viec.png" alt="" />
                            <div className="job-card__content">
                                {/* name job */}
                                <h2>{job.title}</h2>
                                <div className="job-card__info">
                                    {/*Salary  */}
                                    <img src="/src/img/incon_money.svg" alt="icon tien" />
                                    <p>{job.minSalary} ~ {job.maxSalary}</p>
                                </div>
                                <div className="job-card__info">
                                    {/* Country */}
                                    <img src="/src/img/dia_chi.svg" alt="icon dia chi" />
                                    <p>{job.country}</p>
                                </div>
                                <div className="job-card__info">
                                    {/* Deadline */}
                                    <img src="/src/img/thoi_gian.svg" alt="icon thoi gian" />
                                    <p> {job.jobStatus}</p>
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

export default Study_find;