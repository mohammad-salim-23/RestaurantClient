import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./All.css";

const Root = () => {
    const location = useLocation();

    return (
        <div>
            <div className="bg-neutral text-black navbarr">
                <Navbar />
            </div>
            <div className="mt-24">
                <Outlet />
                {/* Footer only when not on SignIn page */}
                {location.pathname !== "/signin" && <Footer />}
            </div>
        </div>
    );
};

export default Root;
