import { useContext } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
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
      console.log("Google Sign-In User:", loggedInUser);

      let userExists = false;
      try {
        const { data } = await axios.get(
          `https://api.royalcrowncafebd.com/user/${loggedInUser.email}`
        );
        userExists = !!data;
      } catch (error) {
        if (error.response?.status !== 404) {
          throw error; // Ignore 404, throw other errors
        }
      }

      if (!userExists) {
        await axios.post("https://api.royalcrowncafebd.com/users", {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          photoURL: loggedInUser.photoURL,
        });
      }

      // Show success message
      Swal.fire({
        title: "Success!",
        text: "Successfully logged in",
        icon: "success",
        confirmButtonText: "Cool",
      });

      // Handle popup window closure issue
      if (window.opener) {
        window.opener.postMessage("closeGooglePopup", "*");
        window.close();
      } else {
        navigate(location?.state ? location.state : "/");
      }
    } catch (error) {
      console.error("Google Sign-In Error:", error);

      Swal.fire({
        title: "Error!",
        text: error.response?.data?.message || "Failed to sign in with Google",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>RoyalCrown | LogIn</title>
      </Helmet>

      <div className="flex flex-col h-full justify-center items-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Login with Google</h1>
        </div>
        <div className="card max-w-sm w-full">
          <button
            className="btn btn-block bg-primaryColor mb-2 flex items-center justify-center"
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
