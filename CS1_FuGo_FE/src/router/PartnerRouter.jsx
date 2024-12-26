import React from "react";
import PartnerDashboard from "../pages/PartnerDashboard";
import ViewListJobCV from "../components/JobCV/ViewListJobCV";
import ViewListSudyAbroadCV from "../components/StudyCV/ViewListStudyAbroadCV";
import { Navigate, Route, Routes } from "react-router-dom";
import ViewListJob from "../components/JobCV/ViewListJob";
import ViewDetailCV from "../components/JobCV/ViewDetailCV";
import ProfileReview from "../components/JobCV/ProfileReview";
import CreateJob from "../components/JobCV/CreateJob";
import HomePage from "../pages/HomePage";
import Job_find from "../pages/Job_find";
import List_Cv from "../pages/List_Cv";
import JobForm from "../components/ApplicationForm/JobForm";
import Study_find from "../pages/Study_find";
import JobDetail from "../pages/JobDetails";
import StudyDetails from "../pages/StudyDetails";
import Job_cv_detail from "../pages/Job_cv_detail.jsx";
import Profile from "../pages/Profile.jsx";
import StudyForm from "../components/ApplicationForm/StudyForm.jsx";
import News from "../pages/News";
import New_detail from "../pages/New_detail";

const PartnerRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/jobs" element={<Job_find />} />
      <Route path="/jobs/:id" element={<JobDetail />} />
      <Route path="/study" element={<Study_find />} />
      <Route path="/study/:id" element={<StudyDetails />} />
      <Route path="/list-cv" element={<List_Cv />} />
      <Route path="/job_cv_detail" element={<Job_cv_detail />} />
      <Route path="/application/job/:id" element={<JobForm />} />
      <Route path="/application/study/:id" element={<StudyForm />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/news" element={<News />} />
      <Route path="/news-detail" element={<New_detail />} />
      <Route path="/partner" element={<PartnerDashboard />}>
        <Route path="/partner/jobCV-application" element={<ViewListJob />} />
        <Route path="/partner/job/listCV/:id" element={<ViewListJobCV />} />
        <Route path="/partner/job/listCV/detail/:id" element={<ViewDetailCV />} />
        <Route path="/partner/job/review" element={<ProfileReview />} />
        <Route path="/partner/studyAbroad-application" element={<ViewListSudyAbroadCV />} />
        <Route path="/partner/add-department" element={<CreateJob />} />

      </Route>
    </Routes>
  );
};

export default PartnerRouter;
