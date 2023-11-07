const Video = () => {
  return (
    <div className="relative w-full h-screen flex flex-row md:flex-row lg:flex-col items-center justify-evenly">
      ;
      <div className="flex">
        <h1 className="text-black font-bold text-4xl">Elegancy</h1>
        <div>
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 justify-end object-cover rounded-lg mt-32 w-[600px] h-[300px]"
          >
            <source
              className=""
              src="https://assets.mixkit.co/videos/preview/mixkit-neon-light-of-a-hotel-flickering-in-the-dark-41154-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* <div className="lg:w-5/6 md:w-full w-full rounded-lg mx-auto mt-20 bg-opacity-70 bg-black">
        <div className="pt-44 mx-auto flex justify-end mr-16 mb-40">
          Elegancy
        </div>
      </div> */}
    </div>
  );
};

export default Video;

// import React from 'react';

// const Video = () => {
//   return (
//     <div>

//     </div>
//   );
// };

// export default Video;
