import React from "react";
import PartnerDashboard from "../pages/PartnerDashboard";
import ViewListJobCV from "../components/JobCV/ViewListJobCV";
import ViewListSudyAbroadCV from "../components/StudyCV/ViewListSudyAbroadCV";
import { Navigate, Route, Routes } from "react-router-dom";

const PartnerRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/partner" />} />
      <Route path="/home" element={<Navigate to="/partner" />} />
      <Route path="/partner" element={<PartnerDashboard />}>
        <Route path="/partner/jobCV-application" element={<ViewListJobCV />} />
        <Route path="/partner/studyAbroad-application" element={<ViewListSudyAbroadCV />} />
      </Route>
    </Routes>
  );
};

export default PartnerRouter;
