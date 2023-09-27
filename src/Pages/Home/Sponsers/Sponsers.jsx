import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import spo1 from "../../../assets/sponsors/oneSpo_1.png";
import spo2 from "../../../assets/sponsors/oneSpo_2.jpg";
import spo3 from "../../../assets/sponsors/oneSpo_3.png";
import spo4 from "../../../assets/sponsors/christmas_2012_new_6524.jpg";

const Sponsers = () => {
    return (
        <div className="my-10">
            <SectionTitle heading="Our Trusted Sponsors"></SectionTitle>
            <div className="my-20 md:flex justify-center md:gap-4 h-52">
                <img src={spo1} alt=""/>
                <img src={spo2} alt=""/>
                <img src={spo3} alt=""/>
                <img src={spo4} alt=""/>
            </div>
        </div>
    );
};

export default Sponsers;