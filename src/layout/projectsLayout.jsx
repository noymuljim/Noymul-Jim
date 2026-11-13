import { Outlet } from "react-router";
import Navbar from "../pages/shared/navbar";
import Footer from "../pages/shared/footer";

const projectsLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default projectsLayout;