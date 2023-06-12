import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";

const CheckoutForm = ({selected, price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useContext(AuthContext);
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [trxId, setTrxID] = useState([]);

    useEffect(()=>{
        axiosSecure.post("/create-payment-intent",{price})
        .then(res => {
            setClientSecret(res.data.clientSecret);
        })
    },[])

    const handleSubmit = async(event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }
        
        const card = elements.getElement(CardElement);
        if(card == null){
            return;
        }
        console.log(card);

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type : 'card',
            card
        })

        if(error){
            console.log('error: ', error);
            setCardError(error.message);
        }
        else{
            setCardError('');

        }

        setProcessing(true);
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,{
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'email not found',
                        name: user?.displayName || 'name not found'
                    }
                }
            }
        );
        if(confirmError){
            console.log(confirmError)
        }
        console.log(paymentIntent);
        setProcessing(false);
        if(paymentIntent.status === 'succeeded'){
            const trxId = paymentIntent.id;
            setTrxID(trxId);
            const payment = {
                email: user?.email, 
                transactionId: trxId,
                data: new Date(), 
                price: price,
                selectedClass: selected.name,
                selectedClassImage: selected.image,
                classId: selected._id,
                instructorName: selected.instructorName,
                instructorEmail: selected.instructorEmail,
            }
            axiosSecure.post('/payments', payment)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        icon: 'success',
                        title: 'Congratulations',
                        text: 'Payment Successful'
                    })
                }
            })
        }
        console.log(trxId);

    }
    
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="border-rose-600 border-2 rounded-xl p-4">
                        <CardElement
                            options={{
                            style: {
                                base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                                },
                                invalid: {
                                color: '#9e2146',
                                },
                            },
                            }}
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn bg-rose-400 w-1/4 my-4 text-white text-xl hover:text-black" 
                        disabled={!stripe || !clientSecret || processing}>  
                            Pay
                        </button>
                    </div>
                </form>
                {cardError && <span className="text-red-800 text-lg">{cardError}</span> }
                {trxId && <span className="text-green-800">Transaction  id {trxId}</span> }
            </div>
        </div>
    );
};

export default CheckoutForm;