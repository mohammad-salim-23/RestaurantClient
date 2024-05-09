import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";



const Root = () => {
    return (
        <div>
            <div className="bg-[#FFA500] text-white">
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;