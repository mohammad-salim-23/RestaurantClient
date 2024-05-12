import { useContext } from "react";
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext/AuthProvider";

import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { signInUser, googleSignIn } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signInUser(email, password)
            .then(result => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully logged in',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Please check your email and password',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                });
                console.error(error);
            });
    };

    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        googleSignIn()
            .then(result => {
                console.log(result);
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully logged in with Google',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to sign in with Google',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                });
                console.error(error);
            });
    };

    return (
        <div className="flex flex-col md:flex-row h-full">
            <div className="lg:w-1/2 flex justify-center items-center">
                <img className="w-full lg:max-w-sm" src="https://img.freepik.com/free-photo/people-ramadan-celebration_23-2151344680.jpg?t=st=1715367780~exp=1715371380~hmac=9bb9487bacdadbfa8a7b1cb354bee7ceb3b9f7d4d95b728bc9bd75611683a78d&w=900" alt="" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center items-center px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                </div>
                <div className="card max-w-sm w-full">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#249898] text-xl text-black">Login</button>
                        </div>
                        <div className="mt-4">
                            <button className="btn btn-block bg-primaryColor mb-2" onClick={handleGoogleSignIn}><FaGoogle className="mr-2" />Google Login</button>
                        </div>
                    </form>
                </div>
                <p className="mt-4 text-center">Don't have an account? <Link className="text-blue-700 font-bold" to="/signup">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;
