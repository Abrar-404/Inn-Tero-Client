import { BiSolidRightArrow } from 'react-icons/bi';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../Banner/banner.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Banner() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="relative"
            src="https://i.ibb.co/xJsNGwy/df16735c3435dd5ab858dbfffcd60523.jpg"
          />
          <button className="btn absolute top-[80%] left-[80%] btn-outline btn-accent">
            <BiSolidRightArrow></BiSolidRightArrow>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative"
            src="https://i.ibb.co/9rxsh9C/syioknya1-5e36ad6461c19.jpg"
          />
          <button className="btn absolute top-[80%] left-[80%] btn-outline btn-accent">
            <BiSolidRightArrow></BiSolidRightArrow>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative"
            src="https://i.ibb.co/7b7RPrM/emtbook-23apr-lp2.png"
          />
          <button className="btn absolute top-[80%] left-[80%] btn-outline btn-accent">
            <BiSolidRightArrow></BiSolidRightArrow>
          </button>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
