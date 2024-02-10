import { useEffect } from 'react';
import '../Styles/circletext.css';
import '../Styles/customfont.css';

const TextCircle = () => {
  useEffect(() => {
    const text = document.querySelector('.text p');
    if (text) {
      text.innerHTML = text.innerText
        .split('')
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
        )
        .join('');
    } else {
      console.error("Element with selector '.text p' not found.");
    }
  }, []);

  return (
    <div>
      <div className="flex justify-start md:flex-col lg:flex-row flex-col mx-auto gap-10 border-2 border-red-500">
        <div>
          <img
            src="https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg"
            alt=""
          />
          <h1 className="text-4xl font-cardo text-[#bdb9b5] font-medium mt-10">
            BOOK YOUR <br /> DELEGANT <br /> STAYINGS WITH <br /> OUR INN
          </h1>
          <div className="border-t-2 border-2 border-black mt-5">{'  '}</div>
          <h1 className="font-outfit font-bold text-base mt-5">
            Sahil Abrar,{' '}
            <span className="text-[#a9774e] text-xs font-thin">
              Founder & Ceo
            </span>
          </h1>
        </div>

        <div>
          <div className="relative">
            <img
              className="h-[220px] w-[220px]"
              src="https://i.ibb.co/R0Zq6RY/bedroom-1285156-1280.jpg"
              alt=""
            />
          </div>

          <div className="absolute lg:bottom-[-590px] lg:right-[500px] md:right-[470px] md:bottom-[-1500px] bottom-[-1000px] right-[90px]">
            <div className="circle">
              <img
                className="rounded-full w-[150px] h-[150px]"
                src="https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=po91poqYoQTbHUpO1LD1HcxCFZVpRG-loAMWZT7YRe4="
                alt=""
              />
              <div className="text">
                <p>Inn-Tero Experience Elegantly here</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="font-cursive font-bold text-3xl text-[#FB9541]">
              About Our Inn
            </h1>
            <h1 className="font-cardo  lg:text-5xl text-3xl">
              ONE OF THE ELEGANT <br /> INN IN THE AREA
            </h1>
            <div>
              <h1 className="font-outfit text-[#7c8083] mt-5">
                The masterbuilder of human happiness no one <br /> dislikes, too
                avoids pleasure itself because it is <br /> pleasure, but
                because those who do not knows <br /> pleasure rationally
                encounters consequences <br /> pursues or desires to obtain.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextCircle;
