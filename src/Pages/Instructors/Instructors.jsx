
import { useEffect, useState } from "react";
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import dynamicTitle from "../../hooks/dynamicTitle";

const Instructors = () => {
    dynamicTitle('Instructors');
    const [instructors, setInstructors] = useState([]);
    useEffect(()=>{
        fetch("https://gear-up-sports-academy-server.vercel.app/instructors")
        .then(res=>res.json())
        .then(data=>setInstructors(data))
    },[])
    return (
        <div className='pt-32 max-w-screen-2xl mx-auto'>
            <div>
                <SectionTitle heading="Our instructors"></SectionTitle>
            </div>
            <div className='my-10 md:mx-20 grid lg:grid-cols-3 md:gap-10 gap-5 justify-items-center'>
                {
                    instructors?.map(data=>(
                        <div key={data._id} className="card w-80 lg:w-96 bg-base-100 shadow-xl">
                            <figure><img src={data.image} alt="Shoes" className="h-64 w-full" /></figure>
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