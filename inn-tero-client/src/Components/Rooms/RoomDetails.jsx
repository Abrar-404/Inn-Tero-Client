import { useLoaderData } from 'react-router-dom';

const RoomDetails = () => {
  const roomDetail = useLoaderData();

  const { title, img } = roomDetail;

  return (
    <div>
      <img src={img} alt="" />
    </div>
  );
};

export default RoomDetails;
