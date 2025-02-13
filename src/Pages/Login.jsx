import { useContext } from "react";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const result = await googleSignIn();
      const loggedInUser = result.user;
      console.log(loggedInUser);

      // Send user data to /users route
      await axios.post("https://restaurent-server-sigma.vercel.app/users", {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        photoURL: loggedInUser.photoURL,
      });

      Swal.fire({
        title: "Success!",
        text: "Successfully logged in",
        icon: "success",
        confirmButtonText: "Cool",
      });

      navigate(location?.state ? location.state : "/");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to sign in with Google",
        icon: "error",
        confirmButtonText: "Cool",
      });
      console.error(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>RoyalCrown | LogIn</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div className="flex flex-col md:flex-row h-full justify-center items-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Login with Google</h1>
        </div>
        <div className="card max-w-sm w-full">
          <button
            className="btn btn-block bg-primaryColor mb-2"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle className="mr-2" /> Google Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
