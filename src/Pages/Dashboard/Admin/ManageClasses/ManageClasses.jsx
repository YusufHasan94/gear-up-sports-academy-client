import { useEffect, useState } from "react";
import { FaCheck, FaStickyNote, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageClasses = () => {
    const [reqClass, setReqClasses] = useState([]);
    useEffect(()=>{
        fetch('https://gear-up-sports-academy-server.vercel.app/classes/requested')
        .then(res => res.json())
        .then(data=> setReqClasses(data))
    },[])
    console.log(reqClass);

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
        <div className="max-w-screen-2xl mx-auto">
            <h1 className="text-center md:text-4xl">Manage Classes By Admin</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center m-10">
                {
                    reqClass.map(data=>(
                        <div key={data._id} className="card min-h-fit w-80 lg:w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img src={data.classImage} alt="" className="h-64 w-full" />
                            </figure>
                            <div className="card-body">
                                <div>
                                    <h1 className="text-xl font-semibold">Class Name: {data.className}</h1>
                                    <h1>Instructor Name: {data.instructorName}</h1>
                                    <h1>Instructor Email: {data.instructorEmail}</h1>
                                    <h1>Price: {data.price} $</h1>
                                    <h1>Seat: {data.availableSeat}</h1>
                                    <h1>Status: {data.status}</h1>
                                </div>
                                <div className="flex justify-end gap-5">
                                    <button className="btn btn-sm text-green-800 bg-transparent" onClick={()=> handleApprove(data)}><FaCheck></FaCheck></button>
                                    <button className="btn btn-sm text-red-800 bg-transparent" onClick={()=> handleDeny(data)}><FaTimes></FaTimes></button>
                                    <Link to="/dashboard/admin/feedback">
                                        <button className="btn btn-sm bg-transparent"><FaStickyNote></FaStickyNote></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ManageClasses;