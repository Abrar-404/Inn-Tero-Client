import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Bookings from './Bookings';

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `https://inn-tero-server-jii5q6o57-abrar-404.vercel.app/addRoom?email=${user.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then(res => {
      setBookings(res.data);
    });
  }, [url]);

  return (
    <div>
      {/* <h1>bookings: {bookings?.length}</h1> */}
      <div>
        {bookings.map(booking => (
          <Bookings
            key={booking._id}
            booking={booking}
            setBookings={setBookings}
          />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
