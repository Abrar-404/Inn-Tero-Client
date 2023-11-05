const RoomCard = ({ room }) => {
  const { img, description } = room || {};

  return (
    <div>
      <div className="card  shadow-xl">
        <figure>
          <img className="w-[100%] h-[300px]" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {description}
            <div className="badge badge-secondary">Featured</div>
            <button className="btn btn-primary">See Details</button>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
