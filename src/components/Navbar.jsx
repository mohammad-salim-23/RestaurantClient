import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext/AuthProvider";
import icon from "../images/Yummy.jpg";
import Swal from "sweetalert2";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const [userHover, setUserHover] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const navLinks = (
    <>
      <li className="text-[18px]">
        <Link to="/">Home</Link>
      </li>
      <li className="text-[18px]">
        <Link to="/allFoods">ALL Foods</Link>
      </li>
      <li className="text-[18px]">
        <Link to="/gallery">Gallery</Link>
      </li>
      <li className="mr-20">
        <span onClick={toggleDropdown} className="cursor-pointer text-[18px]">
          My Profile
        </span>
        {showDropdown && (
          <div className="absolute top-full left-0 mt-1 w-52  shadow rounded-md font-bold bg-black text-white ">
            <ul className="p-2">
              <li>
                <Link onClick={closeDropdown} to="/addFood">
                  Add Food Item
                </Link>
              </li>
              <li onClick={closeDropdown}>
                <Link to="/myFood">My Added Food</Link>
              </li>
              <li onClick={closeDropdown}>
                <Link to="/myOrderedFood">My Ordered Food</Link>
              </li>
            </ul>
          </div>
        )}
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        const user = res?.user;
        axios
          .post(
            "http://localhost:5000/logout",
            { email: user?.email },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          })
          .catch((error) => {
            console.error(error);
          });

        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="md:pl-6 md:pr-6">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghostmd:hidden lg:hidden"
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold text-black"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex">
            <img
              className=" hidden sm:block  mt-3 w-12 h-12 mr-5 mb-3"
              src={icon}
              alt=""
            />
            <a className="font-bold text-black text-xl lg:text-2xl lg:mt-5 ml-2 mt-6">
              Yummy
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  font-bold">{navLinks}</ul>
        </div>
        <div>
          <div className="navbar-end flex gap-5">
            <label className="cursor-pointer grid place-items-center"></label>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar )">
              {user ? (
                <img
                  onMouseEnter={() => setUserHover(true)}
                  onMouseLeave={() => setUserHover(false)}
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                ""
              )}
              {userHover && user && user.displayName}
            </label>
            {user ? (
              ""
            ) : (
              <Link to="/signup">
                <button className="btn " style={{ backgroundColor: "#FFFFF0" }}>
                  SignUp
                </button>
              </Link>
            )}
            {user ? (
              <Link>
                <button className="btn  btn-warning" onClick={handleLogOut}>
                  SignOut
                </button>
              </Link>
            ) : (
              <Link to="/signin">
                <button
                  className="btn font-bold"
                  style={{ backgroundColor: "#FFA500" }}
                >
                  SignIn
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
