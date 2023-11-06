// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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
  const { feature, rooms, experience, _id } = roomDetail;
  //   console.log(roomDetail);
  return (
    <>
      <div className="flex justify-center mt-20">
        <h1 className="text-3xl font-bold text-black">
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

      <div>
        <Link to={`/addRoom/${_id}`}>
          <button className="btn btn-primary">Book Now</button>
        </Link>
      </div>

      <div className="mx-auto lg:items-center">
        <Tabs>
          <TabList>
            <Tab>Feature</Tab>

            <Tab>Customers Experience</Tab>
            <Tab>Offerings</Tab>
          </TabList>

          <TabPanel>
            <p>{feature}</p>
          </TabPanel>
          <TabPanel>
            <p>{experience}</p>
          </TabPanel>
          <TabPanel>
            <p>
              <b>Princess Peach</b> (
              <i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>) is
              a character in Nintendo's Mario franchise. Originally created by
              Shigeru Miyamoto, Peach is the princess of the fictional Mushroom
              Kingdom, which is constantly under attack by Bowser. She often
              plays the damsel in distress role within the series and is the
              lead female. She is often portrayed as Mario's love interest and
              has appeared in Super Princess Peach, where she is the main
              playable character.
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <b>Yoshi</b> (<i>ヨッシー Yosshī, [joɕ.ɕiː]</i>) (
              <i>English: /ˈjoʊʃi/ or /ˈjɒʃi/</i>), once romanized as Yossy, is
              a fictional anthropomorphic dinosaur who appears in video games
              published by Nintendo. Yoshi debuted in Super Mario World (1990)
              on the Super Nintendo Entertainment System as Mario and Luigi's
              sidekick. Yoshi later starred in platform and puzzle games,
              including Super Mario World 2: Yoshi's Island, Yoshi's Story and
              Yoshi's Woolly World. Yoshi also appears in many of the Mario
              spin-off games, including Mario Party and Mario Kart, various
              Mario sports games, and Nintendo's crossover fighting game series
              Super Smash Bros. Yoshi belongs to the species of the same name,
              which is characterized by their variety of colors.
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <b>Toad</b> (<i>Japanese: キノピオ Hepburn: Kinopio</i>) is a
              fictional character who primarily appears in Nintendo's Mario
              franchise. Created by Japanese video game designer Shigeru
              Miyamoto, he is portrayed as a citizen of the Mushroom Kingdom and
              is one of Princess Peach's most loyal attendants; constantly
              working on her behalf. He is usually seen as a non-player
              character (NPC) who provides assistance to Mario and his friends
              in most games, but there are times when Toad(s) takes center stage
              and appears as a protagonist, as seen in Super Mario Bros. 2,
              Wario's Woods, Super Mario 3D World, and Captain Toad: Treasure
              Tracker.
            </p>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
