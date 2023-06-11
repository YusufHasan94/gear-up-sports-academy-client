import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddClass = () => {
    const {user, } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: {errors} } = useForm();
    const onSubmit = data => {
        const newClass = {className: data.className, classImage: data.classImage, instructorName: data.instructorName, instructorEmail: data.instructorEmail, availableSeat: data.availableSeat, price: data.price}
        fetch('http://localhost:5000/classes',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newClass)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations',
                    text: 'Data Inserted Successfully. Please Wait for approval.'
                })
            }
        })
        .catch(error =>{
            Swal.fire({
                icon: 'error',
                title: 'Warning',
                text: `${error.message}`
            })
        })

    };
    return (
        <div>
            <h1 className="text-center md:text-4xl">Add Your Class From Here</h1>
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="mx-4 w-full md:w-1/2">
                    <div>
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" {...register("className", {required : true})} className="input input-bordered w-full" />
                        {errors.className && <span className="text-red-900">*Required</span> }
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Class Image [Use Photo URL]</span>
                        </label>
                        <input type="text" {...register("classImage", {required : true},)} className="input input-bordered w-full" />
                        {errors.className && <span className="text-red-900">*Required</span> }
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" {...register("instructorName", {required : true})} defaultValue={user?.displayName} className="input input-bordered w-full" />
                        {errors.className && <span className="text-red-900">*Required</span> }
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="email" {...register("instructorEmail", {required : true})} defaultValue={user?.email} className="input input-bordered w-full" />
                        {errors.className && <span className="text-red-900">*Required</span> }
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Available Seat</span>
                        </label>
                        <input type="number" {...register("availableSeat", {required : true})} className="input input-bordered w-full" />
                        {errors.className && <span className="text-red-900">*Required</span> }
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" {...register("price", {required : true})} className="input input-bordered w-full" />
                        {errors.className && <span className="text-red-900">*Required</span> }
                    </div>                
                    <input type="submit" value="Add Class" className="btn bg-[#c74a73] text-white mt-4 hover:text-black w-full"/>
                </form>
            </div>
        </div>
    );
};

export default AddClass;