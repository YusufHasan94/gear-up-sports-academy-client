import { useEffect, useState } from "react";
import { FaCheck, FaStickyNote, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageClasses = () => {
    let serial = 1;
    const [reqClass, setReqClasses] = useState([]);
    useEffect(()=>{
        fetch('https://gear-up-sports-academy-server.vercel.app/classes/requested')
        .then(res => res.json())
        .then(data=> setReqClasses(data))
    },[])

    const handleApprove = data=>{
        fetch(`https://gear-up-sports-academy-server.vercel.app/classes/status/allow/${data._id}`,{
            method: 'PATCH'
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire({
                    icon: 'success',
                    title: 'Class Approved',
                    text: `Class is approved!`
                    })
            }
        })
    }
    
    const handleDeny = data=>{
        fetch(`https://gear-up-sports-academy-server.vercel.app/classes/status/deny/${data._id}`,{
            method: 'PATCH'
        })
            .then(res=> res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount){
                    Swal.fire({
                        icon: 'warning',
                        title: 'Class Denied',
                        text: `class is denied!`
                      })
                }
            })
    }


    return (
        <div>
            <h1 className="text-center md:text-4xl">Manage Classes By Admin</h1>
            <div className="overflow-x-auto my-10">
                <table className="table table-zebra">
                    <thead className="text-base">
                    <tr >
                        <th>#</th>
                        <th>Class Name</th>
                        <th>Class Image</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Available Seat</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody className="text-base">
                        {
                            reqClass.map(data=>(
                                <tr key={data._id}>
                                    <th>{serial++}</th>
                                    <td>{data.className}</td>
                                    <td><img src={data.classImage} className="w-24 rounded-full" alt="" /></td>
                                    <td>{data.instructorName}</td>
                                    <td>{data.instructorEmail}</td>
                                    <td>{data.availableSeat}</td>
                                    <td>{data.price}</td>
                                    <td>{data.status}</td>
                                    <td className="flex gap-2">
                                        <button className="btn btn-sm text-green-800" onClick={()=> handleApprove(data)}><FaCheck></FaCheck></button>
                                        <button className="btn btn-sm text-red-800" onClick={()=> handleDeny(data)}><FaTimes></FaTimes></button>
                                        <Link to="/dashboard/admin/feedback">
                                            <button className="btn btn-sm"><FaStickyNote></FaStickyNote></button>
                                        </Link>
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

export default ManageClasses;