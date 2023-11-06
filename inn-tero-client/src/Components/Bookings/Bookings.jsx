// import { useState } from 'react';
// import Swal from 'sweetalert2';
// const Bookings = ({ booking, booked, setBooked }) => {
//   const { img, service, _id, date, price, description } = booking || {};
//   console.log(booking);

//   const handleDelete = id => {
//     Swal.fire({
//       imageUrl: `${img}`,
//       imageWidth: '200px',
//       imageHeight: '100px',
//       title: `<b> ${service}`,
//       html: `

//       <label for="description">Description: ${description}</label> <br>
//       <br>
//       <label for="price"><b>Price: ${price}</label> <br>
//       <br>
//       <label for="date"><b>Date: ${date}</label> <br>
//        <br>
//        <label for="description">Are You Sure?</label>`,
//       text: 'Are You Sure?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!',
//     }).then(result => {
//       if (result.isConfirmed) {
//         // Swal.fire({
//         //   title: 'Deleted!',
//         //   text: 'Your file has been deleted.',
//         //   icon: 'success',
//         // });
//         fetch(`http://localhost:5000/addRoom/${id}`, {
//           method: 'DELETE',
//         })
//           .then(res => res.json())
//           .then(data => {
//             console.log(data);
//             if (data.deletedCount > 0) {
//               Swal.fire({
//                 title: 'Deleted!',
//                 text: 'Your file has been deleted.',
//                 icon: 'success',
//               });
//               // eslint-disable-next-line react/prop-types
//               const remaining = booked?.filter(bookee => bookee?._id !== _id);
//               setBooked(remaining);
//             }
//           });
//       }
//     });

//     // if (proceed) {
//     //   fetch(`http://localhost:5000/addRoom/${id}`, {
//     //     method: 'DELETE',
//     //   })
//     //     .then(res => res.json())
//     //     .then(data => {
//     //       console.log(data);
//     //       if (data.deletedCount > 0) {
//     //         Swal.fire({
//     //           title: 'Deleted!',
//     //           text: 'Your file has been deleted.',
//     //           icon: 'success',
//     //         });
//     //       }
//     //     });
//     // }
//   };

//   return (
//     <div>
//       <div className="hero mb-10">
//         <div className="hero-content flex-col lg:flex-row">
//           <img
//             src={img}
//             className="max-w-[400px]  h-[300px] rounded-lg shadow-2xl"
//           />
//           <div>
//             <h1 className="text-5xl font-bold"></h1>
//             <p className="py-6">{service}</p>

//             <div className="gap-10 flex items-center">
//               <button
//                 onClick={() => handleDelete(_id)}
//                 className="btn btn-primary"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bookings;

import Swal from 'sweetalert2';

// eslint-disable-next-line react/prop-types
const Bookings = ({ booking, setBookings }) => {
  const { img, service, _id, date, price, description } = booking || {};

  const handleDelete = id => {
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
      confirmButtonText: 'Yes, delete it!',
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
                text: 'Your file has been deleted.',
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
            <h1 className="text-5xl font-bold">{service}</h1>
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
