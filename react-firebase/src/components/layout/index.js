import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
