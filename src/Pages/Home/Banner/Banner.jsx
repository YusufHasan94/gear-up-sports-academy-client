import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import banner5 from "../../../assets/banner/banner5.jpg";
import banner6 from "../../../assets/banner/banner6.jpg";
import banner7 from "../../../assets/banner/banner7.jpg";
import banner8 from "../../../assets/banner/banner8.jpg";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const bannerImages = [{ 'banner': banner5, 'text': 'Game On! Summer Sports Camp' },
{ 'banner': banner6, 'text': 'Kick, Score, Soar: Sports Camp Adventures' },
{ 'banner': banner7, 'text': 'The Athletes Playground: Summer Sports Camp' },
{ 'banner': banner8, 'text': 'Goal Getters: Soccer Camp Excitement' }];

const Banner = () => {
    return (
        <div className="relative">
            <div>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    {
                        bannerImages.map((banner, index) => (
                            <SwiperSlide key={index}>
                                <div>
                                    <img src={banner.banner} alt="" className="w-full" />
                                </div>
                                <div className="max-w-screen-xl md:mx-auto mx-10 flex justify-center">
                                    <div className="absolute top-1/3 md:mx-20 text-center">
                                        <TypeAnimation
                                            sequence={[
                                                `${banner.text}`,
                                                1000,
                                            ]}
                                            wrapper="span"
                                            speed={5}
                                            style={{ display: 'block'}}
                                            className="md:text-6xl text-2xl text-white uppercase bg-opacity-5 mb-10 font-semibold font-mono"
                                            repeat={0}
                                        />
                                        <Link to="/classes">
                                            <button className="bg-[#fc5640] px-5 py-2 rounded-lg text-xl text-white">
                                                Grab Your Sit Today
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;