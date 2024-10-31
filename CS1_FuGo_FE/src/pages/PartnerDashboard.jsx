import React from 'react'
import PartnerSidebar from '../components/Dashboard/PartnerSidebar'
import Navbar from '../components/Dashboard/Navbar'
import { Outlet } from 'react-router-dom'

const PartnerDashboard = () => {
  return (
    <div className="flex">
    <PartnerSidebar />
    <div className="flex-1 ml-64 bg-gray-100 h-screen">
      <Navbar/>
      <Outlet/>
    </div>
  </div>
  )
}

export default PartnerDashboard