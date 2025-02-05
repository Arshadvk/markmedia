import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
const testimonialData = [
  {
    caption : "Exceptional Quality and Creativity" ,
    testimonialThumb: '/images/testimonial_1.jpeg',
    testimonialText:
      'Mark Media’s team is simply outstanding! Their photography and videography skills are top-notch, capturing every moment with stunning detail and creativity. The editing team adds the perfect final touch, ensuring a polished and cinematic result. Highly recommend them for any event or business needs!',
    avatarName: 'Arshad Vk',
    avatarDesignation: 'CEO AT VOID',
    ratings: '5',
  },
  {
    caption : "Professional and Reliable" ,
    testimonialThumb: '/images/testimonial_2.jpeg',
    testimonialText:
      'We hired Mark Media for a corporate shoot, and they exceeded our expectations. The photographers and videographers were professional, punctual, and knew exactly how to bring out the best in every shot. The editing was seamless, delivering high-quality visuals that truly impressed our audience.',
    avatarName: 'Ansar Anzy',
    avatarDesignation: 'MD AT MAXHOME',
    ratings: '5',
  },
  {
    caption : "Great Attention to Detail" ,
    testimonialThumb: '/images/testimonial_2.jpeg',
    testimonialText:
      'Mark Media’s team has an incredible eye for detail. From capturing emotions in photos to creating engaging video content, their work is truly exceptional. The editing team enhances every frame perfectly, making the final product stand out. Definitely our go-to team for future projects!',
    avatarName: 'Thasleem',
    avatarDesignation: '',
    ratings: '5',
  },
];

export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                    caption={item.caption}
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
