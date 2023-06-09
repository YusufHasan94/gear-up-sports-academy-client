
const EnrolledClasses = () => {
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
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClasses;