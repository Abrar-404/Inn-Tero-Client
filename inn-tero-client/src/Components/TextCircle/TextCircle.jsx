import { useEffect } from 'react';
import '../Styles/circletext.css';
import '../Styles/customfont.css';
import { FaCircleCheck } from 'react-icons/fa6';
import { BsArrowRight } from 'react-icons/bs';

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
      <div className="flex md:flex-col lg:flex-row flex-col mx-auto gap-14 border-2 border-red-500 mt-72 justify-center">
        <div className="">
          <img
            className="flex md:justify-center mx-auto"
            src="https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg"
            alt=""
          />
          <h1 className="text-4xl font-cardo lg:text-left md:text-center text-center text-[#bdb9b5] font-medium mt-10">
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
          <div>
            <div className="relative">
              <img
                className="h-[220px] w-[220px]"
                src="https://i.ibb.co/R0Zq6RY/bedroom-1285156-1280.jpg"
                alt=""
              />
              <div className="absolute lg:bottom-[70px] lg:right-[400px] f md:right-[470px] md:bottom-[50px] flex justify-center bottom-[60px] right-[90px]">
                <div>
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
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="font-cursive mx-auto md:text-center lg:text-start text-center lg:justify-start justify-center flex font-bold text-3xl text-[#FB9541]">
              About Our Inn
            </h1>
            <h1 className="font-cardo mx-auto md:text-center lg:text-left justify-center lg:justify-start  flex lg:text-5xl text-3xl">
              ONE OF THE ELEGANT <br /> INN IN THE AREA
            </h1>

            <div className="flex mt-5 gap-7 lg:flex-row md:flex-col flex-col">
              <div>
                <h1 className="font-outfit text-[#7c8083] flex lg:justify-start md:justify-center justify-center mx-auto">
                  The masterbuilder of human happiness no one <br /> dislikes,
                  too avoids pleasure itself because it is <br /> pleasure, but
                  because those who do not knows <br /> pleasure rationally
                  encounters consequences <br /> pursues or desires to obtain.
                </h1>

                <ul className="list-item clearfix mt-5 font-outfit">
                  <li className="flex items-center justify-center gap-2 border-b-2">
                    <i className="flaticon-basic-tick" />{' '}
                    <span className="text-2xl text-[#a9774e]">
                      <FaCircleCheck />
                    </span>{' '}
                    <span className=" text-[#8d8b8a] lg:text-xl md:text-xl text-sm pb-2">
                      Experience luxury in the lap of nature
                    </span>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start md:justify-center gap-2 border-b-2 mt-2">
                    <i className="flaticon-basic-tick" />{' '}
                    <span className="text-2xl text-[#a9774e]">
                      <FaCircleCheck />
                    </span>{' '}
                    <span className=" text-[#8d8b8a] lg:text-xl md:text-xl text-sm mt-2 ">
                      {' '}
                      Providing iconic experiences
                    </span>
                  </li>
                </ul>

                <div className="mt-12">
                  <div className="flex mx-auto md:text-center justify-center lg:justify-start items-center gap-2 ">
                    <span className="text-4xl font-thin text-[#A9774E]">
                      <BsArrowRight />{' '}
                    </span>
                    <span className="font-outfit text-sm font-bold">
                      More About Us
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <img
                  className="mx-auto md:text-center justify-center flex"
                  src="https://fastwpdemo.com/newwp/grandeur/wp-content/uploads/2023/02/about-3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextCircle;
