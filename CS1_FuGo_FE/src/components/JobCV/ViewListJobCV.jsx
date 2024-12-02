import DataTable from "react-data-table-component";
import { columnsCV, ViewCVButtons } from "../../utils/JobCVHelper";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewListJobCV = () => {
  const [listCV, setListCV] = useState([]);
  const [depLoading, setDepLoading] = useState(false);
  const params = useParams();
  const jobId = params.id;

  useEffect(()=>{
    const fetchListCV = async () => {
      setDepLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/partners/job/view/detail",
          {jobId}
        );
       if(response.data.success){
        let sno = 1;
        const data = await response.data.data.map((cv) => ({
          _id: cv._id,
          sno: sno++,
          name: cv.fullName,
          date: new Date(cv.created_at).toLocaleDateString(),
          action: (
            <ViewCVButtons
              Id={cv._id}
            />
          ),
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
  }, [jobId])
  return (
    <>
      {depLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="p-5">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Danh sách CV ứng tuyển</h3>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Nhập tên ứng viên"
              className="px-4 py-0.5 rounded border"
            />
             <Link
              to="/admin-dashboard/add-department"
              className="px-4 py-1 bg-teal-600 rounded text-white"
            >
              Đã duyệt
            </Link>
          </div>
          <div className="mt-5">
            <DataTable columns={columnsCV} data={listCV} pagination />
          </div>
        </div>
      )}
    </>
  );
};

export default ViewListJobCV;
