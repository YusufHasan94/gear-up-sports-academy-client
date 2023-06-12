import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import useCart from "../../../../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { ColorRing } from "react-loader-spinner";

//need to provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_paymentGatWay_pk);

const Payment = () => {
    const {loading} = useContext(AuthContext);
    const {id} = useParams();
    const [cart] = useCart();
    const selected = cart.find(item=> item._id === id);
    console.log(selected);

    if(loading){
        return <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    }
    
    return (
        <div>
            <SectionTitle heading="Make payment from here"></SectionTitle>
            <div className="my-10">
                <h1 className="text-center text-xl font-semibold">Payable Amount is: {selected?.price} $</h1>
            </div>
            <div className="md:flex justify-center my-20">
                <div className="my-10 md:w-1/2">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm selected={selected} price={selected?.price}></CheckoutForm>
                    </Elements>
                </div>

            </div>

        </div>
    );
};

export default Payment;