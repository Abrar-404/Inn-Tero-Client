import PreLoader from '../Preloader/Preloader';
import './about.css';

const AboutUs = () => {
  return (
    <>
      <PreLoader></PreLoader>
      <div className="">
        <div className="mx-auto flex flex-col items-center md:flex-col lg:flex-row gap-20 mt-32 ml-20">
          <img
            className="h-[500px] rounded-lg w-[300px] roll-in-left"
            src="https://i.ibb.co/f4XTMcx/Tablet-Hotels-Public-Mirrored.jpg"
            alt=""
          />
          <img
            className="h-[500px] mt-40 rounded-lg w-[300px] roll-in-left"
            src="https://i.ibb.co/QM1nwhk/istockphoto-182686026-170667a.jpg"
            alt=""
          />

          <div className="font-bold roll-in-blurred-right">
            <h1 className="lg:text-8xl md:text-6xl text-5xl font-script">
              Inn-Tero
            </h1>
            <h1 className="lg:text-2xl md:text-xl text-base">
              We Provide You The Luxury
            </h1>
            <h1 className="lg:text-4xl md:text-3xl text-2xl">
              That Nobody <br />
              <span className="lg:text-9xl md:text-7xl text-6xl font-cursive text-pink-600 ">
                Offered
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
