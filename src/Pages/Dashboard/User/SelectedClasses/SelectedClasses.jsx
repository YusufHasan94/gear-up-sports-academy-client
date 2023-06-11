import { FaBitbucket, FaMoneyCheckAlt } from "react-icons/fa";
import useCart from "../../../../hooks/useCart";

const SelectedClasses = () => {
    const [cart] = useCart(); 
    console.log(cart);
    let serial = 1;
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table text-lg">
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
                        {
                            cart.map(item=> (
                                <tr className="bg-base-200" key={item._id}>
                                    <th>{serial++}</th>
                                    <td>{item.name}</td>
                                    <td><img src={item.image} className="w-20 rounded-full" alt="" /></td>
                                    <td>{item.instructorName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.seat}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <div className="flex gap-2 text-2xl">
                                            <button className="text-green-700"><FaMoneyCheckAlt></FaMoneyCheckAlt></button>
                                            |
                                            <button className="text-red-900"><FaBitbucket></FaBitbucket></button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;