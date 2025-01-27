'use client'
import Hero7 from "@/app/ui/Hero/Hero7";
import Hero2 from "./ui/Hero/Hero2";

const heroSocialLinks = [
  {
    name: 'Behance',
    links: '/',
  },
  {
    name: 'Instagram',
    links: 'https://www.instagram.com/markmedia.ae/#',
  },
];
const heroData = [
  {
    title: 'Wedding',
    imageUrl: '/images/wedding.jpeg',
    href: '/service/service-details',
  },
  {
    title: 'Fashion',
    imageUrl: '/images/fashion.jpeg',
    href: '/service/service-details',
  },
  {
    title: 'Commercial',
    imageUrl: '/images/commercial.jpeg',
    href: '/service/service-details',
  },
  {
    title: 'Landscape',
    imageUrl: '/images/landscape.jpeg',
    href: '/service/service-details',
  },
];

const showcaseData = [
  {
    title: 'Uber food app <br />case study',
    color : 'black' ,
    imgUrl: '/images/slider/slider_1.webp',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'white' ,
    imgUrl: '/images/slider/slider_2.webp',
    href: '/case-study/case-study-details',
  },
  {
    title: '',
    color : 'white' ,
    imgUrl: '/images/slider/slider_3.webp',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'white' ,
    imgUrl: '/images/slider/slider_4.webp',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'white' ,
    imgUrl: '/images/slider/slider_5.webp',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'black' ,
    imgUrl: '/images/slider/slider_6.webp',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'black' ,
    imgUrl: '/images/slider/slider_7.webp',
    href: '/case-study/case-study-details',
  }, 
  {
    title: 'Uber food app <br />case study',
    color : 'black' ,
    imgUrl: '/images/slider/slider_8.webp',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'black' ,
    imgUrl: '/images/slider/slider_9.webp',
    href: '/case-study/case-study-details',
  },  {
    title: 'Uber food app <br />case study',
    color : 'black' ,
    imgUrl: '/images/slider/slider_10.webp',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'black' ,
    imgUrl: '/images/slider/slider_11.webp',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'black' ,
    imgUrl: '/images/slider/slider_12.webp',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'black' ,
    imgUrl: '/images/slider/slider_13.webp',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'black' ,
    imgUrl: '/images/slider/slider_14.webp',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'black' ,
    imgUrl: '/images/slider/slider_15.webp',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'black' ,
    imgUrl: '/images/slider/slider_16.webp',
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
