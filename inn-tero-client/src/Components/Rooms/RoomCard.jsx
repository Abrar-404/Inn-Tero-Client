import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
  const { img, description, _id } = room || {};

  return (
    <div>
      <div className="hero mb-10 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">{description}</p>

            <Link to={`/rooms/${_id}`}>
              <button className="btn btn-primary">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
