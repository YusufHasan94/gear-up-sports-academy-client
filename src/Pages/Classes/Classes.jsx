import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=> res.json())
        .then(data => setClasses(data))
    },[])
    return (
        <div className="py-32">
            <div>
                <SectionTitle heading="Our Classes"></SectionTitle>
            </div>
            <div className="my-10 grid lg:grid-cols-3 gap-4 justify-items-center">
                {
                    classes.map(data =>(
                        <div key={data._id} className="card w-80 lg:w-96 bg-base-100 shadow-xl">
                            <figure><img src={data.image} alt="class" className="h-64" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.name}</h2>
                                <p><span className="font-semibold">Instructor Name:</span> {data.instructorName}</p>
                                <p><span className="font-semibold">Available Seats:</span> {data.totalSeat}</p>
                                <p><span className="font-semibold">Duration:</span> {data.duration}</p>
                                <p><span className="font-semibold">Price:</span> {data.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-[#c74a73] text-white hover:text-black">Select Course</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    );
};

export default Classes;