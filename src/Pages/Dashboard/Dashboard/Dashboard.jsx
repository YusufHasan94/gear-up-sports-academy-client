import { useContext } from "react";
import { FaBars, FaChalkboardTeacher, FaClipboardList, FaHistory, FaHome, FaList, FaLocationArrow, FaRegEdit, FaThList, FaUserCog, FaUserEdit, FaUsers } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";


const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div className="m-4">
            <div className="">
                <h1 className="text-center font-semibold text-4xl">
                    Hello {user?.displayName} !
                </h1>
            </div>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="text-4xl"><FaBars></FaBars></label>
                    <div className="my-10">
                        <Outlet></Outlet>
                    </div>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-52 lg:py-40 h-full bg-[#c74a73] bg-opacity-80 text-xl text-white flex flex-col gap-4">
                        {
                            isAdmin?<>
                                <Link to="/dashboard/admin/manageClasses" className="flex items-center gap-2"><FaUserCog></FaUserCog> Manage Classes</Link>
                                <Link to="/dashboard/admin/manageUsers" className="flex items-center gap-2"><FaUserEdit></FaUserEdit> Manage Users</Link>
                            </>:
                            isInstructor?
                            <>
                                <Link to="/dashboard/instructor/addClass" className="flex items-center gap-2"><FaRegEdit></FaRegEdit> Add a Class</Link>
                                <Link to="/dashboard/instructor/myClasses" className="flex items-center gap-2"><FaClipboardList></FaClipboardList> My Classes</Link>
                                <Link to="/dashboard/instructor/totalStudents" className="flex items-center gap-2"><FaUsers></FaUsers> Total Students</Link>
                            </>:
                            <>
                                <Link to="/dashboard/user/selectedClasses" className="flex items-center gap-2"><FaLocationArrow></FaLocationArrow> Selected Classes</Link>
                                <Link to="/dashboard/user/enrolledClasses" className="flex items-center gap-2"><FaList></FaList> Enrolled Classes</Link>
                                <Link to="/dashboard/user/paymentHistory" className="flex items-center gap-2"><FaHistory></FaHistory> Payment History</Link>
                            </>
                        

                        }
                        <div className="border border-white"></div> 
                        <Link to="/" className="flex items-center gap-2" ><FaHome></FaHome> Home</Link>                    
                        <Link to="/instructors" className="flex items-center gap-2"><FaChalkboardTeacher></FaChalkboardTeacher> Instructors</Link>                    
                        <Link to="/classes" className="flex items-center gap-2"><FaThList></FaThList> Classes</Link>                    
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;