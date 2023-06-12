import { useEffect, useState } from "react";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const ManageUser = () => {
    let serial = 1;
    const [registeredUsers, SetRegisteredUser] = useState([]);
    useEffect(()=>{
        fetch("https://gear-up-sports-academy-server.vercel.app/users")
        .then(res => res.json())
        .then(data => SetRegisteredUser(data))
        .catch(error=> console.log(error))
    },[]);
    const updateToAdmin = user=>{
        fetch(`https://gear-up-sports-academy-server.vercel.app/users/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        .catch(error => console.log(error))
    }
    
    const updateToInstructor = user=>{
        fetch(`https://gear-up-sports-academy-server.vercel.app/users/instructor/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div>
                <SectionTitle heading="all users"></SectionTitle>
            </div>
            <div>
            <div className="overflow-x-auto">
                <table className="table text-lg my-5">
                    <thead className="text-lg">
                        <tr className="text-cente">
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Email address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            registeredUsers.map(user=> (
                                <tr key={user._id}>
                                    <th>{serial++}</th>
                                    <td>{user.name}</td>
                                    <td><img src={user.image} className="w-14 rounded-full" alt="" /></td>
                                    <td>{user.email}</td>
                                    <td className="flex gap-4 justify-center items-center">
                                        <button className="btn btn-sm bg-rose-500 text-white hover:text-black" onClick={()=>updateToAdmin(user)}>Make Admin</button> |
                                        <button className="btn btn-sm bg-rose-500 text-white hover:text-black" onClick={()=>updateToInstructor(user)}>Make Instructor</button>
                                    </td>
                                </tr>
                            ))
                        }
                    
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default ManageUser;