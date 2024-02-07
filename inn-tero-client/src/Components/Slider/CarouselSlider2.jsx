import { useEffect } from 'react';
import '../Styles/slider.css';
import '../Styles/sliderbtn.css';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import '../Styles/starbannerbtn.css';

import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpeg';
import img6 from '../../assets/img6.jpg';
import { Link } from 'react-router-dom';

const CarouselSlider2 = () => {
  useEffect(() => {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const carousel = document.querySelector('.carou');
    const listHTML = document.querySelector('.carou .list');
    const seeMoreButtons = document.querySelectorAll('.seeMore');
    const backButton = document.getElementById('back');

    const showSlider = type => {
      nextButton.style.pointerEvents = 'none';
      prevButton.style.pointerEvents = 'none';

      carousel.classList.remove('next', 'prev');
      let items = document.querySelectorAll('.carou .list .item');
      if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
      } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
      }
      clearTimeout(unAcceppClick);
      unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
      }, 2000);
    };

    nextButton.onclick = function () {
      showSlider('next');
    };
    prevButton.onclick = function () {
      showSlider('prev');
    };

    seeMoreButtons.forEach(button => {
      button.onclick = function () {
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
      };
    });
    backButton.onclick = function () {
      carousel.classList.remove('showDetail');
    };

    let unAcceppClick;
  }, []);

  return (
    <div>
      <div class="carou">
        <div class="list">
          <div class="item">
            <img
              className="lg:w-[300px] lg:h-[350px] md:w-[300px] md:h-[200px] w-[300px] h-[100px] rounded-lg"
              src={img1}
              alt=""
            />
            <div class="introduce">
              <div class="title">Well Interiored</div>
              <div class="topic">ROOMS</div>
              <div class="des">
                Rooms which provides you the most elegant experiences . Book
                your staying with your own preferences. Experience the magical
                decor.
              </div>
              <button class="seeMore">SEE MORE</button>
            </div>
            <div class="detail">
              <div class="title">Interiored ROOMS</div>
              <div class="des">
                This spacious room boasts elegant decor, blending modernity with
                comfort seamlessly. Natural light cascades through large
                windows, highlighting the chic furnishings. Soft, plush carpets
                cushion every step, while sleek furniture invites relaxation.
                Smart technology seamlessly integrates for convenience.
              </div>
              <div class="specifications">
                <div>
                  <p>Availability</p>
                  <p>Available</p>
                </div>
                <div>
                  <p>Bed Sizes</p>
                  <p>King Sized</p>
                </div>
                <div>
                  <p>Washroom</p>
                  <p>Attached</p>
                </div>
                <div>
                  <p>View</p>
                  <p>Wide view</p>
                </div>
                <div>
                  <p>Entertainment</p>
                  <p>TV</p>
                </div>
              </div>
              <div class="checkout z-50">
                {/* <button>BOOK ROOM</button>
                <button>CHECKOUT</button> */}
                <Link to="/gallery">
                  <button className="butto">
                    Visit Gallery
                    <div class="star-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div class="item">
            <img
              className="lg:w-[300px] lg:h-[350px] md:w-[300px] md:h-[200px] w-[300px] h-[100px] rounded-lg"
              src={img2}
              alt=""
            />
            <div class="introduce">
              <div class="title">Large</div>
              <div class="topic">HALL</div>
              <div class="des">
                Indulge in luxury dining at our hotel's grand hall, adorned with
                exquisite decor and offering unparalleled culinary experiences.
              </div>
              <button class="seeMore">SEE MORE</button>
            </div>
            <div class="detail">
              <div class="title">LARGE HALL</div>
              <div class="des">
                Experience opulent dining in our hotel's expansive hall,
                resplendent with lavish furnishings and elegant ambiance.
                Immerse yourself in a gastronomic journey, surrounded by
                impeccable service and stunning architectural details. Savor
                exquisite flavors while basking in the sophistication and charm
                of this distinguished culinary haven.
              </div>
              <div class="specifications">
                <div>
                  <p>Space</p>
                  <p>Very Large</p>
                </div>
                <div>
                  <p>Capacity</p>
                  <p>400 people</p>
                </div>
                <div>
                  <p>Type</p>
                  <p>Gathering & Dine</p>
                </div>
                <div>
                  <p>Functionality</p>
                  <p>Festive</p>
                </div>
                <div>
                  <p>Entertainment</p>
                  <p>Opera & Ballet</p>
                </div>
              </div>
              <div class="checkout">
                {/* <button>ADD TO CART</button>
                <button>CHECKOUT</button> */}

                <Link to="/gallery">
                  <button className="butto">
                    Visit Gallery
                    <div class="star-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div class="item">
            <img
              className="lg:w-[300px] lg:h-[350px] md:w-[300px] md:h-[200px] w-[300px] h-[100px] rounded-lg"
              src={img3}
              alt=""
            />
            <div class="introduce">
              <div class="title">Candle Light</div>
              <div class="topic">DINNER</div>
              <div class="des">
                Indulge in a romantic candlelit dinner at our luxurious hotel,
                where exquisite cuisine and intimate ambiance create
                unforgettable memories.
              </div>
              <button class="seeMore">SEE MORE</button>
            </div>
            <div class="detail">
              <div class="title">Candle Light Dinner</div>
              <div class="des">
                Experience the epitome of romance with our candlelit dinner in
                the finest hotel setting. Immerse yourself in the warm glow of
                flickering candles as you savor delectable cuisine, expertly
                crafted to delight your senses. Create cherished moments amidst
                the elegant atmosphere of our distinguished establishment.
              </div>
              <div class="specifications">
                <div>
                  <p>Quality</p>
                  <p>Elegant</p>
                </div>
                <div>
                  <p>Capacity</p>
                  <p>2 persons</p>
                </div>
                <div>
                  <p>Shift</p>
                  <p>Night</p>
                </div>
                <div>
                  <p>Items</p>
                  <p>Varies</p>
                </div>
                <div>
                  <p>Entertainment</p>
                  <p>Aroma Music</p>
                </div>
              </div>
              <div class="checkout">
                {/* <button>ADD TO CART</button>
                <button>CHECKOUT</button> */}

                <Link to="/gallery">
                  <button className="butto">
                    Visit Gallery
                    <div class="star-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div class="item">
            <img
              className="lg:w-[300px] lg:h-[350px] md:w-[300px] md:h-[200px] w-[300px] h-[100px] rounded-lg"
              src={img4}
              alt=""
            />
            <div class="introduce">
              <div class="title">Pool side</div>
              <div class="topic">DINNER</div>
              <div class="des">
                Indulge in a luxurious poolside dinner experience at our
                esteemed hotel, where gourmet cuisine meets breathtaking
                ambiance and impeccable service.
              </div>
              <button class="seeMore">SEE MORE</button>
            </div>
            <div class="detail">
              <div class="title">Poolside Dinner</div>
              <div class="des">
                Experience unparalleled luxury with a poolside dinner at our
                prestigious hotel. Delight in exquisite cuisine served amidst
                the tranquil ambiance of our elegant pool area. Indulge in the
                perfect blend of culinary mastery, stunning surroundings, and
                attentive service for an unforgettable dining experience unlike
                any other.
              </div>
              <div class="specifications">
                <div>
                  <p>Quality</p>
                  <p>Elegant</p>
                </div>
                <div>
                  <p>Capacity</p>
                  <p>4 Persons</p>
                </div>
                <div>
                  <p>Shift</p>
                  <p>Day & Night</p>
                </div>
                <div>
                  <p>Item</p>
                  <p>Varies</p>
                </div>
                <div>
                  <p>Entertainment</p>
                  <p>Music</p>
                </div>
              </div>
              <div class="checkout">
                {/* <button>ADD TO CART</button>
                <button>CHECKOUT</button> */}

                <Link to="/gallery">
                  <button className="butto">
                    Visit Gallery
                    <div class="star-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div class="item">
            <img
              className="lg:w-[300px] lg:h-[350px] md:w-[300px] md:h-[200px] w-[300px] h-[100px] rounded-lg"
              src={img5}
              alt=""
            />
            <div class="introduce">
              <div class="title">Gathering</div>
              <div class="topic">HALL</div>
              <div class="des">
                Step into our luxurious gathering hall, where opulent décor
                meets unparalleled comfort, creating the perfect ambiance for
                memorable gatherings.
              </div>
              <button class="seeMore">SEE MORE</button>
            </div>
            <div class="detail">
              <div class="title">Gathering Hall</div>
              <div class="des">
                Experience unparalleled elegance in our hotel's gathering hall.
                Immerse yourself in luxurious surroundings adorned with
                exquisite décor and state-of-the-art amenities. Whether hosting
                a grand event or an intimate gathering, our hall provides the
                perfect blend of sophistication and comfort, ensuring
                unforgettable moments for all attendees.
              </div>
              <div class="specifications">
                <div>
                  <p>Space</p>
                  <p>Very Large</p>
                </div>
                <div>
                  <p>Capacity</p>
                  <p>500 peoples</p>
                </div>
                <div>
                  <p>Facility</p>
                  <p>Festives</p>
                </div>
                <div>
                  <p>Types</p>
                  <p>Gathering</p>
                </div>
                <div>
                  <p>Entertainment</p>
                  <p>Opera & Ballet</p>
                </div>
              </div>
              <div class="checkout">
                {/* <button>ADD TO CART</button>
                <button>CHECKOUT</button> */}

                <Link to="/gallery">
                  <button className="butto">
                    Visit Gallery
                    <div class="star-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div class="item">
            <img
              className="lg:w-[300px] lg:h-[350px] md:w-[300px] md:h-[200px] w-[300px] h-[100px] rounded-lg"
              src={img6}
              alt=""
            />
            <div class="introduce">
              <div class="title">Seaside View</div>
              <div class="topic">ROOM</div>
              <div class="des">
                Indulge in unparalleled luxury with our seaside view rooms,
                offering breathtaking vistas of the shimmering ocean and endless
                horizons.
              </div>
              <button class="seeMore">SEE MORE</button>
            </div>
            <div class="detail">
              <div class="title">Seaside Room</div>
              <div class="des">
                Experience the epitome of coastal elegance in our premium
                seaside view rooms. Immerse yourself in panoramic vistas of the
                azure waters, where the gentle waves dance along the shoreline
                beneath the golden sun. Relax and rejuvenate amidst the tranquil
                ambiance, indulging in the ultimate seaside retreat at our
                esteemed hotel.
              </div>
              <div class="specifications">
                <div>
                  <p>Availability</p>
                  <p>Available</p>
                </div>
                <div>
                  <p>Furniture</p>
                  <p>Several</p>
                </div>
                <div>
                  <p>Lavatory</p>
                  <p>3</p>
                </div>
                <div>
                  <p>View</p>
                  <p>Seaside</p>
                </div>
                <div>
                  <p>Entertainment</p>
                  <p>Natural View</p>
                </div>
              </div>
              <div class="checkout">
                {/* <button>ADD TO CART</button>
                <button>CHECKOUT</button> */}

                <Link to="/gallery">
                  <button className="butto">
                    Visit Gallery
                    <div class="star-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="star-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        version="1.1"
                        style={{
                          shapeRendering: 'geometricPrecision',
                          textRendering: 'geometricPrecision',
                          imageRendering: 'optimizeQuality',
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                        }}
                        viewBox="0 0 784.11 815.53"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs></defs>
                        <g id="Layer_x0020_1">
                          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                          <path
                            class="fil0"
                            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="arrows">
          <button
            id="prev"
            className="rounded-full border-2 py-3 px-3 border-gray-800"
            style={{ transition: 'transform 0.3s ease' }}
            onMouseEnter={e => (e.target.style.transform = 'translateX(-10px)')}
            onMouseLeave={e => (e.target.style.transform = 'translateX(0)')}
          >
            <span className="rounded-full text-2xl">
              {' '}
              <IoIosArrowBack></IoIosArrowBack>
            </span>
          </button>
          <button
            id="next"
            className="rounded-full border-2 py-3 px-3 border-gray-800"
            style={{ transition: 'transform 0.3s ease' }}
            onMouseEnter={e => (e.target.style.transform = 'translateX(10px)')}
            onMouseLeave={e => (e.target.style.transform = 'translateX(0)')}
          >
            <span className="rounded-full text-2xl">
              <IoIosArrowForward></IoIosArrowForward>
            </span>
          </button>

          {/* <div class="cont">
            <div className='border-2 rounded-full border-gray-700'>
              <button class="butt" id="prev"></button>
              <span class="arrow first">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </span>
              <span class="arrow second">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </span>
              <span class="arrow third">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </span>
            </div>
          </div>

          <div class="cont">
            <button class="butt" id="next"></button>
            <span class="arrow first">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </span>
            <span class="arrow second">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </span>
            <span class="arrow third">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </span>
          </div> */}

          <button id="back">See All</button>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlider2;
