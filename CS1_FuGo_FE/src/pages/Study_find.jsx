import { useEffect, useState } from 'react';
import '../stylesheet/find_jobs.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { get } from 'react-hook-form';
import ReactPaginate from 'react-paginate';

const Study_find = () => {

    const [jobs, setJobs] = useState([]);
    const [keyWord, setKeyWord] = useState("");
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();

    const fetchData = (page) => {
        return axios.get(`http://localhost:3000/api/v1/jobs?page=${page}`);
    }

    const fetchJob = async (page) => {
        try {
            const response = await fetchData(page);

            console.log("Response", response.data.data)
            setJobs(response?.data?.data);

            console.log("Jobs" + jobs);
            setTotalPages(Math.ceil(response?.data?.jobCount / 8));
        } catch (error) {
            if (error.response && !error.response.data.success) {
                alert(error.response.data.error);
            }
        }
    };

    useEffect(() => {
        fetchJob(0);
    }, []);

    const handlePageClick = (event) => {
        fetchJob(+event.selected);
    }

    return (

        <>
            <section className="hero">
                <img
                    src="/src/img/banner3.png"
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
                            <img src="/src/img/work_avt.png" alt="" />
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
                                    <img src="/src/img/address.svg" alt="icon dia chi" />
                                    <p>{job.country}</p>
                                </div>
                                <div className="job-card__info">
                                    {/* Deadline */}
                                    <img src="/src/img/time.svg" alt="icon thoi gian" />
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
                    <div className="pagination">
                        <ReactPaginate
                            nextLabel="Next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={totalPages}
                            previousLabel="< Previous"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                </div>
            </main>
        </>

    )
};

export default Study_find;