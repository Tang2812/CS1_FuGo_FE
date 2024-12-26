import { useEffect, useState } from 'react';
import '../stylesheet/find_jobs.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { FaHome, FaRegClock } from "react-icons/fa";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";

const Study_find = () => {

    const [study, setStudy] = useState([]);
    const [keyWord, setKeyWord] = useState("");
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();

    const fetchData = (page) => {
        return axios.get(`http://localhost:3000/api/v1/study?page=${page}`);
    }

    const fetchStudy = async (page) => {
        try {
            const response = await fetchData(page);
            // console.log("Response", response.data.data);
            setStudy(response?.data?.data);
            setTotalPages(Math.ceil(response?.data?.studyCount / 8));
        } catch (error) {
            if (error.response && !error.response.data.success) {
                alert(error.response.data.error);
            }
        }
    };

    useEffect(() => {
        fetchStudy(0);
    }, []);

    const handlePageClick = (event) => {
        fetchStudy(+event.selected);
    };

    // console.log("study: ", study);

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
                    <div className="filters grid grid-cols-10">
                        <select className="filter md:col-span-2 col-span-3">
                            <option>Quốc gia</option>
                        </select>
                        <select
                            // value={conditions.educationalLevel}
                            name="duration"
                            className="filter md:col-span-2 col-span-3"
                        // onChange={handleChange}
                        >
                            <option value="">Thời gian</option>
                            <option value="2 năm">2 năm</option>
                            <option value="3 năm">3 năm</option>
                            <option value="4 năm">4 năm</option>
                            <option value="5 năm">5 năm</option>
                        </select>
                        <select className="filter md:col-span-2 col-span-3">
                            <option>Học vấn</option>
                        </select>
                        <select
                            // value={conditions.educationalLevel}
                            name="program"
                            className="filter md:col-span-2 col-span-3"
                        // onChange={handleChange}
                        >
                            <option value="">Chương trình</option>
                            <option value="Thạc sĩ">Thạc sĩ</option>
                            <option value="Cử nhân">Cử nhân</option>
                            <option value="Tiến Sĩ">Tiến Sĩ</option>
                        </select>
                        <select
                            // value={conditions.educationalLevel}
                            name="language"
                            className="filter md:col-span-2 col-span-3"
                        // onChange={handleChange}
                        >
                            <option value="">Ngôn ngữ</option>
                            <option value="Toeic">Toeic</option>
                            <option value="Ielts">Ielts</option>
                            <option value="Japanese">Japanese</option>
                        </select>
                    </div>
                </div>
                <div className="job-list grid grid-cols-12">
                    {/* loop for list study */}
                    {study?.map((study, index) => (
                        <div key={index} className="job-card xl:col-span-3 lg:col-span-4 md:col-span-5 sm:col-span-6 col-span-9">
                            {/* image study */}
                            <img src="/src/img/work_avt.png" alt="" />
                            <div className="job-card__content">
                                {/* name school */}
                                <h2 className='font-bold'>{study.title}</h2>
                                <div className="job-card__info flex items-center">
                                    {/*Salary  */}
                                    {/* <img src="/src/img/incon_money.svg" alt="icon tien" /> */}
                                    <FaHome className='text-xl' />
                                    <p>{study.location}</p>
                                </div>
                                <div className="job-card__info flex items-center">
                                    {/* Country */}
                                    {/* <img src="/src/img/address.svg" alt="icon dia chi" /> */}
                                    <FaMagnifyingGlassLocation className='text-xl' />
                                    <p>{study.country}</p>
                                </div>
                                <div className="job-card__info flex items-center">
                                    {/* Deadline */}
                                    {/* <img src="/src/img/time.svg" alt="icon thoi gian" /> */}
                                    <FaRegClock className='text-xl' />
                                    <p> {study.duration}</p>
                                </div>
                                <div className="card__fc mt-3">
                                    <button className="btn--outline text-nowrap md:leading-4 md:py-[10px] md:px-4 sm:leading-3 sm:py-[8px] sm:px-[12px]"
                                        onClick={() => navigate(`/study/${study._id}`)}
                                    >Xem chi tiết</button>
                                    <button className="btn--outline text-nowrap md:leading-4 md:py-[10px] md:px-4 sm:leading-3 sm:py-[8px] sm:px-[12px]"
                                        onClick={() => navigate(`/application/study/${study._id}`)}
                                    >Ứng tuyển</button>
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