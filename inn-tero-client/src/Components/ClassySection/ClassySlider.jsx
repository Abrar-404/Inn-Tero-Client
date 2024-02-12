import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Styles/classy.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function ClassySlider() {
  return (
    <customSwiper>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          waitForTransition: true,
          smooth: true,
          speed: 800,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://nypost.com/wp-content/uploads/sites/2/2022/02/Hotel-feature.jpg?quality=75&strip=all"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/394798133.jpg?k=bd9662d8d5b77fffa751973d9eb78a1028e3ca811f555359f1f72919ab6ea738&o=&hp=1"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </customSwiper>
  );
}
