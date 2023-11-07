import { Link } from 'react-router-dom';
// import '../Styles/card.css';
import '../Styles/feature.css';

const FeatureCard = ({ feature }) => {
  const { img, description } = feature || {};
  return (
    <div>
      <div className="card scale-in-center  shadow-xl ">
        <figure>
          <img
            className="w-[100%] roll-in-blurred-right h-[300px]"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body transform scale-100 hover:scale-110 transition-transform ">
          <h2 className="card-title text-xl ">
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
