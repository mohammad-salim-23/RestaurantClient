import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <>
        <span className="loading loading-infinity loading-xs"></span>
        <span className="loading loading-infinity loading-sm"></span>
        <span className="loading loading-infinity loading-md"></span>
        <span className="loading loading-infinity loading-lg"></span> 
        </>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/signin"></Navigate>
};

export default PrivateRoute;