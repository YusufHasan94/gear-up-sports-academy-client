import img1 from "../../../assets/banner/banner2.jpg";
import img2 from "../../../assets/banner/banner3.jpg";
import img3 from "../../../assets/banner/banner4.jpg";
import img4 from "../../../assets/banner/banner5.jpg";
import img5 from "../../../assets/images/full-shot-child-football-field.jpg";
import img6 from "../../../assets/images/full-shot-woman-playing-football.jpg";
const PopularImages = () => {
    return (
        <div className="md:mx-40 md:my-20 grid md:grid-cols-4 gap-2 p-10 items-center">
            <div>
                <img src={img5} alt="" />
            </div>
            <div className="flex flex-col gap-2">
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
            <div>
                <img src={img6} alt="" />
            </div>
            <div className="flex flex-col gap-2">
                <img src={img4} alt="" />
                <img src={img1} alt="" />
            </div>
        </div>
    );
};

export default PopularImages;