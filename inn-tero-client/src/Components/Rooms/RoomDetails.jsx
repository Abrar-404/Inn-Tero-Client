import { useLoaderData } from 'react-router-dom';

const RoomDetails = () => {
  const roomDetail = useLoaderData();
  console.log(roomDetail);

  const { title, img, rooms } = roomDetail;

  return (
    <div>
      <img src={img} alt="" />
    </div>
  );
};

export default RoomDetails;
