import { FaMoneyBillAlt, FaTrash } from "react-icons/fa";
import useCart from "../../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const SelectedClasses = () => {
    const {user} = useContext(AuthContext);
    const [cart,refetch] = useCart(); 
    let serial = 1;
    const [axiosSecure] = useAxiosSecure();

    const handleDeleteSelected = item=>{
        console.log(item);
        Swal.fire({
            title: 'Do you want to delete this class',
            showCancelButton: true,
            confirmButtonText: 'Yes',
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${item._id}`)
                .then(()=>{
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'Congratulations',
                        text: 'Data deleted Successfully.'
                    })
                })
            }
          })
    }


    return (
        <div>
            <SectionTitle heading={`Selected Classes By ${user?.displayName}`}></SectionTitle>
            <div className="overflow-x-auto my-10">
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
                                    <td>{item.instructorEmail}</td>
                                    <td>{item.availableSeat}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <div className="flex gap-2 text-2xl">
                                            <Link to={`/dashboard/user/payment/${item._id}`}><button className="text-green-700"><FaMoneyBillAlt></FaMoneyBillAlt></button></Link>
                                            |
                                            <button className="text-red-900" onClick={()=>handleDeleteSelected(item)}><FaTrash></FaTrash></button>
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