import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import spo1 from "../../../assets/sponsors/oneSpo_1.png";
// import spo2 from "../../../assets/sponsors/oneSpo_2.jpg";
import spo3 from "../../../assets/sponsors/oneSpo_3.png";

const Sponsers = () => {
    return (
        <div className="my-10">
            <SectionTitle heading="Our Trusted Sponsors"></SectionTitle>
            <div className="md:flex justify-center md:gap-4">
                <img src={spo1} alt="" />
                {/* <img src={spo2} alt="" /> */}
                <img src={spo3} alt="" />
            </div>
        </div>
    );
};

export default Sponsers;