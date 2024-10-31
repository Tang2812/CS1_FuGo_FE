import { NavLink } from "react-router-dom";

const PartnerSidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64">
      <div className="bg-teal-600 h-12 flex items-center justify-center">
        <h3 className="text-2xl text-center font-pacific">Employee MS</h3>
      </div>
      <div className="px-4">
        {/* isActive là 1 thuộc tính của NavLink kiểm tra xem đường dẫn của route có khớp với đường dẫn hiện tại không */}
        <NavLink
          to="/partner/jobCV-application"
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : ""
            } flex items-center space-x-4 py-2.5 px-4 rounded`
          }
          end
        >
          <span>Job CV</span>
        </NavLink>
        <NavLink
          to="/partner/studyAbroad-application"
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : ""
            } flex items-center space-x-4 py-2.5 px-4 rounded`
          }
          end
        >
          <span>Study Abroad CV</span>
        </NavLink>
        <NavLink
          to="/partner/create-job"
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : ""
            } flex items-center space-x-4 py-2.5 px-4 rounded`
          }
          end
        >
          <span>Create Job</span>
        </NavLink>
        <NavLink
          to="/partner/create-studyAbroad"
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : ""
            } flex items-center space-x-4 py-2.5 px-4 rounded`
          }
          end
        >
          <span>Create Study Abroad</span>
        </NavLink>
      </div>
    </div>
  );
};

export default PartnerSidebar;
