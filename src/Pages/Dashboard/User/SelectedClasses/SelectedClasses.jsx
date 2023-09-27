import { FaMoneyBillAlt, FaTrash } from "react-icons/fa";
import useCart from "../../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const SelectedClasses = () => {
    const { user } = useContext(AuthContext);
    const [cart, refetch] = useCart();
    const [axiosSecure] = useAxiosSecure();
    
    console.log(cart);

    const handleDeleteSelected = item => {
        console.log(item);
        Swal.fire({
            title: 'Do you want to delete this class',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${item._id}`)
                    .then(() => {
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
        <div className="max-w-screen-2xl mx-auto">
            <SectionTitle heading={`Selected Classes By ${user?.displayName}`}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center m-10">

                {
                    cart.map(data => (
                        <div key={data._id} className="card min-h-fit w-80 lg:w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img src={data.image} alt="" className="h-64 w-full" />
                            </figure>
                            <div className="card-body">
                                <div>
                                    <h1 className="text-xl font-semibold">Class Name: {data.name}</h1>
                                    <h1>Instructor Name: {data.instructorName}</h1>
                                    <h1>Instructor Email: {data.instructorEmail}</h1>
                                    <h1>Price: {data.price} $</h1>
                                    <h1>Seat: {data.availableSeat}</h1>
                                </div>
                                <div className="flex gap-5 justify-end text-2xl">
                                    <Link to={`/dashboard/user/payment/${data._id}`}><button className="text-green-700 border-2 p-2 rounded-lg"><FaMoneyBillAlt></FaMoneyBillAlt></button></Link>
                                    <button className="text-red-900 border-2 p-2 rounded-lg" onClick={() => handleDeleteSelected(data)}><FaTrash></FaTrash></button>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default SelectedClasses;