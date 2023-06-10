import { useForm } from "react-hook-form";
import login from "../../assets/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa"
import dynamicTitle from "../../hooks/dynamicTitle";

const Login = () => {
    dynamicTitle('Log In');
    const { register, handleSubmit, reset, formState:{errors} } = useForm();
    const {loginUser, signInWithGoogle} = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    
    const onSubmit = data => {
        loginUser(data.email, data.password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                icon: 'success',
                title: 'Congratulations',
                text: 'Login Successful'
              })
            reset();
            navigate(from, {replace:true});
        })
        .catch(error => {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Warning',
                text: 'Failed to login'
              })
        })
    };
    const handleGoogleLogin = ()=>{
        signInWithGoogle()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            const user = {name: loggedUser.displayName, email: loggedUser.email, image: loggedUser.photoURL}
            fetch('http://localhost:5000/users',{
                        method: 'POST',
                        headers:{
                            'content-type':'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                    .then(res => res.json())
                    .then(()=> {
                        navigate(from, {replace:true});
                    })
        })
        .catch(error=> console.log(error.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200 py-28">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-full md:w-1/2">
                    <h1 className="text-5xl font-bold text-center my-10">Login now</h1>
                    <img src={login} alt="" className="w-full"/>
                </div>
                <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", {required: true})} className="input input-bordered w-3/4" />
                                {errors.email && <span className="text-red-900">*Required</span>}
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPass?'text':'password'} {...register("password", {required: true})} className="input input-bordered w-3/4" />
                                {errors.password && <span className="text-red-900">*Required</span>}
                                <label className="label justify-start">
                                    <input type="checkbox" name="" id="showPass" checked={showPass} onChange={()=>setShowPass(!showPass)} className="mr-1"/>
                                    <span>Show password</span>
                                </label>
                            </div>
                            <div className="mt-4"> 
                                <h1>Don't have any account? Please <Link to="/registration" className="text-blue-800 font-semibold">Registration</Link> here</h1>
                            </div>
                            
                            <input type="submit" value="Log in" className="btn bg-[#c74a73] text-white mt-4 hover:text-black"/>
                            <button className="flex items-center gap-4 my-4 text-xl" onClick={handleGoogleLogin}>
                                <FaGoogle></FaGoogle>
                                <span>Login With Google</span>
                            </button>
                        
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;