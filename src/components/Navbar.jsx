import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext/AuthProvider";
import icon from "../images/icon.jpg"
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const Navbar = () => {
    
         const navLinks = (
            <>
            <li ><Link to="/">Home</Link></li>
            <li ><Link to="/gallery">Gallery</Link></li>
            <li ><Link to="/addFood">Add Food Item</Link></li>
            <li ><Link to="/myFood">My Added Food</Link></li>
            <li ><Link to="/myOrderedFood">My Ordered Food</Link></li>
           
           
            </>
         )
        

        const { user, logOut } = useContext(AuthContext);
        const [theme, setTheme] = useState('light');
        useEffect(()=>{
            localStorage.setItem('theme',theme);
            const localTheme = localStorage.getItem('theme');
            document.querySelector('html').setAttribute('data-theme',localTheme);
          },[theme])
        
          const handleToggle = e=>{
             if(e.target.checked){
              setTheme('dark')
             }else{
              setTheme('light')
             }
          }
          const handleLogOut = () => {
            logOut()
              .then((res) => {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "LogOut successfully",
                  showConfirmButton: false,
                  timer: 2000,
                });
              })
              .catch();
          };
      return (
        <div className='md:pl-6 md:pr-6'> 
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
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold"
                >
                  {navLinks}
                </ul>
              </div>
              <div className="flex">
                <img className="w-8 mt-3 md:w-10 md:h-10" src={icon} alt="" />
                <a className="btn  text-xl">Yummy</a>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 font-bold">{navLinks}</ul>
            </div>
            <div>
              
             
            </div>
            <div className="navbar-end flex gap-2">
            <label className="cursor-pointer grid place-items-center">
      <input type="checkbox" onChange={handleToggle} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
      <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
      <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    </label>
              {user ? (
                ""
              ) : (
                <Link to='/signup'>
                  <button
                    className="btn "
                    style={{ backgroundColor: "#FFFFF0" }}
                  >
                    SignUp
                  </button>
                </Link>
              )}
    
              {user ? (
                <Link >
                  <button
                    className="btn  btn-warning"
                    onClick={handleLogOut}
                  >
                    SignOut
                  </button>
                </Link>
              ) : (
                <Link to="/signin">
                  <button
                    className="btn font-bold"
                    style={{ backgroundColor: "#FF6347" }}
                  >
                    SignIn
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      );

};
export default Navbar;