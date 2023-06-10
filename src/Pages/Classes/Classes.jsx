import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import dynamicTitle from "../../hooks/dynamicTitle";

const Classes = () => {
    dynamicTitle('Classes');
    const {user} = useContext(AuthContext);
    const [classes, setClasses] = useState([]);
    const [,refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=> res.json())
        .then(data => setClasses(data))
    },[]);
    
    const handleSelectedClass = data =>{
        if(user && user?.email){
            const cartItem = {classId: data._id, name: data._name, image: data.image, instructor: data.instructorName, price: data.price, email: user.email};
            fetch('http://localhost:5000/carts',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            })
            .then(res=>{
                if(res.isConfirmed){
                    navigate('/login', {state:{from: location}})
                }
            })
        }
    }

    return (
        <div className="py-32">
            <div>
                <SectionTitle heading="Our Classes"></SectionTitle>
            </div>
            <div className="my-10 grid lg:grid-cols-3 gap-4 justify-items-center">
                {
                    classes.map(data =>(
                        <div key={data._id} className="card w-80 lg:w-96 bg-base-100 shadow-xl">
                            <figure><img src={data.image} alt="class" className="h-64" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.name}</h2>
                                <p><span className="font-semibold">Instructor Name:</span> {data.instructorName}</p>
                                <p><span className="font-semibold">Available Seats:</span> {data.totalSeat}</p>
                                <p><span className="font-semibold">Duration:</span> {data.duration}</p>
                                <p><span className="font-semibold">Price:</span> {data.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-[#c74a73] text-white hover:text-black" onClick={()=>handleSelectedClass(data)}>Select Course</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    );
};

export default Classes;