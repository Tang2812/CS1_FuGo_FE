import React from "react";
import PartnerDashboard from "../pages/PartnerDashboard";
import ViewListJobCV from "../components/JobCV/ViewListJobCV";
import ViewListSudyAbroadCV from "../components/StudyCV/ViewListSudyAbroadCV";
import { Navigate, Route, Routes } from "react-router-dom";
import ViewListJob from "../components/JobCV/ViewListJob";
import ViewDetailCV from "../components/JobCV/ViewDetailCV";

const PartnerRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/partner" />} />
      <Route path="/home" element={<Navigate to="/partner" />} />
      <Route path="/partner" element={<PartnerDashboard />}>
        <Route path="/partner/jobCV-application" element={<ViewListJob />} />
        <Route path="/partner/job/listCV/:id" element={<ViewListJobCV />} />
        <Route path="/partner/job/listCV/detail/:id" element={<ViewDetailCV />} />
        <Route path="/partner/studyAbroad-application" element={<ViewListSudyAbroadCV />} />
      </Route>
    </Routes>
  );
};

export default PartnerRouter;
