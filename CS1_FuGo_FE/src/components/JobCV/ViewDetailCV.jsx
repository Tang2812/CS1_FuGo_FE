import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ModalImage from "react-modal-image";
import { toast } from "react-toastify";

const Modal = ({
  showModal,
  setShowModal,
  emailData,
  handleReview,
  handleChange,
}) => {
  if (!showModal) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <form className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md z-50">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Thư phản hồi
        </h2>
        <div className="text-lg font-semibold text-gray-700 mb-2 block">
          <label>Tiêu đề</label>
        </div>
        <div>
          <input
            name="title"
            className="w-full p-2 border rounded-md mb-4"
            type="text"
            placeholder="Tiêu đề email"
            value={emailData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="text-lg font-semibold text-gray-700 mb-2 block">
          <label>Nội dung</label>
        </div>
        <textarea
          className="w-full p-2 border rounded-md mb-4"
          rows="4"
          placeholder="Viết lời nhắn của bạn ở đây..."
          onChange={handleChange}
          value={emailData.text}
          name="text"
          required
        ></textarea>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
            onClick={() => setShowModal(false)}
          >
            Đóng
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            onClick={(e) => handleReview(e, "Chấp nhận")}
          >
            Gửi
          </button>
        </div>
      </form>
    </div>
  );
};

const ViewDetailCV = () => {
  const { id } = useParams();
  const [candidate, setCandidate] = useState(null);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [emailData, setEmailData] = useState({
    to: "",
    title: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({
      ...prevData,
      [name]: value,
      to: candidate.job_cv_id.email,
    }));
  };

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/partners/job/view/detail/candidate",
          { cvId: id }
        );

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

  const handleReview = async (e, action) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:3000/api/v1/partners/job/view/detail/candidate/review",
        { cvId: id, status: action }
      );
      axios.post(
        "http://localhost:3000/api/v1/partners/job/review/send-email",
        emailData
      );
      console.log(emailData);
      console.log(candidate);

      if (response.data.success) {
        navigate("/partner/job/review");
        toast.success("Bạn đã duyệt thành công.");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };
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
                small={`http://localhost:3000/${candidate.job_cv_id.cv_img}`} // Đường dẫn ảnh nhỏ
                large={`http://localhost:3000/${candidate.job_cv_id.cv_img}`} // Đường dẫn ảnh lớn
                alt="Candidate CV"
                className="rounded-md border w-72"
              />
            </div>
            <div>
              <div className="flex  space-x-3 mb-5">
                <p className="text-lg font-bold">Họ tên: </p>
                <p className="text-lg ">{candidate.job_cv_id.fullName}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Email: </p>
                <p className="text-lg">{candidate.job_cv_id.email}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">SĐT: </p>
                <p className="text-lg">{candidate.job_cv_id.phone}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Ngày ứng tuyển: </p>
                <p className="text-lg">
                  {new Date(
                    candidate.job_cv_id.created_at
                  ).toLocaleDateString()}
                </p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Giới tính: </p>
                <p className="text-lg">{candidate.job_cv_id.gender}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Trình độ: </p>
                <p className="text-lg">{candidate.job_cv_id.education}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Ngoại ngữ: </p>
                <p className="text-lg">{candidate.job_cv_id.language}</p>
              </div>
              <div className="flex flex-col  mb-5">
                <p className="text-lg font-bold">Mô tả về bản thân: </p>
                <p className="text-lg">{candidate.job_cv_id.bio}</p>
              </div>
              {candidate.status === "Đang duyệt" ? (
                <div>
                  <button
                    className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    onClick={() => setShowModal(true)}
                  >
                    Chấp nhận
                  </button>
                  <button
                    className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 ml-4"
                    onClick={(e) => handleReview(e, "Từ chối")}
                  >
                    Từ chối
                  </button>
                </div>
              ) : null}
              <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                emailData={emailData}
                handleReview={handleReview}
                handleChange={handleChange}
              />
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
