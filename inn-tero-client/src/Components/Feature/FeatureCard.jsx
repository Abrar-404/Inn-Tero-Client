import { Link } from 'react-router-dom';
import '../Styles/card.css';

const FeatureCard = ({ feature }) => {
  const { img, description } = feature || {};
  return (
    <div>
      <div className="card scale-in-center shadow-xl">
        <figure>
          <img
            className="w-[100%] scale-in-center h-[300px]"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-xl">
            {description}
            <div className="badge badge-secondary">Featured</div>
          </h2>
          <Link to="/rooms">
            <button className="btn btn-outline w-full">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
