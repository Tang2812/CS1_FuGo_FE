import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage";
import News from "../pages/News";
import New_detail from "../pages/New_detail";
import Register from "../pages/register";
import Login from "../pages/Login";
import Job_find from "../pages/job_find";
import List_Cv from "../pages/List_Cv";
import Profile from "../pages/Profile";
import JobForm from "../components/ApplicationForm/JobForm";
import Study_find from "../pages/Study_find";
import JobDetail from "../pages/JobDetails";
import StudyDetails from "../pages/StudyDetails";

const Routers = () => {
  return (

    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/news-detail" element={<New_detail />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/find-jobs" element={<Job_find />} />
      <Route path="/find-jobs/:id" element={<JobDetail />} />
      <Route path="/find-study" element={<Study_find />} />
      <Route path="/find-study/:id" element={<StudyDetails />} />
      <Route path="/list-cv" element={<List_Cv />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/application/job" element={<JobForm />} />
    </Routes>

  );
};

export default Routers;
