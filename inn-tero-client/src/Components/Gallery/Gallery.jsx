import PreLoader from '../Preloader/Preloader';

const Gallery = () => {
  return (
    <div>
      <PreLoader></PreLoader>
      <h1 className="text-center font-bold font-script text-8xl mt-20 mb-32">
        Visual Your{' '}
        <span className="text-[#aa7474] font-extrabold text-9xl">
          {' '}
          Stayings
        </span>
      </h1>

      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10">
        <img
          className="rounded-lg transform scale-100 hover:scale-110 transition-transform"
          src="https://i.ibb.co/QM1nwhk/istockphoto-182686026-170667a.jpg"
          alt=""
        />
        <img
          className="mt-10 lg:h-[500px] md:h-[300px] rounded-lg transform scale-100 hover:scale-110 transition-transform"
          src="https://i.ibb.co/ZXKWGhJ/HD-wallpaper-bar-lounge-in-a-skyscraper-skyscraper-lounge-view-bar.jpg"
          alt=""
        />
        <img
          className="rounded-lg transform scale-100 hover:scale-110 transition-transform"
          src="https://i.ibb.co/0X2XQtf/background-music-hotels-lobby.jpg"
          alt=""
        />
        <img
          className="rounded-lg transform scale-100 hover:scale-110 transition-transform"
          src="https://i.ibb.co/LZVx1Tb/HD-wallpaper-hanging-lights-in-bar-setup-lounge.jpg"
          alt=""
        />
        <img
          className="rounded-lg transform scale-100 hover:scale-110 transition-transform"
          src="https://i.ibb.co/TRnjd6r/1000-F-539652332-Z9-M3f-Hz-GJu-Vsu1-ABWv-L0z-J9-UNWTZrq-Nc.jpg "
          alt=""
        />
        <img
          className=" lg:h-[500px] md:h-[300px] rounded-lg transform scale-100 hover:scale-110 transition-transform"
          src="https://i.ibb.co/dPzv48X/desktop-wallpaper-hotel-full-page-hotel-reception-interior-hotel-bedroom-interior-outstanding-hote-d.jpg"
          alt=""
        />
        <img
          className="rounded-lg lg:h-[500px] md:h-[300px] transform scale-100 hover:scale-110 transition-transform"
          src="https://i.ibb.co/bHXDPQr/1000-F-539652097-j-Vy-Vv-PJk-VGUBI51-Jj-Rwbm-PFMOv4-BEK3-G.jpg"
          alt=""
        />
        <img
          className="rounded-lg transform scale-100 hover:scale-110 transition-transform"
          src="https://i.ibb.co/Pm7BczT/istockphoto-154891054-612x612.jpg"
          alt=""
        />
        <img
          className="rounded-lg transform scale-100 lg:h-[500px] md:h-[300px] hover:scale-110 transition-transform"
          src="https://i.ibb.co/g4FbxvL/modern-bedroom-interior-with-neon-lights-glowing-ambient-in-the-evening-ai-generated-photo.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
