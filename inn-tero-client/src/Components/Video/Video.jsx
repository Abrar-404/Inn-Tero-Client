const Video = () => {
  return (
    <div className="relative w-full h-screen mx-auto flex items-center justify-center">
      <div>
        <div className="flex mx-auto justify-center">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 lg:ml-[30%] md:ml-[10%] object-cover rounded-lg lg:mt-20  w-[600px] h-[300px]"
          >
            <source
              className=""
              src="https://assets.mixkit.co/videos/preview/mixkit-neon-light-of-a-hotel-flickering-in-the-dark-41154-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <h1 className="text-8xl lg:mt-64 md:mt-72 mt-80 font-script font-extrabold">
            Elegant
          </h1>
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

// const Video = () => {
//   return (
//     <div className="flex">
//       <div>
//         <video
//           autoPlay
//           loop
//           muted
//           className="w-[500px] flex justify-center rounded-lg "
//         >
//           <source
//             src="https://assets.mixkit.co/videos/preview/mixkit-neon-light-of-a-hotel-flickering-in-the-dark-41154-large.mp4"
//             type="video/mp4"
//           />
//           <source src="/video-example.mp4" type="video/mp4" />
//           {/* Sorry, your browser doesn't support videos. */}
//         </video>
//       </div>
//       <h1>Elegancy</h1>
//     </div>
//   );
// };

// export default Video;
