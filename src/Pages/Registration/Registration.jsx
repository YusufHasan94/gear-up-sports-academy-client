import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import reg from "../../assets/register.svg";

const Registration = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="hero min-h-screen bg-base-200">
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
                            <input type="text" {...register("firstName")} className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="file" {...register("photoUrl")} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password")} className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" {...register("ConfirmPassword")} className="input input-bordered w-full" />
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