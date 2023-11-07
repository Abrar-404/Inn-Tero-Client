const Video = () => {
  return (
    <div className="relative w-full h-screen">
      <h1 className="font-lovely text-3xl flex text-center">
        The Stay You Seek
      </h1>
      ;
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-neon-light-of-a-hotel-flickering-in-the-dark-41154-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="lg:w-5/6 md:w-full w-full rounded-lg mx-auto mt-20 bg-opacity-70 bg-black">
        <div className="pt-44 mx-auto flex justify-end mr-16 mb-40">
          Elegancy
        </div>
      </div>
    </div>
  );
};

export default Video;
