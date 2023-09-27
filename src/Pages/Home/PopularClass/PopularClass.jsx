import { Pagination } from 'swiper';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from 'react';

const PopularClass = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://gear-up-sports-academy-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div className='md:m-10 my-10'>
            <SectionTitle heading="Popular Class"></SectionTitle>
            <div className='my-10 mx-10 md:mx-4'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        }, 375: {
                            slidesPerView: 1,
                        }, 425: {
                            slidesPerView: 1,
                        }, 768: {
                            slidesPerView: 2,
                        }, 1024: {
                            slidesPerView: 3,
                        }, 1440: {
                            slidesPerView: 4,
                        }


                    }}
                    modules={[Pagination]}
                >
                    {
                        classes.map(data => (
                            <SwiperSlide key={data._id} style={{display: 'flex', justifyContent: 'center'}}>
                                <div className="card w-80 bg-base-100 shadow-xl">
                                    <figure><img src={data.classImage} alt="Shoes" className='h-64 w-full' /></figure>
                                    <div className="card-body">
                                        <h2 className="text-center text-xl font-semibold">{data.className}</h2>
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

export default PopularClass;