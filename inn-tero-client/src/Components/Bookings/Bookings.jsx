import Swal from 'sweetalert2';
const Bookings = ({ booking }) => {
  const { img, service, _id } = booking || {};
  console.log(booking);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: 'Deleted!',
        //   text: 'Your file has been deleted.',
        //   icon: 'success',
        // });
        fetch(`http://localhost:5000/addRoom/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });

    // if (proceed) {
    //   fetch(`http://localhost:5000/addRoom/${id}`, {
    //     method: 'DELETE',
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data);
    //       if (data.deletedCount > 0) {
    //         Swal.fire({
    //           title: 'Deleted!',
    //           text: 'Your file has been deleted.',
    //           icon: 'success',
    //         });
    //       }
    //     });
    // }
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
            <h1 className="text-5xl font-bold"></h1>
            <p className="py-6">{service}</p>

            <div className="gap-10 flex items-center">
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-primary"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
