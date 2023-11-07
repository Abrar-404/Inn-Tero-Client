import { Link } from 'react-router-dom';
import '../Styles/card.css';

export const NewsHome = () => {
  return (
    <div className="">
      <div className="text-center scale-in-center mt-20 mb-5">
        <h1 className="text-2xl font-bold text-black">
          Subscribe to Our Newsletter for Exciting offers, Update and Deals
        </h1>
      </div>
      <div className="card lg:w-[50%] scale-in-center md:w-[70%] w-[100%] mx-auto shadow-xl">
        <figure>
          <img
            className="w-[100%] h-[500px]"
            src="https://i.ibb.co/bvCYNJ3/preview.gif"
            alt="Shoes"
          />
        </figure>
        <div className="items-center mx-auto">
          <Link to="/newsletter">
            <button className="btn btn-outline w-[100%]  btn-accent">
              Subscribe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
