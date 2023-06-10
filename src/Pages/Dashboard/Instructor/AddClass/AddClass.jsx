import { useForm } from "react-hook-form";

const AddClass = () => {
    const { register, handleSubmit, reset, formState: {errors} } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
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
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" {...register("className", {required : true})} className="input input-bordered w-full" />
                        {errors.className && <span className="text-red-900">*Required</span> }
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" {...register("className", {required : true})} className="input input-bordered w-full" />
                        {errors.className && <span className="text-red-900">*Required</span> }
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" {...register("className", {required : true})} className="input input-bordered w-full" />
                        {errors.className && <span className="text-red-900">*Required</span> }
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" {...register("className", {required : true})} className="input input-bordered w-full" />
                        {errors.className && <span className="text-red-900">*Required</span> }
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" {...register("className", {required : true})} className="input input-bordered w-full" />
                        {errors.className && <span className="text-red-900">*Required</span> }
                    </div>                
                    <input type="submit" value="Add Class" className="btn bg-[#c74a73] text-white mt-4 hover:text-black w-full"/>
                </form>
            </div>
        </div>
    );
};

export default AddClass;