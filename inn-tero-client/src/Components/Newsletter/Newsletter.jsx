import { TypeAnimation } from 'react-type-animation';
import Swal from 'sweetalert2';
import img from '../../assets/banner.png';
import PreLoader from '../Preloader/Preloader';

const Newsletter = () => {
  const backBg = {
    backgroundImage: `url${img}`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: '',
  };

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const description = form.description.value;

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
    document.getElementById('deleteSubmit').reset();
  };

  return (
    <>
      <PreLoader> </PreLoader>
      <div>
        <div style={backBg} className="hero min-h-screen  bg-base-200">
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
                <div className="flex lg:flex-row flex-col md:flex-col gap-10">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
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
                      className="input input-bordered"
                      required
                      name="email"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Description"
                    className="input input-bordered"
                    required
                    name="description"
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
    </>
  );
};

export default Newsletter;
