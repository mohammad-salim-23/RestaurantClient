import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import icon from "../images/RestaurantLogo.jpeg";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Dropdown open/close state

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://api.royalcrowncafebd.com/user/${user.email}`, { withCredentials: true })
        .then((res) => {
          setUserInfo(res.data);
        })
        .catch((error) => console.error("User fetch error:", error));
    }
  }, [user?.email]);
console.log(userInfo);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        axios
          .post(
            "https://api.royalcrowncafebd.com/logout",
            { email: user?.email },
            { withCredentials: true }
          )
          .then((res) => {
            if (res.data.success) {
              navigate("/");
            }
          })
          .catch((error) => console.error(error));

        Swal.fire({
          title: "Logged Out!",
          text: "You have successfully logged out.",
          icon: "success",
        });

        setUserInfo(null);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="md:pl-6 md:pr-6">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost md:hidden lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {isOpen && (
              <ul
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-none bg-white rounded-box w-52 font-bold text-black"
              >
                <li onClick={() => setIsOpen(false)}><Link to="/">Home</Link></li>
                <li onClick={() => setIsOpen(false)}><Link to="/allFoods">All Foods</Link></li>
                <li onClick={() => setIsOpen(false)}><Link to="/aboutUs">About Us</Link></li>
                {userInfo?.role === "admin" && (
                  <li onClick={() => setIsOpen(false)}><Link to="/admin">Admin</Link></li>
                )}
              </ul>
            )}
          </div>
          <div className="flex">
            <img className="sm:block mt-3 w-12 h-12 mr-5 mb-3" src={icon} alt="Logo" />
            <span className="hidden md:block font-bold text-black text-xl lg:text-2xl lg:mt-5 ml-2 mt-6">Royal Crown</span>
          </div>
        </div>
        <div className="navbar-center hidden md:flex lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/allFoods">All Foods</Link></li>
            <li><Link to="/aboutUs">About Us</Link></li>
            {userInfo?.role === "admin" && (
              <li><Link to="/admin">Admin</Link></li>
            )}
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          {user ? (
            <>
              <span className="font-bold text-black">{userInfo?.name || "User"}</span>
              <button className="btn bg-red-500 text-white" onClick={handleLogOut}>Log Out</button>
            </>
          ) : (
            <Link to="/signin" className="btn bg-primaryColor">Sign In</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
