'use client'
import Hero7 from "@/app/ui/Hero/Hero7";

const heroSocialLinks = [
  {
    name: 'Behance',
    links: '/',
  },
  {
    name: 'Twitter',
    links: '/',
  },
];

const showcaseData = [
  {
    title: 'Uber food app <br />case study',
    color : 'black' ,
    imgUrl: '/images/slider/slider_1.jpg',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'white' ,
    imgUrl: '/images/slider/slider_2.jpg',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'white' ,
    imgUrl: '/images/slider/slider_3.jpg',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'white' ,
    imgUrl: '/images/slider/slider_4.jpg',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'white' ,
    imgUrl: '/images/slider/slider_5.jpg',
    href: '/case-study/case-study-details',
  },
];

export default function Home() {

    return (
      <>
        <Hero7
          heroSocialLinks={heroSocialLinks}
          socialLinksHeading="Follow Us"
          showcaseData={showcaseData}
        />
      </>
    );
}
