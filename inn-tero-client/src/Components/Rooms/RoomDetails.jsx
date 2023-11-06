import { useLoaderData } from 'react-router-dom';

const RoomDetails = () => {
  const roomDetail = useLoaderData();
  console.log(roomDetail);

  const { title, img, rooms } = roomDetail;

  return (
    <div>
      <img src={rooms[0].img1} alt="" />
      <img src={rooms[1].img2} alt="" />
      <img src={rooms[2].img3} alt="" />
      <img src={rooms[3].img4} alt="" />
    </div>
  );
};

export default RoomDetails;
