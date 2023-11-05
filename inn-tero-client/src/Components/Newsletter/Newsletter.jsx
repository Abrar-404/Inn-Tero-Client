import { TypeAnimation } from 'react-type-animation';

const Newsletter = () => {
  return (
    <div>
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
            <form className="card-body">
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
  );
};

export default Newsletter;
