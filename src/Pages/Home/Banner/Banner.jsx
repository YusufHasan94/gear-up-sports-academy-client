import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import banner2 from "../../../assets/banner/banner2.jpg";
import banner3 from "../../../assets/banner/banner3.jpg";
import banner4 from "../../../assets/banner/banner4.jpg";
import banner5 from "../../../assets/banner/banner5.jpg";
import { TypeAnimation } from "react-type-animation";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const bannerImages = [{ 'banner': banner2, 'text': 'Game On! Summer Sports Camp' },
{ 'banner': banner3, 'text': 'Kick, Score, Soar: Sports Camp Adventures' },
{ 'banner': banner4, 'text': 'The Athletes Playground: Summer Sports Camp' },
{ 'banner': banner5, 'text': 'Goal Getters: Soccer Camp Excitement' }];

const Banner = () => {
    const {user} = useContext(AuthContext); 
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
                                            className="md:text-6xl text-2xl text-white uppercase font-mono mb-10 font-semibold"
                                            repeat={0}
                                        />
                                        {user?
                                            '':
                                            <button className="px-4 py-2 rounded-xl bg-red-400 text-white text-xl">
                                                Enroll Now
                                            </button>
                                        }
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