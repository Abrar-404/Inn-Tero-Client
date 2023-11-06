import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

// import bg from '../../assets/326195978.jpg';

const MainLayout = () => {
  // const backBg = {
  //   backgroundImage: `url(${bg})`,
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundAttachment: '',
  // };
  return (
    <div
      // style={backBg}
      className="mx-auto lg:max-w-[1400px] md:max-w-[768px] max-w-[425px]"
    >
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
