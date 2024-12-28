import { FaMedal, FaMoneyBillWave, FaClock } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import suggestTag from "../../img/tagImg.jpg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const HomeSuggest = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;
  const navigate = useNavigate();

  // State quản lý số lần click
  const [clickedJobs, setClickedJobs] = useState(() => {
    const savedClickedJobs = localStorage.getItem("clickedJobs");
    return savedClickedJobs ? JSON.parse(savedClickedJobs) : {};
  });

  // Xử lý khi click vào job - chỉ track không gửi dữ liệu
  const handleJobClick = (jobId) => {
    const updatedJobs = {
      ...clickedJobs,
      [jobId]: (clickedJobs[jobId] || 0) + 1,
    };
    setClickedJobs(updatedJobs);
    localStorage.setItem("clickedJobs", JSON.stringify(updatedJobs));
  };

  // Hàm gửi dữ liệu khi thoát
  const handleBeforeUnload = async (event) => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    if (!authData?.user?._id) {
      toast.warning("Bạn cần đăng nhập để dùng chức năng này!!!");
      return;
    }
    if (!authData?.user?._id || !localStorage.getItem("clickedJobs")) {
      console.log("id va click");
      return;
    }

    const userId = authData.user._id;
    const data = {
      selected_jobs: [],
      user_profile: [],
    };

    try {
      // Lấy thông tin user
      const userInfor = await axios.get(
        `http://localhost:3000/api/v1/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${authData.token}`,
          },
        }
      );
      console.log("user infor: ", userInfor);
      data.user_profile.push(userInfor.data.data);

      // Lấy job được click nhiều nhất
      const clickedJobsData = localStorage.getItem("clickedJobs");
      const parsedData = JSON.parse(clickedJobsData);
      const mostClickedJob = Object.entries(parsedData).reduce(
        (max, entry) => {
          const [jobId, clickCount] = entry;
          return clickCount > max.clickCount ? { jobId, clickCount } : max;
        },
        { jobId: null, clickCount: 0 }
      );

      const jobToRecommend = jobs.find(
        (job) => job._id === mostClickedJob.jobId
      );
      if (jobToRecommend) {
        data.selected_jobs.push(jobToRecommend);
      }
      console.log("data: ", data);
      // Gửi dữ liệu
      await axios.post(
        "http://localhost:3000/api/v1/jobsRecommend/insert",
        data
      );

      // Xóa dữ liệu click sau khi gửi thành công
      localStorage.removeItem("clickedJobs");
      setClickedJobs({});
    } catch (error) {
      console.error("Error sending data:", error);
      toast.warning("Bạn cần có thông tin cá nhân để sử dụng chức năng này");
    }
    navigate("/");
  };

  // Xử lý đăng xuất
  const handleLogout = async () => {
    await handleBeforeUnload(); // Gửi dữ liệu trước khi đăng xuất
  };

  // Fetch jobs data
  const getJobsFromRecommend = async () => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    if (!authData?.user?._id) {
      // navigate("/login");
      return;
    }

    try {
      // Lấy tất cả jobs
      const resAllJobs = await axios.get(
        "http://localhost:3000/api/v1/jobs/all",
        { headers: { Authorization: `Bearer ${authData.token}` } }
      );
      console.log("all job: ", resAllJobs);
      const allJobsData = resAllJobs.data.data;

      // Lấy jobs được recommend
      const response = await axios.get(
        `http://localhost:3000/api/v1/jobsRecommend/${authData.user._id}`
      );
      const dataReturn = response.data.jobsRecommend;
      console.log("recommend jobs: ", dataReturn);
      if (!dataReturn) {
        setJobs(allJobsData);
        return;
      }

      const parsedJobsRecommend = JSON.parse(dataReturn);
      const jobsArray = parsedJobsRecommend.jobs;
      const filteredJobs = allJobsData.filter((job) =>
        jobsArray.includes(job._id)
      );
      console.log(filteredJobs);
      setJobs(filteredJobs.length > 0 ? filteredJobs : allJobsData);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setJobs([]);
    }
  };

  // Initial data fetch
  useEffect(() => {
    getJobsFromRecommend();
  }, []);

  useEffect(() => {
    let timeoutId;
    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleBeforeUnload, 10 * 60 * 1000); // 10 minutes in milliseconds
    };
    const activityEvents = ["mousemove", "keypress", "scroll", "click"];
    activityEvents.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });
    resetTimer(); // Initialize timer when component mounts
    return () => {
      clearTimeout(timeoutId);
      activityEvents.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, [jobs]);

  // Pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="homeSuggest-container bg-[#F6F6F6] w-full pt-5 pr-[60px] pb-5 pl-[90px]">
      <div className="suggest-header flex justify-between mb-5">
        <div className="suggest-title-container flex gap-2">
          <FaMedal className="suggest-icon text-[#dbb313] text-[24px]" />
          <h1 className="suggest-title text-xl font-semibold">
            Công việc đề xuất
          </h1>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Đề Xuất công việc
        </button>
        <div className="suggest-all">
          <a href="/jobs" className="text-yellow-500">
            Xem tất cả &gt;
          </a>
        </div>
      </div>

      <motion.div
        className="suggest-content grid grid-cols-12"
        initial={{ x: -60 }}
        whileInView={{ x: 20, transition: { duration: 0.75 } }}
      >
        {currentJobs.map((job, index) => (
          <Link
            to={`/jobs/${job._id}`}
            key={index}
            className="suggest-tag bg-white shadow-2xl rounded-[10px] w-4/5 mb-5 hover:mt-[-4px] col-span-6 md:col-span-4 lg:col-span-3"
            onClick={() => handleJobClick(job._id)}
          >
            <img
              src={job.image ? job.image : suggestTag}
              alt=""
              className="tag-img rounded-tl-[10px] rounded-tr-[10px] w-fit"
            />
            <div className="tag-content p-2">
              <p className="text-lg font-semibold">{job.title}</p>
              <div className="flex gap-4 items-center">
                <FaMoneyBillWave className="suggest-salary-icon text-green-500" />
                <p>{job.maxSalary}</p>
              </div>
              <div className="flex gap-4 items-center">
                <MdPlace className="suggest-place-icon text-red-600" />
                <p>{job.location}</p>
              </div>
              <div className="flex gap-4 items-center">
                <FaClock className="suggest-due-icon text-blue-700" />
                <p>14/10/2024</p>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>

      {/* Pagination */}
      <div className="pagination flex justify-center mt-5">
        {Array.from(
          { length: Math.ceil(jobs.length / jobsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`pagination-button mx-1 px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>

      {/* Click Information */}
      {/*<div className="click-info mt-5">*/}
      {/*    <h2 className="font-semibold mb-2">Click Information:</h2>*/}
      {/*    <ul>*/}
      {/*        {Object.entries(clickedJobs).map(([jobId, clickCount]) => (*/}
      {/*            <li key={jobId}>*/}
      {/*                Job ID: {jobId}, Click Count: {clickCount}*/}
      {/*            </li>*/}
      {/*        ))}*/}
      {/*    </ul>*/}
      {/*</div>*/}
    </div>
  );
};

export default HomeSuggest;
