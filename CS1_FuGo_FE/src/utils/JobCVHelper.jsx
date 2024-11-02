import axios from "axios";
import { useNavigate } from "react-router-dom";

export const columns = [
  {
    name: "S No",
    selector: (row) => row.sno,
    sortable: true,
  },
  {
    name: "Job name",
    selector: (row) => row.dep_name,
    sortable: true,
    width: "130px"
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];

export const JobCVButtons = ({ Id }) => {
 
  const navigate = useNavigate();
  return (
    <div className="flex space-x-3">
      <button
        className="px-3 py-1 bg-teal-600 text-white"
        onClick={() => {
          navigate(`/partner/${Id}`);
        }}
      >
        Edit
      </button>
     
    </div>
  );
};
