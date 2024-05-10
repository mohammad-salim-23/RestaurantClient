import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";



const Root = () => {
    return (
        <div>
            <div className="bg-primaryColor text-white">
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;