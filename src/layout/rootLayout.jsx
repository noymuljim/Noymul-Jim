import { Outlet } from "react-router";
import Footer from "../pages/shared/footer";
import Navbar from "../pages/shared/navbar";
const rootLayout = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default rootLayout;