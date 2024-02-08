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
      <div className="circle">
        <div className="text">
          <p>Inn-Tero Experience Elegantly Withus</p>
        </div>
      </div>
    </div>
  );
};

export default TextCircle;
