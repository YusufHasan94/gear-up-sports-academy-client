import { useEffect } from "react";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";

const MyClasses = () => {
    let serial = 1;
    const [myClasses, setMyClasses] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/instructor/classes")
        .then(res=>res.json())
        .then(data => setMyClasses(data))
    },[])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead className="text-base">
                    <tr >
                        <th>#</th>
                        <th>Class Name</th>
                        <th>Class Image</th>
                        <th>Total Students</th>
                        <th>Available Seat</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Feedback</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody className="text-base">
                        {
                            myClasses.map(data=>(
                                <tr key={data._id}>
                                    <th>{serial++}</th>
                                    <td>{data.className}</td>
                                    <td><img src={data.classImage} className="w-20 rounded-full" alt="" /></td>
                                    <td>{}</td>
                                    <td>{data.availableSeat}</td>
                                    <td>{data.price}</td>
                                    <td>{data.status}</td>
                                    <td>{}</td>
                                    <td className="flex gap-2">
                                        <button className="btn btn-sm text-blue-800"><FaRegEdit></FaRegEdit></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;