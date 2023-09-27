import { useEffect, useState } from "react";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const ManageUser = () => {
    const [registeredUsers, SetRegisteredUser] = useState([]);
    useEffect(() => {
        fetch("https://gear-up-sports-academy-server.vercel.app/users")
            .then(res => res.json())
            .then(data => SetRegisteredUser(data))
            .catch(error => console.log(error))
    }, []);

    console.log(registeredUsers);

    const updateToAdmin = user => {
        fetch(`https://gear-up-sports-academy-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
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

    const updateToInstructor = user => {
        fetch(`https://gear-up-sports-academy-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
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
        <div className="max-w-screen-2xl mx-auto ">
            <div>
                <SectionTitle heading="all users"></SectionTitle>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center m-10">
                    {
                        registeredUsers.map(user => (
                            <div key={user._id} className="card min-h-fit w-80 lg:w-96 bg-base-100 shadow-xl">
                                <figure>
                                    <img src={user.image} alt="" className="h-64 w-full" />
                                </figure>
                                <div className="card-body">
                                    <div>
                                        <h1 className="text-xl font-semibold">Name: {user.name}</h1>
                                        <h1>Email: {user.email}</h1>
                                        <h1>Role: {user.role?user.role:''}</h1>
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-center gap-2">
                                        <button className="btn btn-sm w-full md:w-1/2 bg-rose-500 text-white hover:text-black" onClick={() => updateToAdmin(user)}>Make Admin</button>
                                        <button className="btn btn-sm w-full md:w-1/2 bg-green-500 text-white hover:text-black" onClick={() => updateToInstructor(user)}>Make Instructor</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
        </div>
            </div >
        </div >
    );
};

export default ManageUser;