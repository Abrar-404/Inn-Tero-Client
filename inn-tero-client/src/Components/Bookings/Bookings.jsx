const Bookings = ({ booking }) => {
  const { img, description, title } = booking || {};

  return (
    <div>
      <div className="hero mb-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            className="max-w-[400px]  h-[300px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
