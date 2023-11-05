import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import NewsHome from '../Newsletter/NewsHome';
import Parallax from '../Parallax/Parallax';
import Video from '../Video/Video';

const Home = () => {
  return (
    <div className="space-y-10">
      <Banner></Banner>
      <Video></Video>
      <Parallax></Parallax>
      <Feature></Feature>
      <NewsHome></NewsHome>
      <Footer></Footer>
    </div>
  );
};

export default Home;
