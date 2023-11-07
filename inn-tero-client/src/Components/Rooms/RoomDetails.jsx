// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Styles/button.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../Banner/banner.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Link, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function RoomDetails() {
  const roomDetail = useLoaderData();
  const {
    feature,
    rooms,
    experience,
    _id,
    offer,
    description,
    size,
    price,
    status,
  } = roomDetail;
  //   console.log(roomDetail);
  return (
    <>
      <div className="flex justify-center mt-20">
        <h1 className="text-7xl font-bold font-script  text-black">
          Your <span className="text-red-600"> Stayings</span>
        </h1>
      </div>
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
          <img className="relative h-full" src={rooms[0].img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative h-full" src={rooms[1].img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative h-full" src={rooms[2].img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative h-full" src={rooms[3].img4} />
        </SwiperSlide>
      </Swiper>

      <Tabs>
        <div className="mx-auto justify-center flex font-script font-extrabold text-[#AA7474] text-3xl">
          <TabList>
            <Tab>Feature</Tab>

            <Tab>Customers Experience</Tab>
            <Tab>Special Offers</Tab>
            <Tab>Description</Tab>
            <Tab>Size</Tab>
            <Tab>Price Per Night</Tab>
            <Tab>Availability</Tab>
          </TabList>
        </div>

        <div className="text-center">
          <TabPanel>
            <p className="text-xl text-black">{feature}</p>
          </TabPanel>
          <TabPanel>
            <p className="text-xl text-black">{experience}</p>
          </TabPanel>
          <TabPanel>
            <p className="text-xl text-black">{offer}</p>
          </TabPanel>
          <TabPanel>
            <p className="text-xl text-black">{description}</p>
          </TabPanel>
          <TabPanel>
            <p className="text-xl text-black">{size}</p>
          </TabPanel>
          <TabPanel>
            <p className="text-xl text-black">${price}</p>
          </TabPanel>
          <TabPanel>
            <p className="text-xl text-black">{status}</p>
          </TabPanel>
        </div>
      </Tabs>

      <div className="justify-center mx-auto flex mt-20">
        <Link to={`/addRoom/${_id}`}>
          <button className="button-86" role="button">
            Book Now
          </button>
        </Link>
      </div>

      <div className="mx-auto lg:items-center"></div>
    </>
  );
}
