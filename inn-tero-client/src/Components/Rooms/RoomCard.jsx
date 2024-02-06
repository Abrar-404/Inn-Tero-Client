import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
  const { img, description, _id, title, status, price } = room || {};

  const [reviews, setReviews] = useState([]);

  const url = `https://inn-tero.web.app/reviews/${_id}`;
  useEffect(() => {
    // setReviews(data);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setReviews(data);
      });
  }, []);
  console.log(reviews);

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
            <p className="font-script font-bold text-2xl mb-2">
              Price : ${price}
            </p>
            <div className="gap-10 flex items-center">
              <Link to={`/rooms/${_id}`}>
                <button className="button-86" role="button">
                  See Details
                </button>
              </Link>

              <div className="badge badge-secondary">{status}</div>
              <p className="px-2 py-4 bg-yellow-600 rounded-lg text-black font-bold">
                Total Reviews:{reviews?.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
