import { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(()=>{
        fetch("https://gear-up-sports-academy-server.vercel.app/instructors")
        .then(res=>res.json())
        .then(data=>setInstructors(data))
    },[])
    return (
        <div className='max-w-screen-xl md:mx-auto mx-10 my-10'>
            <SectionTitle heading="Popular InsTructors"></SectionTitle>
            <div className='grid lg:grid-cols-3 md:gap-y-10 m-10 gap-5 md:gap-0 justify-items-center'>
                {
                    instructors.slice(0,6).map(data =>(
                        <div key={data._id} className="card w-80 lg:w-96 bg-base-100 shadow-xl">
                            <figure><img src={data.image} alt="instructors" className='h-64' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.name}</h2>
                                <p><span className="font-semibold">Email: </span> {data.email}</p>
                                <div className="card-actions justify-end">
                                    {/* <button className="btn bg-[#c74a73] text-white hover:text-black">View Details</button> */}
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