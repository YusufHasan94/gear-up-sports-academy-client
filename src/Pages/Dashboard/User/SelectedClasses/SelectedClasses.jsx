import { FaMoneyBillAlt, FaTrash } from "react-icons/fa";
import useCart from "../../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const SelectedClasses = () => {
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
                axiosSecure.delete(`http://localhost:5000/carts/${item._id}`)
                .then(res=>{
                    console.log(res);
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
                                    <td>{item.instructorEmail}</td>
                                    <td>{item.availableSeat}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <div className="flex gap-2 text-2xl">
                                            <button className="text-green-700"><FaMoneyBillAlt></FaMoneyBillAlt></button>
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