import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import News from "../pages/News";
import New_detail from "../pages/New_detail";
import Register from "../pages/register";
import Login from "../pages/Login";
import Job_find from "../pages/Job_find";
import List_Cv from "../pages/List_Cv";
import JobForm from "../components/ApplicationForm/JobForm";
import Study_find from "../pages/Study_find";
import JobDetail from "../pages/JobDetails";
import StudyDetails from "../pages/StudyDetails";
import Job_cv_detail from "../pages/Job_cv_detail.jsx";
import Profile from "../pages/Profile.jsx";

const Routers = () => {
    return (

        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/news" element={<News />} />
            <Route path="/news-detail" element={<New_detail />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/jobs" element={<Job_find />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/study" element={<Study_find />} />
            <Route path="/study/:id" element={<StudyDetails />} />
            <Route path="/list-cv" element={<List_Cv />} />
            <Route path="/job_cv_detail" element={<Job_cv_detail />} />
            <Route path="/application/job/:id" element={<JobForm />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>

    );
};

export default Routers;
