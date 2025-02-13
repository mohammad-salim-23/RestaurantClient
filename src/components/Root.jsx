import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./All.css"


const Root = () => {
    return (
        <div>
            <div className="bg-neutral text-black navbarr">
            <Navbar></Navbar>
            </div>
           <div className="mt-24">
           <Outlet></Outlet>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Root;