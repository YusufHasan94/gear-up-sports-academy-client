import { useState } from "react";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const PaymentHistory = () => {
    let serial = 1;
    const {user} = useContext(AuthContext);
    const [payment, setPayment] = useState([]);
    useEffect(()=>{
        fetch(`https://gear-up-sports-academy-server.vercel.app/enrolled?email=${user?.email}`)
        .then(res=> res.json())
        .then(data => setPayment(data));
    },[])
    return (
        <div>
            <SectionTitle heading="All Payment History"></SectionTitle>
            <div className="my-10">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Class Name</th>
                        <th>Price</th>
                        <th>Transaction Id</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            payment.map(data=> (
                                <tr key={data._id}>
                                    <th>{serial++}</th>
                                    <td>{data.email}</td>
                                    <td>{data.selectedClass}</td>
                                    <td>{data.price}</td>
                                    <td>{data.transactionId}</td>
                                    <td>{data.data}</td>
                                </tr>
                            ))
                        }
                        
                    
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;