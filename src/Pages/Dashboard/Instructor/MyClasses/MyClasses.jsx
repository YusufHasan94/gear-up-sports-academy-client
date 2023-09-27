import { useContext, useEffect } from "react";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AuthContext } from "../../../../providers/AuthProvider";

const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const [myClasses, setMyClasses] = useState([]);
    useEffect(() => {
        fetch(`https://gear-up-sports-academy-server.vercel.app/instructor/classes?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyClasses(data))
    }, [])
    return (
        <div className="max-w-screen-2xl mx-auto">
            <h1 className="text-center md:text-4xl">All Classes Added By Instructor</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center m-10">
                {
                    myClasses.map(data => (
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
                                    <button className="btn btn-sm text-blue-800"><FaRegEdit></FaRegEdit></button>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default MyClasses;