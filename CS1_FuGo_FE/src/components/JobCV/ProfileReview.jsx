import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { columnsReviewed } from "../../utils/JobCVHelper";

const ProfileReview = () => {
  const [listCV, setListCV] = useState([]);
  const [depLoading, setDepLoading] = useState(false);
  useEffect(() => {
    const fetchListCV = async () => {
      setDepLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/partners/job/review"
        );
        console.log(response);

        if (response.data.success) {
          let sno = 1;
          const data = await response.data.data.map((cv) => ({
            _id: cv._id,
            sno: sno++,
            name: cv.job_cv_id.fullName,
            status: cv.status,
            date: new Date(cv.updatedAt).toLocaleDateString(),
          }));
          
          setListCV(data);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setDepLoading(false);
      }
    };
    fetchListCV();
  }, []);
  return (
    <>
      {depLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="p-5">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Danh sách kiểm duyệt</h3>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Tên ứng viên"
              className="px-4 py-0.5 rounded border"
            />
          </div>
          <div className="mt-5">
            <DataTable columns={columnsReviewed} data={listCV}  pagination />
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileReview;
