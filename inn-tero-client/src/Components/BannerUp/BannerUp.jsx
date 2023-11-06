import banner from '../../assets/banner.png';
import '../Animista/animista.css';

const BannerUp = () => {
  return (
    <div className="mt-5 flex justify-start lg:mb-40 md:mb-36">
      <div className="mx-auto items-center flex justify-center">
        <img
          className="lg:w-[100%] relative lg:h-[400px] md:w-[80%] md:h-[400px] w-[70%] rounded-lg kenburns-top"
          src={banner}
          alt=""
        />
        <h1 className="text-4xl font-bold lg:top-[50%] md:top-[60%] absolute text-white">
          Hotel
        </h1>
      </div>
    </div>
  );
};

export default BannerUp;
