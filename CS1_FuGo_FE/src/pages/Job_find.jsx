import { useEffect, useState } from "react";
import "../stylesheet/find_jobs.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { get } from "react-hook-form";
import ReactPaginate from 'react-paginate';
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


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "salary") {
      const [min, max] = value.split("-"); // Split value into min and max
      setConditions((prevState) => ({
        ...prevState,
        minSalary: min || "",
        maxSalary: max || "",
      }));
    } else {
      setConditions((prevState) => ({ ...prevState, [name]: value }));
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
  }

  const fetchJob = async (page) => {
    try {
      const response = await fetchData(page);
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
              name="title"
              type="text"
              value={conditions.title}
              className="input__string"
              placeholder="Nhập thông tin bạn muốn tìm kiếm"
              onChange={handleChange}
            />
          </div>
          <div className="filters">
            <select
              value={conditions.country}
              name="country"
              className="filter"
              onChange={handleChange}
            >
              <option value="">Quốc gia</option>
              <option value="Đài Loan">Đài Loan</option>
              <option value="Nhật Bản">Nhật Bản</option>
              <option value="Hàn Quốc">Hàn Quốc</option>
              <option value="USA">Mỹ</option>
            </select>
            <select
              value={conditions.salary}
              name="salary"
              className="filter"
              onChange={handleChange}
            >
              <option value="">Mức lương</option>
              <option value="10000000-15000000">10-15 triệu</option>
              <option value="15000000-20000000">15-20 triệu</option>
              <option value="25000000-30000000">25-30 triệu</option>
              <option value="30000000-35000000">30-35 triệu</option>
              <option value="35000000-50000000">30-50 triệu</option>
            </select>
            <select
              value={conditions.educationalLevel}
              name="educationalLevel"
              className="filter"
              onChange={handleChange}
            >
              <option value="">Học vấn</option>
              <option value="THPT">THPT</option>
              <option value="Cao đẳng">Cao đẳng</option>
              <option value="Đại học">Đại học</option>
            </select>
            <select
              value={conditions.profession}
              name="profession"
              className="filter"
              onChange={handleChange}
            >
              <option value="">Ngành nghề</option>
              <option value="Hàn">Hàn</option>
              <option value="Lắp ráp">Lắp ráp</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Data Analyst">Data Analyst</option>
            </select>
            <select
              value={conditions.experience}
              name="experience"
              className="filter"
              onChange={handleChange}
            >
              <option value="">Kinh nghiệm</option>
              <option value="0">Không yêu cầu</option>
              <option value="2">2 năm</option>
              <option value="3">3 năm</option>
              <option value="4">4 năm</option>
              <option value="5">5 năm</option>
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
                <h2><b>{job.title}</b></h2>
                <div className="job-card__info">
                  {/*Salary  */}
                  <img src="/src/img/incon_money.svg" alt="icon tien" />
                  <p>
                    {job.minSalary} ~ {job.maxSalary}
                  </p>
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
                  <button className="btn--outline" onClick={() => navigate(`/jobs/${job._id}`)}>Xem chi tiết</button>
                  <button className="btn--outline" onClick={() => navigate(`/application/job/${job._id}`)}>Ứng tuyển</button>
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