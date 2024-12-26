import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { columns, JobCVButtons } from "../../utils/JobCVHelper";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
const ViewListJob = () => {
  const [listJob, setListJob] = useState([]);
  const [depLoading, setDepLoading] = useState(false);
  const [auth, setAuth] = useAuth();
  const partnerIdRef = useRef(null); // Tạo biến lưu giá trị tạm

  useEffect(() => {
    partnerIdRef.current = auth.user._id; // Lưu giá trị ngay lập tức vào ref
  }, []);

  useEffect(() => {
    const fetchListJob = async () => {
      setDepLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/partners/job/view",
          { partnerId: partnerIdRef.current }
        );

        if (response.data.success) {
          let sno = 1;
          const data = await response.data.data.map((job) => ({
            _id: job._id,
            sno: sno++,
            job_name: job.title,
            action: <JobCVButtons Id={job._id} />,
          }));
          setListJob(data);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setDepLoading(false);
      }
    };
    fetchListJob();
  }, []);

  return (
    <>
      {depLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="p-5">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Quản lí công việc</h3>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Tên công việc"
              className="px-4 py-0.5 rounded border"
            />
            <Link
              to="/partner/add-department"
              className="px-4 py-1 bg-teal-600 rounded text-white"
            >
              Thêm công việc mới
            </Link>
          </div>
          <div className="mt-5">
            <DataTable columns={columns} data={listJob} pagination />
          </div>
        </div>
      )}
    </>
  );
};

export default ViewListJob;
