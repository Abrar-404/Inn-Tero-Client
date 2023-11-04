const Video = () => {
  return (
    <div>
      <div className="mx-auto flex justify-center">
        <video autoPlay className="w-[600px] h-[300px]" controls muted>
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-neon-light-of-a-hotel-flickering-in-the-dark-41154-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="mx-auto flex justify-center">
        <video
          className="w-[600px] h-[300px]"
          autoPlay
          width="640"
          height="360"
          controls
          muted
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-pan-shot-of-the-interior-of-a-hotel-room-4198-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
