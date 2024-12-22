import React, { useEffect, useRef, useState } from "react";

const HomePg = () => {
  const nextDom = useRef(null);
  const prevDom = useRef(null);
  const carouselDom = useRef(null);
  const thumbnailBorderDom = useRef(null);
  const timeDom = useRef(null);
  const [runNextAuto, setRunNextAuto] = useState(null);

  useEffect(() => {
    const thumbnailItemsDom = thumbnailBorderDom.current?.querySelectorAll('.item');
    thumbnailBorderDom.current?.appendChild(thumbnailItemsDom[0]);
    const timeRunning = 3000;
    const timeAutoNext = 7000;

    nextDom.current.onclick = function() {
      showSlider('next');
    };

    prevDom.current.onclick = function() {
      showSlider('prev');
    };

    const showSlider = (type) => {
      const SliderItemsDom = carouselDom.current?.querySelectorAll('.carousel .list .item');

      if (type === 'next') {
        carouselDom.current?.querySelector('.list').appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.current?.appendChild(thumbnailItemsDom[0]);
        carouselDom.current?.classList.add('next');
      } else {
        carouselDom.current?.querySelector('.list').prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.current?.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.current?.classList.add('prev');
      }

      clearTimeout(runNextAuto);
      setRunNextAuto(setTimeout(() => {
        nextDom.current.click();
      }, timeAutoNext));
    };

    setRunNextAuto(setTimeout(() => {
      nextDom.current.click();
    }, timeAutoNext));

    return () => {
      clearTimeout(runNextAuto);
    };
  }, [runNextAuto]);

  return (
    <div>
      <div className="carousel" ref={carouselDom}>
        <div className="list">
          <div className="item">
            <img src="image/img8.jpg" alt="item 1" />
            <div className="content">
              <div className="author">Research</div>
              <div className="title">SCRI</div>
              <div className="topic">IIT Mandi</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde.
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>Events</button>
              </div>
            </div>
          </div>
          {/* Repeat for other items */}
        </div>
        <div className="thumbnail" ref={thumbnailBorderDom}>
          <div className="item">
            <img src="image/img8.jpg" alt="thumbnail 1" />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
          {/* Repeat for other thumbnails */}
        </div>
        <div className="arrows">
          <button id="prev" ref={prevDom}>{"<"}</button>
          <button id="next" ref={nextDom}>{">"}</button>
        </div>
        <div className="time" ref={timeDom}></div>
      </div>
    </div>
  );
};

export default HomePg;
