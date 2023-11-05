import { useEffect, useState } from 'react';
import RoomCard from './RoomCard';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/rooms')
      .then(res => res.json())
      .then(data => setRooms(data));
  }, []);

  return (
    <div>
      <h1>Rooms : {rooms?.length}</h1>
      <div>
        {
          rooms?.map(room => <RoomCard key={room?._id} room={room}></RoomCard>)
        }
      </div>
    </div>
  );
};

export default Rooms;
