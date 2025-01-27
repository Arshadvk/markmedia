import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Cta from '../Cta';
const teamData = [
  {
    memberImage: '/images/member_1.jpeg',
    memberName: 'Melon Bulgery',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Olinaz Fushi',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_3.jpeg',
    memberName: 'David Elone',
    memberDesignation: 'React Developer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_4.jpeg',
    memberName: 'Melina Opole',
    memberDesignation: 'WP Developer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_3.jpeg',
    memberName: 'David Elone',
    memberDesignation: 'React Developer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_4.jpeg',
    memberName: 'Melina Opole',
    memberDesignation: 'WP Developer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_1.jpeg',
    memberName: 'Melon Bulgery',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Olinaz Fushi',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
];

export default function TeamSlider() {
  /** Team Member Data **/

  /** Slider Settings **/
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
   
    <Div className="container">
    <SectionHeading
      title="Meet our awesome <br/>team members"
      subtitle="Our Team"
      variant="cs-style1 text-center"
    />
    <Spacing lg="90" md="45" />
    <Div className="row">
      {teamData.map((item, index) => (
        <Div key={index} className="col-lg-3 col-sm-6">
          <Team
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            memberSocial={item.memberSocial}
          />
          <Spacing lg="80" md="30" />
        </Div>
      ))}
    </Div>
    <Spacing lg="70" md="50" />
    <Div className="container">
      <Cta
        title="Let’s disscuse make <br />something <i>cool</i> together"
        btnText="Apply For Meeting"
        btnLink="/contact"
        bgSrc="/images/cta_bg.jpeg"
      />
    </Div>
  </Div>
  );
}
