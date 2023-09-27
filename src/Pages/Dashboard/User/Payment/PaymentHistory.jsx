import { useState } from "react";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const [payment, setPayment] = useState([]);
    useEffect(() => {
        fetch(`https://gear-up-sports-academy-server.vercel.app/enrolled?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setPayment(data));
    }, [])

    console.log(payment);

    return (
        <div className="max-w-screen-2xl mx-auto">
            <SectionTitle heading="All Payment History"></SectionTitle>
            <div className="my-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center m-10">
                    {
                        payment.map(data => (
                            <div key={data._id} className="card min-h-fit bg-base-100 shadow-xl">
                                <figure>
                                    <img src={data.selectedClassImage} alt="" className="h-64 w-full" />
                                </figure>
                                <div className="card-body">
                                    <div>
                                        <h1 className="text-xl font-semibold">Class Name: {data.selectedClass}</h1>
                                        <h1>Instructor Name: {data.instructorName}</h1>
                                        <h1>Instructor Email: {data.instructorEmail}</h1>
                                        <h1>Price: {data.price} $</h1>
                                        <h1>Enroll Date: {data.data.split('T')[0]}</h1>
                                        <h1>Transaction id: {data.transactionId}</h1>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;