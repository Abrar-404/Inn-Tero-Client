import { useEffect } from "react";
import '../Styles/slider.css'

import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'


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
            <img src={img1} alt="" />
            <div class="introduce">
              <div class="title">DESIGN SLIDER</div>
              <div class="topic">Aerphone</div>
              <div class="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button class="seeMore">SEE MORE &#8599</button>
            </div>
            <div class="detail">
              <div class="title">Aerphone GHTK</div>
              <div class="des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div class="specifications">
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div class="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          <div class="item">
            <img src={img2} alt="" />
            <div class="introduce">
              <div class="title">DESIGN SLIDER</div>
              <div class="topic">Aerphone</div>
              <div class="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button class="seeMore">SEE MORE &#8599</button>
            </div>
            <div class="detail">
              <div class="title">Aerphone GHTK</div>
              <div class="des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div class="specifications">
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div class="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          <div class="item">
            <img src={img3} alt="" />
            <div class="introduce">
              <div class="title">DESIGN SLIDER</div>
              <div class="topic">Aerphone</div>
              <div class="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button class="seeMore">SEE MORE &#8599</button>
            </div>
            <div class="detail">
              <div class="title">Aerphone GHTK</div>
              <div class="des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div class="specifications">
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div class="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          <div class="item">
            <img src={img4} alt="" />
            <div class="introduce">
              <div class="title">DESIGN SLIDER</div>
              <div class="topic">Aerphone</div>
              <div class="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button class="seeMore">SEE MORE &#8599</button>
            </div>
            <div class="detail">
              <div class="title">Aerphone GHTK</div>
              <div class="des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div class="specifications">
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div class="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          <div class="item">
            <img src={img5} alt="" />
            <div class="introduce">
              <div class="title">DESIGN SLIDER</div>
              <div class="topic">Aerphone</div>
              <div class="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button class="seeMore">SEE MORE &#8599</button>
            </div>
            <div class="detail">
              <div class="title">Aerphone GHTK</div>
              <div class="des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div class="specifications">
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div class="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          <div class="item">
            <img src={img5} alt="" />
            <div class="introduce">
              <div class="title">DESIGN SLIDER</div>
              <div class="topic">Aerphone</div>
              <div class="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button class="seeMore">SEE MORE &#8599</button>
            </div>
            <div class="detail">
              <div class="title">Aerphone GHTK</div>
              <div class="des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div class="specifications">
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div class="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
        <div class="arrows">
          <button id="prev"></button>
          <button id="next"></button>
          <button id="back">See All &#8599</button>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlider2;