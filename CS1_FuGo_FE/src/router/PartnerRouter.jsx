import React from "react";
import PartnerDashboard from "../pages/PartnerDashboard";
import ViewListJobCV from "../components/JobCV/ViewListJobCV";
import ViewListSudyAbroadCV from "../components/StudyCV/ViewListSudyAbroadCV";
import { Route, Routes } from "react-router-dom";

const PartnerRouter = () => {
  return (
    <Routes>
      <Route path="/partner" element={<PartnerDashboard />}>
        <Route path="/partner/jobCV-application" element={<ViewListJobCV />} />
        <Route path="/partner/studyAbroad-application" element={<ViewListSudyAbroadCV />} />
      </Route>
    </Routes>
  );
};

export default PartnerRouter;
