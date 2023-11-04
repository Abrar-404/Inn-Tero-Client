import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const ErrorElements = () => {
  return (
    <div className="mx-auto max-w-[425px] md:max-w-[768px] lg:max-w-[1400px]">
      <div className="mx-auto relative">
        <img
          className="w-full h-screen mx-auto"
          src="https://i.ibb.co/KDm3CH4/gif-404.gif"
          alt=""
        />
        <Link to="/">
          <div className="absolute lg:top-[710px] lg:left-[610px] md:top-[280px] md:left-[290px] top-[280px] left-[120px]">
            <Button>
              <button className="btn rounded-full px-10">Back To Home</button>
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ErrorElements;
