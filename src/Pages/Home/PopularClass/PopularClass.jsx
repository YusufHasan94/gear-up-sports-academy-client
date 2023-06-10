import { Pagination } from 'swiper';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from 'react';

const PopularClass = () => {
    const [classes, setClasses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=> res.json())
        .then(data => setClasses(data))
    },[])
    return (
        <div className='my-10'>
            <SectionTitle heading="Popular Class"></SectionTitle>
            <div className='my-10 mx-10 md:mx-4'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        }, 375: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },425: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },1440: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }

                        
                    }}
                    modules={[Pagination]}
                >
                    {
                        classes.map(data => (
                            <SwiperSlide key={data._id}>
                                <div className="card w-80 bg-base-100 shadow-xl">
                                    <figure><img src={data.image} alt="Shoes" className='h-64' /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{data.name}</h2>
                                        <p><span className='font-semibold'>Instructor Name:</span> {data.instructorName}</p>
                                        <div className="card-actions justify-end">
                                        {/* <button className="btn bg-[#c74a73] text-white hover:text-black">View Details</button> */}
                                        </div>
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