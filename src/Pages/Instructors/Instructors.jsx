
import { useEffect, useState } from "react";
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/instructors")
        .then(res=>res.json())
        .then(data=>setInstructors(data))
    },[])
    return (
        <div className='py-32'>
            <div>
                <SectionTitle heading="Our instructors"></SectionTitle>
            </div>
            <div className='my-10 grid lg:grid-cols-3 gap-4 justify-items-center'>
                {
                    instructors.map(data=>(
                        <div key={data._id} className="card w-80 lg:w-96 bg-base-100 shadow-xl">
                            <figure><img src={data.image} alt="Shoes" className="lg:h-64" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.name}</h2>
                                <p><span className="font-semibold">Email:</span>  {data.email}</p>
                                <p><span className="font-semibold">Number of Class Taken:</span>  {data.classesTaken}</p>
                                <p><span className="font-semibold">Name of Classes:</span>  {data.classes.map(i=> <span key={i.id}>{i.name}</span>)}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-[#c74a73] text-white hover:text-black" disabled={false}>View All classes</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Instructors;