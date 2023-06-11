import { useContext } from "react";
import { FaBars, FaChalkboardTeacher, FaClipboardList, FaGripHorizontal, FaHistory, FaHome, FaList, FaLocationArrow, FaRegEdit, FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import dynamicTitle from "../../../hooks/dynamicTitle";


const Dashboard = () => {
    dynamicTitle('Dashboard');
    const {user, logOut} = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    
    const handleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }
    
    return (
        <div className="mx-4">
            <div className="w-full flex justify-between bg-rose-400 h p-4">
                <label htmlFor="my-drawer" className="text-4xl text-white"><FaBars></FaBars></label>
                <h1 className="text-2xl md:text-4xl font-semibold text-white"><span className="text-green-900">Hello</span> {user?.displayName}</h1>
            </div>
            <div className="drawer h-screen">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className="my-10">
                        <Outlet></Outlet>
                    </div>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-52 lg:py-40 h-full bg-[#c74a73] bg-opacity-80 text-xl text-white flex flex-col gap-4">
                        {
                            isAdmin?<>
                                <Link to="/dashboard/admin/manageClasses" className="flex items-center gap-2"><FaList></FaList> Manage Classes</Link>
                                <Link to="/dashboard/admin/manageUsers" className="flex items-center gap-2"><FaUserEdit></FaUserEdit> Manage Users</Link>
                            </>:
                            isInstructor?
                            <>
                                <Link to="/dashboard/instructor/addClass" className="flex items-center gap-2"><FaRegEdit></FaRegEdit> Add a Class</Link>
                                <Link to="/dashboard/instructor/myClasses" className="flex items-center gap-2"><FaClipboardList></FaClipboardList> My Classes</Link>
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
                        <Link to="/classes" className="flex items-center gap-2"><FaGripHorizontal></FaGripHorizontal> Classes</Link>   
                        <Link to="/" className="flex items-center gap-2"><FaSignOutAlt></FaSignOutAlt> <button onClick={handleLogOut}>Log Out</button></Link>               
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;