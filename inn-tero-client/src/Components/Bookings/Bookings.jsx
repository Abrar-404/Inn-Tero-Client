import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

// eslint-disable-next-line react/prop-types
const Bookings = ({ booking, setBookings }) => {
  const {
    feature,
    rooms,
    experience,
    _id,
    offer,
    description,
    size,
    price,
    status,
    service,
    date,
    img,
  } = booking || {};

  const handleDelete = (id, date) => {
    const currentDate = new Date();
    const bookedDate = new Date(date);
    const timeDifference = bookedDate.getTime() - currentDate.getTime();
    const oneDayInMilliseconds = 25 * 60 * 60 * 1000;

    console.log('Current Date:', currentDate);
    console.log('Booked Date:', bookedDate);
    console.log('Time Difference:', timeDifference);

    if (timeDifference < oneDayInMilliseconds) {
      Swal.fire({
        title: 'Cancellation Denied',
        text: 'You can only cancel bookings one day before the booked date.',
        icon: 'error',
      });
      return;
    }
    Swal.fire({
      imageUrl: `${img}`,
      imageWidth: '200px',
      imageHeight: '100px',
      title: `<b> ${service}`,
      html: `
        <label for="description">Description: ${description}</label> <br>
        <br>
        <label for="price"><b>Price: ${price}</label> <br>
        <br>
        <label for="date"><b>Date: ${date}</label> <br>
        <br>
        <label for="description">Are You Sure?</label>`,
      text: 'Are You Sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Cancel it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addRoom/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your booking has been canceled.',
                icon: 'success',
              });

              setBookings(prevBookings =>
                prevBookings.filter(b => b._id !== id)
              );
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="hero mb-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            className="max-w-[400px]  h-[300px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-extrabold font-script">{service}</h1>
            <p className="py-6 font-lovely font-semibold">{description}</p>
            <p className="py-1 font-lovely text-2xl font-semibold">{date}</p>
            <div className="gap-10 flex items-center">
              <button
                onClick={() => handleDelete(_id)}
                className="button-86"
                role="button"
              >
                Cencel Booking
              </button>
              <Link to={`/addRoomUpdate/${_id}`}>
                <button className="button-86" role="button">
                  Change Date
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
