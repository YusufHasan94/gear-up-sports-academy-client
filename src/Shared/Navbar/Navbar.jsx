import { useContext } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaCartPlus } from "react-icons/fa";


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext); 
    const handleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }
    const menuItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        {user? <>
            {
                user?.photoURL?<img src={user.photoURL} alt="" className="w-10 rounded-full"/>:''
            }
            <li><Link to="/dashboard" className="text-xl bg-rose-500 mx-2 text-white"><FaCartPlus></FaCartPlus>0</Link></li>
            <li><Link to="/"><button onClick={handleLogOut}>Log Out</button></Link></li>
        </>:
            <li><Link to="/login">Log In</Link></li>

        }
    </>
    return (
        <div className="navbar max-w-screen-xl fixed z-20 bg-opacity-40 gap-20 bg-[#c74a73]">
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg font-semibold">
                        {menuItem}
                    </ul>
                </div>
                <div className="flex gap-5">
                    <img src={logo} className="w-28" alt="" />
                    <h1 className="text-xl font-semibold text-white">GearUP<br />Sports Academy</h1>
                </div>
            </div>
            <div className="hidden lg:flex lg:ms-72">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold text-white">
                    {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;