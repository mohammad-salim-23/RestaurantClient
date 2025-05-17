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

      let userExists = false;
      try {
        const { data } = await axios.get(
          `https://api.royalcrowncafebd.com/user/${loggedInUser.email}`
        );
        userExists = !!data;
      } catch (error) {
        if (error.response?.status !== 404) throw error;
      }

      if (!userExists) {
        await axios.post("https://api.royalcrowncafebd.com/users", {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          photoURL: loggedInUser.photoURL,
        });
      }

      Swal.fire({
        title: "Success!",
        text: "Successfully logged in",
        icon: "success",
        confirmButtonText: "Cool",
      });

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

      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg text-center">
          <img
            src="https://i.pinimg.com/736x/db/e5/71/dbe5711b4c1979d7a4f5e168092167d6.jpg" // You can replace this with your own image
            alt="Login Illustration"
            className="mx-auto mb-6 w-40 h-40 object-contain"
          />
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Welcome Back
          </h2>
          <button
            onClick={handleGoogleSignIn}
            className="btn w-full bg-primaryColor hover:bg-primaryColor/90 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-3 text-lg transition"
          >
            <FaGoogle className="text-xl" />
            Login with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
