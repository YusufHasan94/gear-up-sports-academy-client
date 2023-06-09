import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Dashboard = () => {
    const {user} = useContext(AuthContext);
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
                        <Link to="/dashboard/selectedClasses">Selected Classes</Link>
                        <Link to="/dashboard/enrolledClasses">Enrolled Classes</Link>
                        <div className="border border-white"></div> 
                        <Link to="/">Home</Link>                    
                        <Link to="/instructors">Instructors</Link>                    
                        <Link to="/classes">Classes</Link>                    
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;