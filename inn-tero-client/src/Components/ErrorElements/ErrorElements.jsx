import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import img from '../../assets/—Pngtree—error 404 page not found_5768129.png';

const ErrorElements = () => {
  return (
    <div className="mx-auto mt-20 h-screen">
      <img className="mx-auto h-[400px] w-[600px]" src={img} alt="" />
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
