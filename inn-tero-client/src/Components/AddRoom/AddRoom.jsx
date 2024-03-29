import { TypeAnimation } from 'react-type-animation';
import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles
import PreLoader from '../Preloader/Preloader';

const AddRoom = () => {
  const addRoomDet = useLoaderData();

  const { title, price, _id, img, description, offer, size, status, service } =
    addRoomDet || {};
  const { user } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const date = form.date.value;

    // Check if the selected date is already booked
    if (bookedDates.includes(date)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'This room is already booked for the selected date.',
      });
      return;
    }

    const add = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price,
      description,
      offer,
      size,
      status,
    };

    Swal.fire({
      imageUrl: `${img}`,
      imageWidth: '200px',
      imageHeight: '100px',
      title: `<b> ${title}`,
      html: `
      <label for="description">Description: ${description}</label> <br>
      <br>
      <label for="price"><b>Price: ${price}</label> <br>
      <br>
      <label for="date"><b>Date: ${date}</label> <br>
      <br>
      <label for="description">Are You Sure?</label>`,
      text: 'Are You Sure?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Confirm it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch('http://localhost:5000/addRoom', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(add),
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                imageUrl: 'https://i.ibb.co/H4HnLmL/yippee-yay.gif',
                title: 'WOOHOOO!!!! Welcome To The World!!!!',
                width: 600,
                padding: '3em',
                color: '#7CFC00',
                background: '#fff url()',
                backdrop: `
              rgba(0,0,123,0.4)
              top
              no-repeat
            `,
              });
            }
          });
      }
    });
  };
  const [bookedDates, setBookedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    // Fetch booked dates for the current room using the service_id
    fetch(`http://localhost:5000/getBookedDates?service_id=${_id}`)
      .then(response => response.json())
      .then(data => {
        setBookedDates(data.bookedDates);
      });
  }, [_id]); // Fetch booked dates whenever the _id changes

  return (
    <div>
      <PreLoader></PreLoader>
      <h1>Add Room : {title}</h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <div className="text-center text-red-600 text-3xl mt-20 font-bold">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  'Submit',
                  1000,
                  'To',
                  1000,
                  'Our',
                  1000,
                  'Newsletter',
                  1000,
                ]}
                speed={50}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
              />
            </div>
            <form
              id="deleteSubmit"
              onSubmit={handleSubmit}
              className="card-body"
            >
              <div className="flex lg:flex-row flex-col md:flex-row gap-10">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    defaultValue={user?.displayName}
                    className="input input-bordered"
                    required
                    name="name"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    defaultValue={user?.email}
                    className="input input-bordered"
                    required
                    name="email"
                  />
                </div>
              </div>
              <div className="form-control flex gap-5">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                  name="price"
                  defaultValue={price}
                />
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Text"
                  className="input input-bordered"
                  required
                  name="text"
                  defaultValue={title}
                />
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  placeholder="Date"
                  className="input input-bordered"
                  required
                  name="date"
                />
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  className="input input-bordered"
                  required
                  name="description"
                  defaultValue={description}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
          <div>
            <div className="booked-dates text-black">
              <h2 className="font-bold text-xl">Booked Dates for {title}</h2>
              {bookedDates.length === 0 ? (
                <p className="font-bold text-xl">
                  No booked dates for this room.
                </p>
              ) : (
                <ul className="text-lg ">
                  {bookedDates.map(date => (
                    <li key={date}>{date}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="calendar-container">
              <h2>Calendar</h2>
              <Calendar
                tileDisabled={({ date }) =>
                  bookedDates.some(
                    bookedDate =>
                      date.toDateString() ===
                      new Date(bookedDate).toDateString()
                  )
                }
                value={selectedDate}
                onChange={date => setSelectedDate(date)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
