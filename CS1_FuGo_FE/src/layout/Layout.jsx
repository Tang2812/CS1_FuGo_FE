import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Routers from "../router/Routers";
import PartnerDashboard from "../pages/PartnerDashboard";
import ViewListJobCV from "../components/JobCV/ViewListJobCV";
import ViewListSudyAbroadCV from "../components/StudyCV/ViewListSudyAbroadCV";
import CreateJob from "../components/CreateJob/CreateJob";
import CreateStudyAbroad from "../components/CreateStudyAbroad/CreateStudyAbroad";
import PartnerRouter from "../router/PartnerRouter";


const Layout = () => {
  const user = "user";
  return (
    <>
      {user === "user" ? (
        <>
          <Header />
          <Routers />
          <Footer />
        </>
      ) : (
        <PartnerRouter/>
      )}
    </>
 
  );
};

export default Layout;
