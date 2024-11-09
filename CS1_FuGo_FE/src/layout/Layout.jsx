import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Routers from "../router/Routers";
import PartnerRouter from "../router/PartnerRouter";
import { useAuth } from "../context/AuthContext";


const Layout = () => {
  const [auth, setAuth] = useAuth();
  console.log(">>check auth: ", auth);

  return (
    <>
      {auth?.user?.role === "user" ? (
        <>
          <Header />
          <Routers />
          <Footer />
        </>
      ) : auth?.user?.role === "partner" ? (
        <PartnerRouter />
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
