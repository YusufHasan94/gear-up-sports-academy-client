import { FaRegEdit } from "react-icons/fa";

const MyClasses = () => {
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
                        <th>Total Students</th>
                        <th>Available Seat</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Feedback</th>
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
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>Cy Ganderton</td>
                        <td className="flex gap-2">
                            <button className="btn btn-sm text-blue-800"><FaRegEdit></FaRegEdit></button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;