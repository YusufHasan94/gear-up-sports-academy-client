
import { useEffect, useState } from "react";
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import dynamicTitle from "../../hooks/dynamicTitle";

const Instructors = () => {
    dynamicTitle('Instructors');
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
                    instructors?.map(data=>(
                        <div key={data._id} className="card w-80 lg:w-96 bg-base-100 shadow-xl">
                            <figure><img src={data.image} alt="Shoes" className="lg:h-64" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.name}</h2>
                                <p><span className="font-semibold">Email:</span>  {data.email}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Instructors;