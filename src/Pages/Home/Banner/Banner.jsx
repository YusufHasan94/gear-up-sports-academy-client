import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useEffect, useState } from "react";


const Banner = () => {
    const [banners, setBanners] = useState([]);
    useEffect(()=>{
        fetch("/public/banner.json")
        .then(res => res.json())
        .then(data => setBanners(data))
    }, [])
    return (
        <div>
           <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {
                banners.map(banner => <SwiperSlide key={banner.id}><img src={banner.image} alt="" className="w-full"/></SwiperSlide>)
            }
                
            </Swiper>
        </div>
    );
};

export default Banner;