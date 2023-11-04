import Footer from '../Footer/Footer';
import Parallex from '../Parallex/Parallex';
import '../Styles/styles.css';
import Video from '../Video/Video';

const Home = () => {
  return (
    <div className="space-y-10">
      <Video></Video>
      <Parallex></Parallex>
      <Footer></Footer>
    </div>
  );
};

export default Home;
