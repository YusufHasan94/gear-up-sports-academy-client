import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import img from "../../assets/images/racket-6308994_1280.jpg";

const Classes = () => {
    return (
        <div className="py-32">
            <div>
                <SectionTitle heading="Our Instructors"></SectionTitle>
            </div>
            <div className="my-10">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name</h2>
                        <p>Instructor Name: </p>
                        <p>Available Seats: </p>
                        <p>Price: </p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Select Course</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classes;