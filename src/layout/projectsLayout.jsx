import { Outlet } from "react-router";
import Navbar from "../pages/shared/navbar";
import Footer from "../pages/shared/footer";
import ScrollToTop from "../component/ScrollToTop/ScrollToTop";

const projectsLayout = () => {
    return (
        <div className="scroll-mt-24">
            <ScrollToTop />
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default projectsLayout;