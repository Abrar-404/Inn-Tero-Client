import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Components/Layouts/MainLayout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import MyBookings from './Components/Bookings/MyBookings';
import Gallery from './Components/Gallery/Gallery';
import AuthProvider from './Providers/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Rooms from './Components/Rooms/Rooms';
import ErrorElements from './Components/ErrorElements/ErrorElements';
import DiscountDetail from './Components/DiscountDetail/DiscountDetail';
import Feature from './Components/Feature/Feature';
import Newsletter from './Components/Newsletter/Newsletter';
import RoomDetails from './Components/Rooms/RoomDetails';
import AddRoom from './Components/AddRoom/AddRoom';
import Bookings from './Components/Bookings/Bookings';
import AboutUs from './Components/AboutUs/AboutUs';
import UpdateDateFunction from './Components/UpdateDate/UpdateDateFunction';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorElements></ErrorElements>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/discountDetails',
        element: <DiscountDetail></DiscountDetail>,
      },
      {
        path: '/feature',
        element: <Feature></Feature>,
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/myBookings',
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: '/bookings',
        element: (
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        ),
      },
      {
        path: '/rooms',
        element: <Rooms></Rooms>,
      },
      {
        path: '/addRoom',
        element: (
          <PrivateRoute>
            <AddRoom></AddRoom>
          </PrivateRoute>
        ),
      },
      {
        path: '/addRoom/:id',
        element: (
          <PrivateRoute>
            <AddRoom></AddRoom>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://inn-tero-server-3843g90ke-abrar-404.vercel.app/rooms/${params.id}`
          ),
      },
      {
        path: '/rooms/:id',
        element: <RoomDetails></RoomDetails>,
        loader: ({ params }) =>
          fetch(
            `https://inn-tero-server-3843g90ke-abrar-404.vercel.app/rooms/${params.id}`
          ),
      },
      {
        path: '/newsletter',
        element: (
          <PrivateRoute>
            <Newsletter></Newsletter>
          </PrivateRoute>
        ),
      },
      {
        path: '/updateDateFunction/:id',
        element: (
          <PrivateRoute>
            <UpdateDateFunction></UpdateDateFunction>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://inn-tero-server-3843g90ke-abrar-404.vercel.app/rooms/${params.id}`
          ),
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
