import { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';
import { TypeAnimation } from 'react-type-animation';

const Feature = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/feature')
      .then(res => res.json())
      .then(data => setFeatures(data));
  }, []);

  return (
    <div>
      <div className="text-center font-script font-extrabold text-[#aa7474] text-3xl mb-5 mt-20 ">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            'Featured',
            1000,
            'Rooms',
            1000,
            'Grab',
            1000,
            'Now',
            1000,
          ]}
          speed={50}
          style={{ fontSize: '2em' }}
          repeat={Infinity}
        />
      </div>

      <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 mx-auto gap-10">
        {features?.map(feature => (
          <FeatureCard key={feature?._id} feature={feature}></FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default Feature;
