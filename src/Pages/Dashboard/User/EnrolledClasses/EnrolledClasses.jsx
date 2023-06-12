import { useState } from "react";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const EnrolledClasses = () => {
    let serial = 1;
    const {user} = useContext(AuthContext);
    const [enrolled, setEnrolled] = useState([]);
    useEffect(()=>{
        fetch(`https://gear-up-sports-academy-server.vercel.app/enrolled?email=${user?.email}`)
        .then(res=> res.json())
        .then(data => setEnrolled(data));
    },[])
    return (
        <div>
            <SectionTitle heading={`All Enrolled Classes`}></SectionTitle>
            <div className="overflow-x-auto my-10">
                <table className="table text-lg">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Class Name</th>
                        <th>Class Images</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                    </tr>
                    </thead>
                    <tbody>
                        {enrolled.map(data=> (
                             <tr className="bg-base-200" key={data._id}>
                                <th>{serial}</th>
                                <td>{data.selectedClass}</td>
                                <td><img src={data.selectedClassImage} className="w-20 rounded-full" alt="" /></td>
                                <td>{data.instructorName}</td>
                                <td>{data.instructorEmail}</td>
                            </tr>
                        ))}
                   
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClasses;