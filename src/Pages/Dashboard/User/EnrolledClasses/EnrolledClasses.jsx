import { useState } from "react";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const EnrolledClasses = () => {
    const {user} = useContext(AuthContext);
    const [enrolled, setEnrolled] = useState([]);
    useEffect(()=>{
        fetch(`https://gear-up-sports-academy-server.vercel.app/enrolled?email=${user?.email}`)
        .then(res=> res.json())
        .then(data => setEnrolled(data));
    },[])

    console.log(enrolled);

    return (
        <div className="max-w-screen-2xl mx-auto">
            <SectionTitle heading={`All Enrolled Classes`}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center m-10">
                
                        {enrolled.map(data=> (
                             <div key={data._id} className="card min-h-fit w-80 lg:w-96 bg-base-100 shadow-xl">
                             <figure>
                                 <img src={data.selectedClassImage} alt="" className="h-64 w-full" />
                             </figure>
                             <div className="card-body">
                                 <div>
                                     <h1 className="text-xl font-semibold">Class Name: {data.selectedClass}</h1>
                                     <h1>Instructor Name: {data.instructorName}</h1>
                                     <h1>Instructor Email: {data.instructorEmail}</h1>
                                     <h1>Price: {data.price} $</h1>
                                     <h1>Enroll Data: {data.data.split('T')[0]}</h1>
                                 </div>
                             </div>
                         </div>
                        ))}
                   
            </div>
        </div>
    );
};

export default EnrolledClasses;