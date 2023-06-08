
import img from "../../assets/images/racket-6308994_1280.jpg";
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Instructors = () => {
    return (
        <div className='py-32'>
            <div>
                <SectionTitle heading="Our Classes"></SectionTitle>
            </div>
            <div className='my-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name</h2>
                        <p>Email: </p>
                        <p>Available Seats: </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" disabled={true}>See Classes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructors;