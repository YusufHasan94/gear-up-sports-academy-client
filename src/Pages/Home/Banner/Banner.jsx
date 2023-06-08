import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import banner1 from "../../../assets/banner/banner1.jpg";
import banner2 from "../../../assets/banner/banner2.jpg";
import banner3 from "../../../assets/banner/banner3.jpg";
import banner4 from "../../../assets/banner/banner4.jpg";
import banner5 from "../../../assets/banner/banner5.jpg";
import banner6 from "../../../assets/banner/banner6.jpg";


const Banner = () => {
    return (
        <div>
           <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide><img src={banner1} alt="" className="w-full"/></SwiperSlide>                
            <SwiperSlide><img src={banner2} alt="" className="w-full"/></SwiperSlide>                
            <SwiperSlide><img src={banner3} alt="" className="w-full"/></SwiperSlide>                
            <SwiperSlide><img src={banner4} alt="" className="w-full"/></SwiperSlide>                
            <SwiperSlide><img src={banner5} alt="" className="w-full"/></SwiperSlide>                
            <SwiperSlide><img src={banner6} alt="" className="w-full"/></SwiperSlide>                
            </Swiper>
        </div>
    );
};

export default Banner;