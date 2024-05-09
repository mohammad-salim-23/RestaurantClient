import { useContext } from "react";
import Swal from 'sweetalert2'
import { Link,useLocation,useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {
    
        const location= useLocation();
    const navigate = useNavigate()
    const {signInUser,googleSignIn,GithubSignIn} = useContext(AuthContext)
    
    const handleLogin=e=>{
    e.preventDefault();
        console.log(e.currentTarget)
        const form =new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);
      
        signInUser(email,password)
        .then(result=>{
            console.log(result.user)
            alert("Successfully Login")
         
            // navigate after login
            navigate(location?.state ? location.state:"/");
        }).catch((error)=>{
            alert("again check your email and password")
            console.error(error);
        })
       
    }
    const handlegoogleSignIn=e=>{
        e.preventDefault();
        googleSignIn()
        .then(result=>{
          Swal.fire({
            title: 'Success!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
            navigate(location?.state ? location.state:"/");
        })
        .catch(error=>{
            alert("something wrong")
        })
       
    }
    const handleGithubLogin=e=>{
        e.preventDefault();
        GithubSignIn()
        .then(()=>{
          Swal.fire({
            title: 'Success!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          navigate(location?.state ? location.state:"/");
           
        })
        .catch(()=>{
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        })

    }
  return (
  <div>
   
  
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                  placeholder="password"
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
        <button className="btn bg-blue-400 mb-2" onClick={handlegoogleSignIn}>Google Login</button>
        <button className="btn bg-slate-500" onClick={handleGithubLogin}>GitHub Login</button>
            </div>
            </form>
            <p className="text-center mb-2">Do not have an account <Link className="text-blue-700 font-bold" to="/signup">Register</Link></p>
          </div>
        </div>
   
   
  </div>
     
    );
};

export default Login;