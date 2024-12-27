import {useEffect, useState} from "react";
import "../stylesheet/find_jobs.css";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {get} from "react-hook-form";
import ReactPaginate from "react-paginate";
import {
    countryOptions,
    educationOptions,
    experienceOptions,
    professionOptions,
    salaryOptions,
} from "../../data/jobOptions";

const Job_find = () => {
    const [jobs, setJobs] = useState([]);
    const [keyWord, setKeyWord] = useState("");
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();

    const [conditions, setConditions] = useState({
        title: "",
        country: "",
        minSalary: "",
        maxSalary: "",
        educationalLevel: "",
        profession: "",
        experience: "",
    });

    // State quản lý số lần click
    const [clickedJobs, setClickedJobs] = useState(() => {
        const savedClickedJobs = localStorage.getItem("clickedJobs");
        return savedClickedJobs ? JSON.parse(savedClickedJobs) : {};
    });

    // Xử lý khi click vào job - chỉ track không gửi dữ liệu
    const handleJobClick = (jobId) => {
        const updatedJobs = {...clickedJobs, [jobId]: (clickedJobs[jobId] || 0) + 1};
        setClickedJobs(updatedJobs);
        localStorage.setItem("clickedJobs", JSON.stringify(updatedJobs));
    };

    const handleJobClickAndNavigate = (jobId, navigate) => {
        handleJobClick(jobId);
        navigate(`/jobs/${jobId}`);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === "salary") {
            const [min, max] = value.split("-"); // Split value into min and max
            setConditions((prevState) => ({
                ...prevState,
                minSalary: min || "",
                maxSalary: max || "",
            }));
        } else {
            setConditions((prevState) => ({...prevState, [name]: value}));
        }
    };

    const handleSearch = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3000/api/v1/jobs/search/getJobBySearch",
                conditions
            );
            setJobs(response.data.data);
        } catch (error) {
            if (error.response && !error.response.data.success) {
                alert(error.response.data.error);
            }
        }
    };

    const fetchData = (page) => {
        return axios.get(`http://localhost:3000/api/v1/jobs?page=${page}`);
    };

    const fetchJob = async (page) => {
        try {
            const response = await fetchData(page);
            // let jobOfPage = response?.data?.data;
            // console.log("check res: ", jobOfPage);
            setJobs(response?.data?.data);
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

    useEffect(() => {
        handleSearch();
    }, [conditions]);

    const handlePageClick = (event) => {
        fetchJob(+event.selected);
        // console.log("+event.selected: ", +event.selected);
    };


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
                            name="title"
                            type="text"
                            value={conditions.title}
                            className="input__string"
                            placeholder="Nhập thông tin bạn muốn tìm kiếm"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="filters grid grid-cols-10">
                        <select
                            value={conditions.country}
                            name="country"
                            className="filter md:col-span-2 col-span-3"
                            onChange={handleChange}
                        >
                            {countryOptions.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                    className="max-h-48 overflow-auto"
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <select
                            value={conditions.salary}
                            name="salary"
                            className="filter md:col-span-2 col-span-3"
                            onChange={handleChange}
                        >
                            {salaryOptions.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                    className="max-h-48 overflow-auto"
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <select
                            value={conditions.educationalLevel}
                            name="educationalLevel"
                            className="filter md:col-span-2 col-span-3"
                            onChange={handleChange}
                        >
                            {educationOptions.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                    className="max-h-48 overflow-auto"
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <select
                            value={conditions.profession}
                            name="profession"
                            className="filter md:col-span-2 col-span-3"
                            onChange={handleChange}
                        >
                            {professionOptions.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                    className="max-h-48 overflow-auto"
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <select
                            value={conditions.experience}
                            name="experience"
                            className="filter md:col-span-2 col-span-3"
                            onChange={handleChange}
                        >
                            {experienceOptions.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                    className="max-h-48 overflow-auto"
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="job-list grid grid-cols-12">
                    {/* loop for list jobs */}
                    {jobs?.map((job, index) => (
                        <div
                            key={index}
                            className="job-card xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-9 flex flex-col"
                        >
                            {/* image jobs */}
                            <img
                                src={job.image}
                                alt=""
                                className="w-full h-auto max-h-[200px] object-cover object-center"
                            />
                            <div className="job-card__content flex-grow flex flex-col">
                                {/* name job */}
                                <h2>
                                    <b>{job.title}</b>
                                </h2>
                                <div className="job-card__info">
                                    {/*Salary  */}
                                    <img src="/src/img/incon_money.svg" alt="icon tien"/>
                                    <p>
                                        {job.minSalary} ~ {job.maxSalary}
                                    </p>
                                </div>
                                <div className="job-card__info">
                                    {/* Country */}
                                    <img src="/src/img/address.svg" alt="icon dia chi"/>
                                    <p>{job.country}</p>
                                </div>
                                <div className="job-card__info">
                                    {/* Deadline */}
                                    <img src="/src/img/time.svg" alt="icon thoi gian"/>
                                    <p> {job.jobStatus}</p>
                                </div>
                                <div className="card__fc mt-3 mt-auto">
                                    <button
                                        className="btn--outline text-nowrap md:leading-4 md:py-[10px] md:px-4 sm:leading-3 sm:py-[8px] sm:px-[12px]"
                                        onClick={() => handleJobClickAndNavigate(job._id, navigate)}> Xem chi tiết
                                    </button>
                                    <button
                                        className="btn--outline text-nowrap md:leading-4 md:py-[10px] md:px-4 sm:leading-3 sm:py-[8px] sm:px-[12px]"
                                        onClick={() => navigate(`/application/job/${job._id}`)}
                                    >
                                        Ứng tuyển
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Repeat this structure for each job listing */}

                    {/* More job cards... */}
                </div>
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
            </main>
        </>
    );
};

export default Job_find;
