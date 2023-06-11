import { useEffect, useState } from "react";
import { FaCheck, FaStickyNote, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageClasses = () => {
    let serial = 1;
    const [reqClass, setReqClasses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data=> setReqClasses(data))
    },[])

    const handleApprove = data=>{
        fetch(`http://localhost:5000/classes/status/allow/${data._id}`,{
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
        fetch(`http://localhost:5000/classes/status/deny/${data._id}`,{
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

    const handleFeedback = event=>{
        event.preventDefault();
        const form = event.target;
        console.log(form.feedback.value);

    }

    return (
        <div>
            <div className="overflow-x-auto">
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
                                        <button className="btn btn-sm" onClick={()=>window.my_modal_1.showModal()}><FaStickyNote></FaStickyNote></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box" onSubmit={handleFeedback}>
                    <h3 className="font-bold text-lg text-center">Give Your Feedback Here!</h3>
                    <textarea name="feedback" id="" cols=""  rows="5" className="w-full p-4"></textarea>
                    {/* <input type="submit" value="Submit" className="btn bg-rose-500 text-white modal-action"/> */}
                    <div className="modal-action">
                        <button className="btn">Close</button>
                    </div>
                </form>
</dialog>
            </div>
        </div>
    );
};

export default ManageClasses;