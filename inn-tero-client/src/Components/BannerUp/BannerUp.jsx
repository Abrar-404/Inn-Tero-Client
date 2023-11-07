// import banner from '../../assets/banner.png';
import '../Animista/animista.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  const bannerBg = {
    backgroundImage: `url(https://i.ibb.co/1KLX3d1/5-star-hotel-room-wallpaper-preview.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: '',
  };

  return (
    <div>
      <div
        style={bannerBg}
        className="lg:w-[90%] md:w-[100%] w-[100%] rounded-lg mx-auto mt-20"
      >
        <div className="bg-opacity-70 bg-black">
          <div className="pt-44 mx-auto flex justify-start ml-16 mb-40">
            <div className="mb-56">
              <h1 className="text-4xl font-bold font-serif text-white mt-40">
                To travel is <br />
                <span className="font-cursive ml-10 text-8xl">to live</span>
              </h1>
              <Link to="/gallery">
                <button className="btn mt-10 bg-[#F0E6E7]">
                  Visit Our Gallery
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
