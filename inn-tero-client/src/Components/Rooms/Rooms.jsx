// import { useEffect, useState } from 'react';
// import RoomCard from './RoomCard';

// const Rooms = () => {
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     fetch('https://inn-tero-server.vercel.app/rooms')
//       .then(res => res.json())
//       .then(data => setRooms(data));
//   }, []);

//   return (
//     <div>
//       {/* <h1>Rooms : {rooms?.length}</h1> */}
//       <div>
//         {rooms?.map(room => (
//           <RoomCard key={room?._id} room={room}></RoomCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Rooms;

import { useEffect, useState } from 'react';
import RoomCard from './RoomCard';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedValue, setSelectedValue] = useState('all');
  // const [availables, setAvailables] = useState([]);

  // useEffect(() => {
  //   fetch('https://inn-tero-server.vercel.app/rooms')
  //     .then(res => res.json())
  //     .then(data => setRooms(data));
  // }, []);

  useEffect(() => {
    if (selectedValue === 'low') {
      fetch('https://inn-tero-server.vercel.app/sortedPrice/low')
        .then(res => res.json())
        .then(data => setRooms(data));
    } else if (selectedValue === 'high') {
      fetch('https://inn-tero-server.vercel.app/sortedPrice/high')
        .then(res => res.json())
        .then(data => setRooms(data));
    } else {
      fetch('https://inn-tero-server.vercel.app/rooms')
        .then(res => res.json())
        .then(data => setRooms(data));
    }
  }, [selectedValue]);

  const handleOnChange = event => {
    const selectedOptionValue = event.target.value;
    setSelectedValue(selectedOptionValue);
    // console.log(selectedOptionValue);
  };

  return (
    <div>
      <div className="flex justify-center">
        <form className="">
          <select
            onChange={handleOnChange}
            className="select input input-bordered input-secondary w-full max-w-xs "
            name="sortPrice"
            value={selectedValue}
          >
            <option value={'all'}>All Price</option>
            <option value={'high'}>Price high</option>
            <option value={'low'}>Price low</option>
          </select>
        </form>
      </div>
      {/* <h1>Rooms : {rooms?.length}</h1> */}
      <div>
        {rooms?.map(room => (
          <RoomCard key={room?._id} room={room}></RoomCard>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
