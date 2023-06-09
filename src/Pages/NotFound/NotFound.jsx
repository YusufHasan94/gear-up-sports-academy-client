import { Link } from "react-router-dom";
import notFound from "../../assets/404-error.png";
const NotFound = () => {
    return (
        <div className="flex flex-col items-center">
            <img src={notFound} alt="" />
            <Link to="/" className="btn bg-[#c74a73] text-white hover:text-black">Back to Home</Link>
        </div>
    );
};

export default NotFound;