import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="m-4 flex w-full flex-row-reverse">
            <div className="w-3/4">
                <h1 className="font-semibold text-4xl">
                    Hello {user?.displayName} !
                </h1>
            </div>
            <div className="drawer w-1/4">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="text-4xl"><FaBars></FaBars></label>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-52 h-full bg-[#c74a73] bg-opacity-80 text-xl text-white">
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