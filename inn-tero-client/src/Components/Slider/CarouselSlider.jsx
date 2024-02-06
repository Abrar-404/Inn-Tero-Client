import React, { useState, useEffect } from 'react';
import '../Styles/slider.css';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';

function CarouselSlider() {
  const [showDetail, setShowDetail] = useState(false);

  const hideDetailHandler = () => {
    setShowDetail(false);
  };

  useEffect(() => {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const carousel = document.querySelector('.carou');
    const listHTML = document.querySelector('.carou .list');
    const seeMoreButtons = document.querySelectorAll('.seeMore');
    const backButton = document.getElementById('back');

    if (nextButton && prevButton && carousel && listHTML && backButton) {
      nextButton.onclick = () => showSlider('next');
      prevButton.onclick = () => showSlider('prev');
      backButton.onclick = hideDetailHandler;
    }

    const showSlider = type => {
      if (!carousel || !listHTML) return;

      nextButton.style.pointerEvents = 'none';
      prevButton.style.pointerEvents = 'none';

      const items = document.querySelectorAll('.carou .list .item');
      const firstItem = items[0];
      const lastItem = items[items.length - 1];

      if (type === 'next') {
        const cloneFirst = firstItem.cloneNode(true);
        listHTML.appendChild(cloneFirst);
        listHTML.style.transition = 'transform 0.4s ease-in-out';
        listHTML.style.transform = `translateX(-${firstItem.offsetWidth}px)`;

        setTimeout(() => {
          listHTML.style.transition = 'none';
          listHTML.style.transform = 'translateX(0)';
          listHTML.removeChild(firstItem);
          nextButton.style.pointerEvents = 'auto';
          prevButton.style.pointerEvents = 'auto';
        }, 400);
      } else if (type === 'prev') {
        const cloneLast = lastItem.cloneNode(true);
        listHTML.insertBefore(cloneLast, firstItem);
        listHTML.style.transition = 'none';
        listHTML.style.transform = `translateX(-${lastItem.offsetWidth}px`;

        setTimeout(() => {
          listHTML.style.transition = 'transform 0.4s ease-in-out';
          listHTML.style.transform = 'translateX(0)';
          listHTML.removeChild(lastItem);
          nextButton.style.pointerEvents = 'auto';
          prevButton.style.pointerEvents = 'auto';
        }, 50);
      }
    };

    seeMoreButtons.forEach(button => {
      button.onclick = () => {
        carousel?.classList.remove('next', 'prev');
        carousel?.classList.add('showDetail');
      };
    });
  }, []);

  return (
    <div>
      <header>
        <div className="logo">Lundev</div>
        <nav>
          <a href="">Home</a>
          <a href="">Info</a>
          <a href="">Contact</a>
        </nav>
      </header>
      <div className="carou">
        <div className={`list ${showDetail ? 'showDetail' : ''}`}>
          <div className="item">
            <img src={img1} alt="img1" />
            <div className="introduce">
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">Aerphone</div>
              <div className="des">
                {/* 20 lorem */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button className="seeMore">SEE MORE &#8599</button>
            </div>
            <div className="detail">
              <div className="title">Aerphone GHTK</div>
              <div className="des">
                {/* lorem 50 */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div className="specifications">
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
              <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          <div className="item">
            <img src={img2} alt="img2" />
            <div className="introduce">
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">Aerphone</div>
              <div className="des">
                {/* 20 lorem */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button className="seeMore">SEE MORE &#8599</button>
            </div>
            <div className="detail">
              <div className="title">Aerphone GHTK</div>
              <div className="des">
                {/* lorem 50 */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div className="specifications">
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
              <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          <div className="item">
            <img src={img3} alt="img3" />
            <div className="introduce">
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">Aerphone</div>
              <div className="des">
                {/* 20 lorem */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button className="seeMore">SEE MORE &#8599</button>
            </div>
            <div className="detail">
              <div className="title">Aerphone GHTK</div>
              <div className="des">
                {/* lorem 50 */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div className="specifications">
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
              <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          <div className="item">
            <img src={img4} alt="img4" />
            <div className="introduce">
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">Aerphone</div>
              <div className="des">
                {/* 20 lorem */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button className="seeMore">SEE MORE &#8599</button>
            </div>
            <div className="detail">
              <div className="title">Aerphone GHTK</div>
              <div className="des">
                {/* lorem 50 */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div className="specifications">
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
              <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          <div className="item">
            <img src={img5} alt="img5" />
            <div className="introduce">
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">Aerphone</div>
              <div className="des">
                {/* 20 lorem */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button className="seeMore">SEE MORE &#8599</button>
            </div>
            <div className="detail">
              <div className="title">Aerphone GHTK</div>
              <div className="des">
                {/* lorem 50 */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div className="specifications">
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
              <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={img6} alt="img6" />
            <div className="introduce">
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">Aerphone</div>
              <div className="des">
                {/* 20 lorem */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button className="seeMore">SEE MORE &#8599</button>
            </div>
            <div className="detail">
              <div className="title">Aerphone GHTK</div>
              <div className="des">
                {/* lorem 50 */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div className="specifications">
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
              <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
        <div className="arrows">
          <button id="prev">&#60;</button>
          <button id="next">&#62;</button>
          <button id="back" onClick={hideDetailHandler}>
            See All &#8599
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarouselSlider;
