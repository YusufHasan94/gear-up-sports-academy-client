import { FaBitbucket, FaMoneyCheckAlt } from "react-icons/fa";

const SelectedClasses = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table text-lg">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Class Name</th>
                        <th>Class Images</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Available Seat</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr className="bg-base-200">
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td><img src="" alt="" /></td>
                        <td>Quality Control Specialist</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>
                            <div className="flex gap-2 text-2xl">
                                <button><FaMoneyCheckAlt></FaMoneyCheckAlt></button>
                                |
                                <button><FaBitbucket></FaBitbucket></button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;