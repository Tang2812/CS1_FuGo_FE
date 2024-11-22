import React from 'react'
import { Link } from 'react-router-dom'
import DataTable from "react-data-table-component";
const ViewListJobCV = () => {
  return (
    <div className="p-5">
    <div className="text-center">
      <h3 className="text-2xl font-bold">Quản lí công việc</h3>
    </div>
    <div className="flex justify-between items-center">
      <input
        type="text"
        placeholder="Search By Name"
        className="px-4 py-0.5 rounded border"
       
      />
      <Link
        to="/admin-dashboard/add-department"
        className="px-4 py-1 bg-teal-600 rounded text-white"
      >
        Thêm công việc mới
      </Link>
    </div>
    <div className="mt-5">
      <DataTable  pagination />
    </div>
  </div>
  )
}

export default ViewListJobCV