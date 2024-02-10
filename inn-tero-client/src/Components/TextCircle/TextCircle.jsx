import { useEffect } from 'react';
import '../Styles/circletext.css';

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
  // empty dependency array to run the effect only once after initial render

  return (
    <div>
      <div className="flex justify-start gap-10">
        <div>
          <img
            src="https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg"
            alt=""
          />
        </div>

        <div>
          <div className="relative">
            <img
              className="h-[220px] w-[220px]"
              src="https://i.ibb.co/R0Zq6RY/bedroom-1285156-1280.jpg"
              alt=""
            />
          </div>

          <div className="absolute bottom-[-590px] right-[500px]">
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
  );
};

export default TextCircle;
