import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import News from "../pages/News";
import Profile from "../pages/Profile";
import JobForm from "../components/ApplicationForm/JobForm";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/application/job" element={<JobForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
