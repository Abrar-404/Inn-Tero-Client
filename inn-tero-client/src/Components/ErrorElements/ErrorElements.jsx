import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const ErrorElements = () => {
  return (
    <div className="mx-auto mt-20 h-screen">
      <img
        className="mx-auto h-[400px] w-[600px]"
        src="https://i.ibb.co/ypzkwCB/404-animation.gif"
        alt=""
      />
      <div className="mx-auto flex justify-center">
        <Link to="/">
          <Button>
            <button className="btn rounded-full bg-slate-500 text-white px-10">
              Back To Home
            </button>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorElements;
