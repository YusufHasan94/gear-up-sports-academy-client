import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";

const Payment = ({item}) => {
    console.log(item);
    return (
        <div>
            <SectionTitle heading="Make payment from here"></SectionTitle>
            <div className="my-10">
                <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
            </div>
        </div>
    );
};

export default Payment;