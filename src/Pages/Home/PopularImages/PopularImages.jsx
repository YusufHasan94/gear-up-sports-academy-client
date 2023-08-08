import img1 from "../../../assets/banner/banner2.jpg";
import img2 from "../../../assets/banner/banner3.jpg";
import img3 from "../../../assets/banner/banner4.jpg";
import img4 from "../../../assets/banner/banner5.jpg";
const PopularImages = () => {
    return (
        <div className="my-10 grid md:grid-cols-2 grid-cols-1 p-10">
            <img src={img1} className="rotate-6" alt="" />
            <img src={img2} className="rotate-6" alt="" />
            <img src={img3} className="rotate-6" alt="" />
            <img src={img4} className="rotate-6" alt="" />
        </div>
    );
};

export default PopularImages;