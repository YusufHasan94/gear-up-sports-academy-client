import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { useState } from 'react';
import { useEffect } from 'react';

// import { EffectCards } from 'swiper/modules';


const AboutCards = ()=> {
  const [images, setImages] = useState([]);
  useEffect(()=>{
    fetch('/json/camping.json')
    .then(res=>res.json())
    .then(data=>setImages(data));
  },[])
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        // modules={[EffectCards]}
        className="mySwiper"
      >
        {
          images.map((image)=>(
            <SwiperSlide key={image.id}>
              <img src={image.image} alt="" className='rounded-se-xl rounded-es-xl h-52 w-full' />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
 export default AboutCards;