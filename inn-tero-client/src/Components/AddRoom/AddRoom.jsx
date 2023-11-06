import { TypeAnimation } from 'react-type-animation';
import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const AddRoom = () => {
  const addRoomDet = useLoaderData();

  const { title, price, _id, img } = addRoomDet || {};
  const { user } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const date = form.date.value;

    const add = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price,
    };
    console.log(add);

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
            imageUrl: `https://i.ibb.co/H4HnLmL/yippee-yay.gif`,
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
  };

  return (
    <div>
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
                <div className="form-control">
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
                <div className="form-control">
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
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  placeholder="Date"
                  className="input input-bordered"
                  required
                  name="date"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
