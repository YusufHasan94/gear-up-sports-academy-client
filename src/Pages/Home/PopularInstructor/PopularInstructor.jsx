import { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import img from "../../../assets/images/sports-tools (1).jpg";

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/instructors")
        .then(res=>res.json())
        .then(data=>setInstructors(data))
    },[])
    return (
        <div className='my-10'>
            <SectionTitle heading="Popular InsTructors"></SectionTitle>
            <div className='grid grid-cols-3 gap-4 my-10 mx-4'>
                {
                    instructors.map(data =>(
                        <div key={data._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={data.image} alt="instructors" className='h-64' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.name}</h2>
                                <p><span className="font-semibold">Email: </span> {data.email}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-[#c74a73] text-white hover:text-black">View Details</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularInstructor;