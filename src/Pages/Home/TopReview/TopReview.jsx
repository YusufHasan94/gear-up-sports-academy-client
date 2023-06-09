import Marquee from "react-fast-marquee";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import img from "../../../assets/images/racket-6308994_1280.jpg";

const TopReview = () => {
    return (
        <div className="my-10">
            <SectionTitle heading="sweet Words"></SectionTitle>
            <div className="my-10">
                <Marquee>
                    <div className="card w-96 bg-base-100 shadow-xl mx-4">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default TopReview;