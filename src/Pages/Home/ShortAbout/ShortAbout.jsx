import { Link } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import AboutCards from "./AboutCards";


const facilities = ["boys & girls", "ages 7-18", "team & individual sports", "performing & creative arts", "waterfronts activities", "special events & tripes", "performance staff"];

const ShortAbout = () => {
    return (
        <div className="max-w-screen-xl md:mx-auto mx-10 my-20">
            <h1 className="text-2xl text-[#9ABE29] font-semibold uppercase">About Us</h1>
            <div className="my-5 grid md:grid-cols-2 grid-cols-1 gap-5 justify-items-center">
                <div className="">
                    <h1 className="text-4xl uppercase">WE ARE THE BEST SUMMER CAMP!</h1>
                    <p className="text-lg my-5"><span className="text-[text-[#9ABE29]]">GearUp Sports Academy is open for all.</span>Nestled on the sandy beaches of beautiful Lake Ossipee amidst the White Mountains of New Hampshire, Camp offers a summer experience rich in fun, friendship, learning and adventure. Campers range in age from seven to fifteen.</p>
                    <Link to="/about">
                        <button className="text-xl bg-[#FC5640] px-5 py-2 rounded-lg text-white">
                            Find Out More
                        </button>
                    </Link>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-2 items-center">
                    <div>
                        <h1 className="text-4xl mb-5">FACILITIES</h1>
                        <div>
                            {
                                facilities.map((facility, index)=>(
                                    <li key={index} className="flex items-center gap-1 text-lg"><FaCircleCheck className="text-[#FC5640]"/> {facility}</li>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                            <AboutCards/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShortAbout;