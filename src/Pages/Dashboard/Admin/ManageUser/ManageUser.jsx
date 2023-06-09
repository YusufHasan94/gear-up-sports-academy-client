import { useEffect, useState } from "react";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";

const ManageUser = () => {
    let serial = 1;
    const [registeredUsers, SetRegisteredUser] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(data => SetRegisteredUser(data))
        .catch(error=> console.log(error))
    },[])
    return (
        <div>
            <div>
                <SectionTitle heading="all users"></SectionTitle>
            </div>
            <div>
            <div className="overflow-x-auto">
                <table className="table text-lg my-5">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Email address</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            registeredUsers.map(data=> (
                                <tr className="bg-base-200" key={data._id}>
                                    <th>{serial++}</th>
                                    <td>{data.name}</td>
                                    <td><img src={data.image} className="w-14 rounded-full" alt="" /></td>
                                    <td>{data.email}</td>
                                    <td className="flex gap-4 justify-center">
                                        <button className="btn bg-rose-500 text-white hover:text-black">Make Admin</button> |
                                        <button className="btn bg-rose-500 text-white hover:text-black">Make Instructor</button>
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