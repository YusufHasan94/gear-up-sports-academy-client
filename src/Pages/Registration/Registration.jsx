import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import reg from "../../assets/register.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import dynamicTitle from "../../hooks/dynamicTitle";

const Registration = () => {
    dynamicTitle('Registration');
    const { register, handleSubmit, reset, formState:{errors} } = useForm();
    const {createUser, updateUserInfo, logOut} = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const onSubmit = data => {
        if(data.password === data.confirmPassword){
            createUser(data.email, data.password)
            .then(result =>{
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserInfo(data.name, data.photoURL)
                .then(()=>{
                    const user = {name: data.name, email: data.email, image: data.photoURL};
                    fetch('https://gear-up-sports-academy-server.vercel.app/users',{
                        method: 'POST',
                        headers:{
                            'content-type':'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(data.insertedId){
                            reset();
                            Swal.fire({
                                icon: 'success',
                                title: 'Congratulations',
                                text: 'Registration Successful'
                            })
                            logOut();   
                            navigate('/');                    
                        }
                    })
                })
                .catch(err => console.log(err))
            })
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Warning',
                text: 'Both password should be same'
            })
        }
    };
    return (
        <div className="hero min-h-screen bg-base-200 py-28">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-full md:w-1/2">
                    <h1 className="text-5xl font-bold text-center my-10">Registration Here</h1>
                    <img src={reg} alt="" className="w-full"/>
                </div>
                <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", {required : true})} className="input input-bordered w-full" />
                                {errors.name && <span className="text-red-900">*Required</span> }
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", {required : true})} className="input input-bordered w-full" />
                                {errors.email && <span className="text-red-900">*Required</span> }
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" {...register("photoURL", {required : true})} className="input input-bordered w-full"/>
                                {errors.photoURL && <span className="text-red-900">*Required</span> }
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPass?'text':'password'} {...register("password", {
                                    required : true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$%*])/ 
                                    })} className="input input-bordered w-full" />
                                {errors.password?.type === 'required' && <span className="text-red-900">*Required</span> }
                                {errors.password?.type === 'minLength' && <span className="text-red-900">*password must be 6 digit or longer</span> }
                                {errors.password?.type === 'pattern' && <span className="text-red-900">*password must be one capital, one special character</span> }
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type={showPass?'text':'password'} {...register("confirmPassword", {required : true})} className="input input-bordered w-full" />
                                {errors.password?.type === 'required' && <span className="text-red-900">*Required</span> }
                                {errors.password  != errors.confirmPassword && <span className="text-red-900">*both password must be same</span> }
                            </div>
                            <div>
                                <label className="label justify-start">
                                    <input type="checkbox" name="" id="showPass" checked={showPass} onChange={()=>setShowPass(!showPass)} className="mr-1"/>
                                    <span>Show password</span>
                                </label>
                            </div>
                            <div className="mt-4"> 
                                <h1>Already have an account? Please <Link to="/login" className="text-blue-800 font-semibold">Log In</Link> here</h1>
                            </div>
                            <input type="submit" value="Registration" className="btn bg-[#c74a73] text-white mt-4 hover:text-black"/>
                        </form>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default Registration;