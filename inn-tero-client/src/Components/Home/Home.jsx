import Banner from '../Banner/Banner';
import BannerUp from '../BannerUp/BannerUp';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';

import Parallax from '../Parallax/Parallax';

import Timeline from '../Timeline/Timeline';
import Video from '../Video/Video';
import { NewsHome } from './../Newsletter/NewsHome';
import CarouselSlider2 from './../Slider/CarouselSlider2';

const Home = () => {
  return (
    <div className="space-y-10">
      <BannerUp></BannerUp>
      <Banner></Banner>

      <div>
        <CarouselSlider2></CarouselSlider2>
      </div>

      <div className="mt-20">
        <h1 className="text-center mt-10 text-5xl font-cursive font-bold mb-10">
          Special Services{' '}
          <span className="text-[#aa7474]"> We Are Providing</span>
        </h1>
        <Timeline></Timeline>
      </div>
      <div>
        <h1 className="text-center mt-10 text-5xl text-[#aa7474] font-cursive font-bold mb-10">
          The Hotel You Seek
        </h1>
        <Video></Video>
      </div>
      <Parallax></Parallax>
      <Feature></Feature>
      <NewsHome></NewsHome>
      <Footer></Footer>
    </div>
  );
};

export default Home;
