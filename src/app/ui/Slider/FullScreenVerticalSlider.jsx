import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Navigation } from 'swiper';
import { Icon } from '@iconify/react';
import Div from '../Div';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function FullScreenVerticalSlider({ data = [] }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Only render on the client
  }, []);

  if (!isClient) {
    return null; // Avoid rendering on the server
  }

  if (!data || !Array.isArray(data) || data.length === 0) {
    console.error("The 'data' prop is missing or invalid.");
    return <p>No slides available.</p>;
  }

  return (
    <>
      <Div className="cs-vertical_slider cs-swiper_arrow_style_1">
        <Div className="swiper-button image-swiper-button-next">
          Next <Icon icon="bi:arrow-right" />
        </Div>
        <Div className="swiper-button image-swiper-button-prev">
          <Icon icon="bi:arrow-left" /> Prev
        </Div>
        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={0}
          mousewheel={true}
          speed={1000}
          loop={true}
          modules={[Mousewheel, Pagination, Navigation]}
          className="mySwiper"
          navigation={{
            nextEl: '.image-swiper-button-next',
            prevEl: '.image-swiper-button-prev',
            disabledClass: 'swiper-button-disabled',
          }}
          breakpoints={{
            0: {
              slidesPerView: 3, // Adjust this for mobile responsiveness
            },
            768: {
              slidesPerView: 1,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Div
                className="cs-hero cs-style5 cs-bg"
                style={{
                  backgroundImage: `url(${item.imgUrl})`,
                  width: '100%',
                  height: '100%',
                }}
              ></Div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Div>
    </>
  );
}

