import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalImage from "react-modal-image";
const ViewDetailCV = () => {
  const { id } = useParams();
  const [candidate, setCandidate] = useState(null);
  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/partners/job/view/detail/candidate",
          { cvId: id }
        );
        console.log(response.data.data.cv_img);
        if (response.data.success) {
          setCandidate(response.data.data);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };
    fetchCandidate();
  }, []);
  return (
    <>
      {candidate ? (
        <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Thông tin chi tiết
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ModalImage
                small={`http://localhost:3000/${candidate.cv_img}`} // Đường dẫn ảnh nhỏ
                large={`http://localhost:3000/${candidate.cv_img}`} // Đường dẫn ảnh lớn
                alt="Candidate CV"
                className="rounded-md border w-72"
              />
            </div>
            <div>
              <div className="flex  space-x-3 mb-5">
                <p className="text-lg font-bold">Họ tên: </p>
                <p className="text-lg ">{candidate.fullName}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Email: </p>
                <p className="text-lg">{candidate.email}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">SĐT: </p>
                <p className="text-lg">{candidate.phone}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Ngày ứng tuyển: </p>
                <p className="text-lg">
                  {new Date(candidate.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Giới tính: </p>
                <p className="text-lg">{candidate.gender}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Trình độ: </p>
                <p className="text-lg">{candidate.education}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Ngoại ngữ: </p>
                <p className="text-lg">{candidate.language}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Mô tả về bản thân: </p>
                <p className="text-lg">{candidate.bio}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ViewDetailCV;
