import { useNavigate } from "react-router-dom";

export const columns = [
  {
    name: "STT",
    selector: (row) => row.sno,
    sortable: true,
    grow: 1,
  },
  {
    name: "Tên công việc",
    selector: (row) => row.job_name,
    sortable: true,
    grow: 1,
  },
  {
    name: "Xem chi tiết",
    selector: (row) => row.action,
    // center: true,
    grow: 1,
  },
];

export const columnsCV = [
  {
    name: "STT",
    selector: (row) => row.sno,
    sortable: true,
    grow: 1,
  },
  {
    name: "Tên ứng viên",
    selector: (row) => row.name,
    sortable: true,
    grow: 1,
  },
  {
    name: "Ngày nộp",
    selector: (row) => row.date,
    sortable: true,
    grow: 1,
  },
  {
    name: "Xem chi tiết",
    selector: (row) => row.action,
    // center: true,
    grow: 1,
  },
];

export const columnsReviewed = [
  {
    name: "STT",
    selector: (row) => row.sno,
    sortable: true,
    grow: 1,
  },
  {
    name: "Tên ứng viên",
    selector: (row) => row.name,
    sortable: true,
    grow: 1,
  },
  {
    name: "Tình trạng",
    selector: (row) => row.status,
    cell: (row) => (
      <span
        style={{
          color: row.status === "Từ chối" ? "red" : row.status === "Chấp nhận" ? "green" : "inherit",
          fontWeight: row.status === "Từ chối" || row.status === "Chấp nhận" ? "bold" : "normal",
        }}
      >
        {row.status}
      </span>
    ),
    grow: 1,
  },
  {
    name: "Ngày duyệt",
    selector: (row) => row.date,
    grow: 1,
  }
];

export const JobCVButtons = ({ Id }) => {
  const navigate = useNavigate();
  return (
    <div className="flex space-x-3">
      <button
        className="px-3 py-1 bg-teal-600 text-white rounded"
        onClick={() => {
          navigate(`/partner/job/listCV/${Id}`);
        }}
      >
        Danh sách ứng tuyển
      </button>
    </div>
  );
};

export const ViewCVButtons = ({ Id }) => {
  const navigate = useNavigate();
  return (
    <div className="flex space-x-3">
      <button
        className="px-3 py-1 bg-teal-600 text-white rounded"
        onClick={() => {
          navigate(`/partner/job/listCV/detail/${Id}`);
        }}
      >
        Xem
      </button>
    </div>
  );
};
