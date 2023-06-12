import { useEffect } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";

const TopReview = () => {
    let value=200;
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://gear-up-sports-academy-server.vercel.app/reviews')
        .then(res => res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className="my-10">
            <SectionTitle heading="sweet Words"></SectionTitle>
            <div className="my-10 grid md:grid-cols-4 justify-center gap-10  md:gap-4">
                {
                    reviews.map(review => (
                        <Fade delay={value+400} key={review._id}>
                            <div className="card w-72 md:h-full bg-base-100 shadow-xl mx-2">
                                <figure><img src={review.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{review.name}</h2>
                                    <p>{review.comment}</p>
                                </div>
                            </div>
                        </Fade>))
                }
                
            </div>
        </div>
    );
};

export default TopReview;