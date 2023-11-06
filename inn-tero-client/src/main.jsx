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
        path: '/myBookings',
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: '/rooms',
        element: (
          <PrivateRoute>
            <Rooms></Rooms>
          </PrivateRoute>
        ),
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
          fetch(`http://localhost:5000/rooms/${params.id}`),
      },
      {
        path: '/rooms/:id',
        element: (
          <PrivateRoute>
            <RoomDetails></RoomDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/rooms/${params.id}`),
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
        path: '/gallery',
        element: (
          <PrivateRoute>
            <Gallery></Gallery>
          </PrivateRoute>
        ),
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
