import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
  const { img, description, _id, title, status, price } = room || {};

  return (
    <div>
      <div className="hero mb-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            className="max-w-[400px]  h-[300px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-6xl font-bold  font-script">{title}</h1>
            <p className="py-6">{description}</p>
            <h1 className="text-xl font-bold mb-5 font-script">
              Price: ${price}
            </h1>

            <div className="gap-10 flex items-center">
              <Link to={`/rooms/${_id}`}>
                <button className="button-86" role="button">
                  See Details
                </button>
              </Link>

              <div className="badge badge-secondary">{status}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
