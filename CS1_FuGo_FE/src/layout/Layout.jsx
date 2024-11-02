import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Routers from "../router/Routers";
import PartnerRouter from "../router/PartnerRouter";


const Layout = () => {
  const user = "partner";
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
