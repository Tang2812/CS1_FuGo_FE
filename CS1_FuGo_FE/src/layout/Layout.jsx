import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Routers from "../router/Routers";
import PartnerRouter from "../router/PartnerRouter";
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";


const Layout = () => {
  const [auth, setAuth] = useAuth();
  // console.log(">>check auth: ", auth);
  const location = useLocation();

  return (
    <>
      {auth?.user?.role === "user" ? (
        <>
          <Header />
          <Routers />
          <Footer />
        </>
      ) : auth?.user?.role === "partner" ? (
        <>
          {!location.pathname.startsWith('/partner') && <Header />}
          <PartnerRouter />
          {!location.pathname.startsWith('/partner') && <Footer />}
        </>
      ) : (
        <>
          <Header />
          <Routers />
          <Footer />
        </>
      )
      }
    </>

  );
};

export default Layout;
