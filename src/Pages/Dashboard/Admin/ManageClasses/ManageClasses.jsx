import { FaCheck, FaStickyNote, FaTimes } from "react-icons/fa";

const ManageClasses = () => {
    let serial = 1;
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
                    <tr>
                        <th>{serial++}</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Cy Ganderton</td>
                        <td className="flex gap-2">
                            <button className="btn btn-sm text-green-800"><FaCheck></FaCheck></button>
                            <button className="btn btn-sm text-red-800"><FaTimes></FaTimes></button>
                            <button className="btn btn-sm"><FaStickyNote></FaStickyNote></button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;