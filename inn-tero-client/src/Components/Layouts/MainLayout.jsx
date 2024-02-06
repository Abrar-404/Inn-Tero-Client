import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

// import bg from '../../assets/326195978.jpg';

const MainLayout = () => {
  // const backBg = {
  //   backgroundImage: `url(https://i.ibb.co/wzSK443/images.jpg)`,
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundAttachment: '',
  // };
  return (
    <div
      // style={backBg}
      className=""
    >
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
